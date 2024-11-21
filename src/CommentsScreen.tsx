import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from 'axios';

const CommentsScreen = ({ route }: any) => {
  const { token } = route.params;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:4000/comments', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setComments(response.data);
      } catch (err) {
        console.log('Erro ao obter comentários', err);
      }
    };

    fetchComments();
  }, [token]);

  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({ item }) => (
          <View>
            <Text>{item.content}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Sair" onPress={() => {}} />
    </View>
  );
};

export default CommentsScreen;
