# comandos cmd utilizados:
//mkdir backend
//cd backend
//npm init -y
//npm install prisma @prisma/client typescript express
//npm install --save-dev ts-node @types/node @types/express
//npx prisma init
//npx prisma migrate dev --name init

# Instalar o react-native
npx create-expo-app app-auth-comments;
cd app-auth-comments;
npm install axios react-navigation react-navigation-stack react-native-gesture-handler react-native-reanimated react-navigation-drawer

# Para executar:
//npx ts-node server.ts
//npm start

# O server é utilizado como api e os arquivos react-native utilizam a mesma para fazer autenticação de email e senha no prisma.

# Precisa criar um email e senha dentro do prisma pois não estava inserindo no pc da uvv. Aí só utilizar os seguintes comandos:

# Acesse a tabela de usuários: No navegador, abra a tabela User (ou o nome definido no seu schema.prisma).Clique em "Create Record" ou "Adicionar registro".Preencha os campos email e password

//npx prisma studio

# Se precisar que a senha seja hashada, você pode fazer isso previamente com o bcrypt:

//npx ts-node -e "const bcrypt = require('bcrypt'); bcrypt.hash('password123', 10).then(console.log)"

# Todas as dependencias estão no package.json.



