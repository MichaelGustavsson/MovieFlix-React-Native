import {
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <LinearGradient
        colors={['#000000', '#080707', '#1b1a1a', '#4d4b4b']}
        style={styles.screen}
      >
        <ImageBackground
          source={require('./assets/images/Batman.jpg')}
          resizeMode='cover'
          style={styles.screen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.screen}>
            <LoginScreen />
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
