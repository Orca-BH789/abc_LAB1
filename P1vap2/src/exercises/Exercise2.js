import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Button, Image } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Exercise2 = ({ navigation }) => {
  const imageWidth = SCREEN_WIDTH * 0.8;  
  const imageHeight = imageWidth * 0.6;   

  return (
    <View style={styles.container}>
 
      <Image
        source={{ uri: 'https://picsum.photos/500' }} // URL của hình ảnh
        style={[styles.image, { width: imageWidth, height: imageHeight }]}       
      />

    
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#ffd803' }]}>
          <Text style={styles.buttonText}>Nút 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#bae8e8' }]}>
          <Text style={styles.buttonText}>Nút 2</Text>
        </TouchableOpacity>
      </View>

     
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffffe',
  },
  image: {
    marginBottom: 20, 
    borderRadius: 15
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

export default Exercise2;
