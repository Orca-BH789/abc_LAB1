  // Exercise1.js
  import React from 'react';
  import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Button } from 'react-native';

  const { width: SCREEN_WIDTH } = Dimensions.get('window');

  const Exercise1 = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#d9d4e7' }]}>
            <Text style={styles.buttonText}>Nút 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#eaddcf' }]}>
            <Text style={styles.buttonText}>Nút 2</Text>
          </TouchableOpacity>
        </View>
        <Button  title="Sang P2" onPress={() => navigation.navigate('Exercise2')} />
      </View>
    ); 
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fec7d7',
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
      color: '#272343',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  export default Exercise1;
