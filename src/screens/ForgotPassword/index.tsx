import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, Alert } from "react-native";
import { Input, Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

export function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handlePasswordReset = async () => {
    setLoading(true);
    
     
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Redefinir Senha</Text>
        <Text style={styles.subtitle}>
          Digite seu e-mail para receber um link de redefinição de senha.
        </Text>
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
        <Button
          title="Enviar Link"
          loading={loading}
          onPress={handlePasswordReset}
          buttonStyle={styles.button}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1, 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: 400,
    padding: 20,
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
  inputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginVertical: 10,
  },
  button: {
    display: "flex",
    backgroundColor: "red",
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
    width: 200,
  },
});
