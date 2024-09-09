import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Button, Image, KeyboardAvoidingView, TextInput, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Get initial dimensions
const initialDimensions = Dimensions.get('window');

const App = () => {
  const [dimensions, setDimensions] = React.useState(initialDimensions);
  const [orientation, setOrientation] = React.useState(dimensions.width > dimensions.height ? 'landscape' : 'portrait');

  React.useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
      setOrientation(window.width > window.height ? 'landscape' : 'portrait');
    });

    return () => subscription?.remove();
  }, []);

  const imageWidth = dimensions.width * 0.8;
  const imageHeight = orientation === 'portrait' ? imageWidth * 0.6 : imageWidth * 0.4;
  const buttonSize = orientation === 'portrait' ? { paddingHorizontal: 25, paddingVertical: 12 } : { paddingHorizontal: 35, paddingVertical: 18 };
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <LinearGradient
        colors={['#ff9966', '#ff5e62', '#ff6699']}
        style={styles.background}
      >
        <Text style={styles.title}>Welcome to My App</Text>
        <Image
          source={{ uri: 'https://picsum.photos/500' }}
          style={[styles.image, { width: imageWidth, height: imageHeight }]}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập văn bản"
          placeholderTextColor="#aaa"
        />
        <View style={[styles.headerContainer, { paddingTop: orientation === 'portrait' ? 20 : 30 }]}>
          <TouchableOpacity style={[styles.glassButton, buttonSize]}>
            <Text style={styles.buttonText}>Nút 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.glassButton, buttonSize]}>
            <Text style={styles.buttonText}>Nút 2</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
   
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
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
  image: {
    marginBottom: 20,
    borderRadius: 15,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  glassButton: {
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',   
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

export default App;
