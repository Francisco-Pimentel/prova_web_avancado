import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";

import { RouteProp, useRoute } from "@react-navigation/native";

export function Details() {
  const route = useRoute<RouteProp<{ params: { groupId: number } }, "params">>();
  const { groupId } = route.params;

  const [groupDetails, setGroupDetails] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroupDetails = async () => {
      
    };

    fetchGroupDetails();
  }, [groupId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="red" />
        <Text>Carregando detalhes...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!groupDetails) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Grupo não encontrado.</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.sectionTitle}>Nome do grupo: </Text>
      
      <Text style={styles.sectionTitle}>Descrição:</Text>
      

      <Text style={styles.sectionTitle}>Alunos</Text>


      <Text style={styles.sectionTitle}>Avaliações</Text>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "red",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    marginTop: 20,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  noDataText: {
    fontSize: 16,
    color: "#888",
  },
});
