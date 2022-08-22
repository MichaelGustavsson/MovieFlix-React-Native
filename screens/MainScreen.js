import { View, Text, StyleSheet } from 'react-native';
const MainScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>Välkommen till MovieFlix</Text>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  titleText: {
    color: '#ffffff',
  },
});
