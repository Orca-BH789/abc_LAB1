import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Image, KeyboardAvoidingView, TextInput, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  const { width, height } = useWindowDimensions();
  const orientation = width > height ? 'landscape' : 'portrait';

  const isAndroid = Platform.OS === 'android';
  const isPortrait = orientation === 'portrait';

  const titleStyle = isAndroid
    ? isPortrait
      ? styles.androidTitlePortrait
      : styles.androidTitleLandscape
    : isPortrait
      ? styles.iosTitlePortrait
      : styles.iosTitleLandscape;

  const buttonStyle = isAndroid
    ? isPortrait
      ? styles.androidButtonPortrait
      : styles.androidButtonLandscape
    : isPortrait
      ? styles.iosButtonPortrait
      : styles.iosButtonLandscape;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <LinearGradient
        colors={['#ff9966', '#ff5e62', '#ff6699']}
        style={styles.background}
      >
        <Text style={titleStyle}>Welcome to My App</Text>
        <Image
          source={{ uri: 'https://picsum.photos/500' }}
          style={[styles.image, { width: width * 0.8, height: (width * 0.8) * (orientation === 'portrait' ? 0.6 : 0.4) }]}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập văn bản"
          placeholderTextColor="#aaa"
        />
        <View style={[styles.headerContainer, { paddingTop: isPortrait ? 20 : 30 }]}>
          <TouchableOpacity style={[styles.glassButton, buttonStyle]}>
            <Text style={styles.buttonText}>Nút 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.glassButton, buttonStyle]}>
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
  // Android styles
  androidTitlePortrait: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  androidTitleLandscape: {
    fontSize: 32,
    fontStyle: 'italic',
    color: '#fff',
    marginVertical: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  androidButtonPortrait: {
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  androidButtonLandscape: {
    borderRadius: 10,
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  // iOS styles
  iosTitlePortrait: {
    fontSize: 32,
    fontStyle: 'italic',
    color: '#fff',
    marginVertical: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  iosTitleLandscape: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  iosButtonPortrait: {
    borderRadius: 10,
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  iosButtonLandscape: {
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  glassButton: {
    borderRadius: 10,
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
  },
});

export default App;
  ``