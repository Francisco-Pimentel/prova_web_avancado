import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const app = express();
const prisma = new PrismaClient();
const port = 4000;

app.use(express.json());

// Função para gerar o token JWT
const generateToken = (userId: number) => {
  return jwt.sign({ userId }, 'secret-key', { expiresIn: '1h' });
};

// Rota para login
app.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { username } });
    
    if (!user) return res.status(400).json({ error: 'Usuário não encontrado' });

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return res.status(400).json({ error: 'Senha inválida' });

    const token = generateToken(user.id);
    return res.json({ token });
  } catch (err) {
    return res.status(500).json({ error: 'Erro no servidor ao realizar o login' });
  }
});

// Rota para obter comentários
app.get('/comments', async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Token não fornecido' });

  try {
    const decoded = jwt.verify(token, 'secret-key') as { userId: number };
    
    const comments = await prisma.comment.findMany({
      where: { userId: decoded.userId },
    });

    return res.json(comments);
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido ou expirado' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
