// Exercise4.js
import React from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Button } from 'react-native'


const Exercise4 = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inner}>
        <TextInput
          style={styles.input}
          placeholder="Nhập văn bản ở đây"
          placeholderTextColor="#999"
        />
      </View>
      <Button title="Sang Bài tập 5" onPress={() => navigation.navigate('Exercise5')} />
    </KeyboardAvoidingView>
  ); 
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  input: {
    height: 50,    
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        backgroundColor: 'green',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        backgroundColor: 'white',
        elevation: 2,
      },
    }),
  },
});

export default Exercise4;
