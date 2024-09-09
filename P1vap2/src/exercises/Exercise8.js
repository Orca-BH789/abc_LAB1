import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Button, StatusBar, useWindowDimensions, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Exercise8 = ({ navigation }) => {
  const { height, width } = useWindowDimensions();
  const orientation = height > width ? 'portrait' : 'landscape';

  const showPlatformAlert = () => {
    const platformMessage = Platform.OS === 'ios' ? 'Bạn đang sử dụng iOS' : 'Bạn đang sử dụng Android';
    Alert.alert('Thông báo', platformMessage, [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor={orientation === 'portrait' ? '#ff5e62' : '#ff6699'}
      />
      <LinearGradient
        colors={['#ff9966', '#ff5e62', '#ff6699']}
        style={styles.background}
      >
        <Text style={styles.title}>Welcome to My App</Text>
        <TouchableOpacity style={styles.glassButton}>
          <Text style={styles.buttonText} onPress={showPlatformAlert}>Send</Text>
        </TouchableOpacity>
      </LinearGradient>
      <Button title="Sang Bài tập 1" onPress={() => navigation.navigate('Exercise1')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5e62',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    ...Platform.select({
      ios: {
        fontFamily: 'Helvetica',
        textShadowColor: 'rgba(255, 0, 0, 0.8)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 15,
      },
      android: {
        fontFamily: 'Roboto',
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
      },
    }),
  },
  glassButton: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    ...Platform.select({
      ios: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        color: '#fff',
      },
      android: {
        fontFamily: 'Roboto',
        fontSize: 30,
      },
    }),
  },
});

export default Exercise8 ;
