import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/login', { username, password });
      const token = response.data.token;
      navigation.navigate('Comments', { token });
    } catch (err) {
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error && <Text>{error}</Text>}
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
