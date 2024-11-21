import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button, Input } from "@rneui/themed";
import api from "../../services/api";
import { NavigationProp } from "@react-navigation/native";

export function Auth({ navigation }: { navigation: NavigationProp<any> }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Método para login
  async function handleSignIn() {
    try {
      const response = await api.post("/login", { email, password }); // Ajuste a rota conforme a API
      const { data } = response;

      // Sucesso no login
      Alert.alert("Login bem-sucedido!", `Bem-vindo, ${data.user.name}`);
      // Navegue para outra tela após login, se necessário
      navigation.navigate("Home");
    } catch (error: any) {
      console.error(error);
      Alert.alert(
        "Erro de Login",
        error.response?.data?.message || "Não foi possível realizar o login."
      );
    }
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subtitle}>
          Por favor, entre ou cadastre-se para continuar
        </Text>
        <View style={styles.inputGroup}>
          <Input
            label="Email"
            leftIcon={{
              type: "font-awesome",
              name: "envelope",
              color: "red",
            }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="email@endereco.com"
            autoCapitalize="none"
            inputContainerStyle={styles.inputContainer}
          />
          <Input
            label="Senha"
            leftIcon={{
              type: "font-awesome",
              name: "lock",
              color: "red",
            }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Senha"
            autoCapitalize="none"
            inputContainerStyle={styles.inputContainer}
          />
        </View>
        <View style={styles.buttonGroup}>
          <Button
            title="Entrar"
            onPress={handleSignIn}
            buttonStyle={styles.button}
          />
          <Button
            title="Cadastrar-se"
            onPress={() => {
              navigation.navigate("Create");
            }}
            buttonStyle={[styles.button, styles.signUpButton]}
            titleStyle={styles.signUpTitle}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  formContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputContainer: {
    borderBottomWidth: 0,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 10,
  },
  buttonGroup: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    backgroundColor: "red",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: 300,
  },
  signUpButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "red",
  },
  signUpTitle: {
    color: "red",
  },
  forgotPassword: {
    fontSize: 14,
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});
