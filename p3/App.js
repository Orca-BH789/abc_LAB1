import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Button } from 'react-native';

const initialDimensions = Dimensions.get('window');

const App = () => {
  const [orientation, setOrientation] = useState('portrait');
  const [dimensions, setDimensions] = useState(initialDimensions);

  useEffect(() => {
    
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
      setOrientation(window.width > window.height ? 'landscape' : 'portrait');
    });
 
    return () => subscription?.remove();
  }, []);


  const buttonWidth = orientation === 'portrait' ? dimensions.width / 2 - 20 : dimensions.width / 4 - 20;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.buttonContainer,
          {
            flexDirection: orientation === 'portrait' ? 'column' : 'row',
          },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.button,
            {
              width: buttonWidth,
              backgroundColor: '#4A90E2',
            },
          ]}
        >
          <Text style={styles.buttonText}>Nút 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              width: buttonWidth,
              backgroundColor: '#FF6B6B',
            },
          ]}
        >
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
    backgroundColor: '#F0F0F0',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
