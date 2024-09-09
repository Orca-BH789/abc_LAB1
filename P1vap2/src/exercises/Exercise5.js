// Exercise5.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions ,Button } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width; 

const Exercise5 = ({ navigation }) => {

  const [orientation, setOrientation] = useState('portrait');
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setOrientation(window.width > window.height ? 'landscape' : 'portrait');
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const imageWidth = orientation === 'portrait' ? dimensions.width * 0.8 : dimensions.width * 0.4;
  const imageHeight = imageWidth * 0.75;

  return (
    <View style={styles.container}>
      <View style={[styles.content, orientation === 'landscape' && styles.landscapeContent]}>
        <Image
          source={{ uri: 'https://picsum.photos/500' }}
          style={[
            styles.image,
            {
              width: imageWidth,
              height: imageHeight,
            },
          ]}
        />
        <View style={[styles.buttonContainer, orientation === 'landscape' && styles.landscapeButtons]}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#4A90E2' }]}>
            <Text style={styles.buttonText}>Nút 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#FF6B6B' }]}>
            <Text style={styles.buttonText}>Nút 2</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button title="Sang Bài tập 6" onPress={() => navigation.navigate('Exercise6')} />
    </View>
  ); 
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
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

export default Exercise5;
