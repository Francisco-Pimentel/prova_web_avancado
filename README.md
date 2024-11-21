comandos cmd:

mkdir backend
cd backend
npm init -y
npm install prisma @prisma/client typescript express
npm install --save-dev ts-node @types/node @types/express
npx prisma init
npx prisma migrate dev --name init

#Instalar o react-native
npx create-expo-app app-auth-comments
cd app-auth-comments
npm install axios react-navigation react-navigation-stack react-native-gesture-handler react-native-reanimated react-navigation-drawer

#Para executar:
npx ts-node server.ts
npm start
