import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';


const initialDimensions = Dimensions.get('window');

const App = () => {
  const [dimensions, setDimensions] = useState(initialDimensions);
  const [orientation, setOrientation] = useState(dimensions.width > dimensions.height ? 'landscape' : 'portrait');

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
      setOrientation(window.width > window.height ? 'landscape' : 'portrait');
    });

    return () => subscription?.remove();
  }, []);


  const imageWidth = dimensions.width * 0.8;
  const imageHeight = orientation === 'portrait' ? imageWidth * 0.6 : imageWidth * 0.4; // Reduce height in landscape


  const buttonWidth = orientation === 'portrait' ? dimensions.width / 2 - 15 : dimensions.width / 3 - 15;
  const buttonHeight = 50; 

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://picsum.photos/500' }} // URL của hình ảnh
          style={[styles.image, { width: imageWidth, height: imageHeight }]}       
        />

        <TextInput
          style={styles.input}
          placeholder="Nhập văn bản"
          placeholderTextColor="#aaa"
        />

        <View style={[styles.buttonContainer, { flexDirection: orientation === 'portrait' ? 'row' : 'column' }]}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#4fc4cf', width: buttonWidth, height: buttonHeight }]}
          >
            <Text style={styles.buttonText}>Nút 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#994ff3', width: buttonWidth, height: buttonHeight }]}
          >
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
    backgroundColor: '#f0e2e1',
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
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  button: {
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
