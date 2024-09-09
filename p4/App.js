import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Button, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const App = () => {
  const imageWidth = SCREEN_WIDTH * 0.8;  
  const imageHeight = imageWidth * 0.6;   

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://picsum.photos/500' }} 
          style={[styles.image, { width: imageWidth, height: imageHeight }]}       
        />

        <TextInput
          style={styles.input}
          placeholder="Nhập văn bản"
          placeholderTextColor="#aaa"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#3da9fc' }]}>
            <Text style={styles.buttonText}>Nút 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#90b4ce' }]}>
            <Text style={styles.buttonText}>Nút 2</Text>
          </TouchableOpacity>
        </View>

     
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8eefe',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    marginBottom: 20, 
    borderRadius: 15,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
  },
  button: {
    width: SCREEN_WIDTH / 2 - 15, 
    padding: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
