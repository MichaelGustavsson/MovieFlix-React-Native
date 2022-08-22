import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';

import MainButton from '../components/ui/MainButton';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUserNameHandler = (value) => {
    setUserName(value);
  };

  const onResetLoginHandler = () => {
    setUserName('');
  };

  const onLoginHandler = () => {
    if (userName.trim().length === 0) {
      Alert.alert('Problem med inloggning', 'Användarnamn måste anges!', [
        { text: 'OK', style: 'default', onPress: onResetLoginHandler },
      ]);
    }
  };

  const onRegisterHandler = () => {
    console.log('Duttat på registrera');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.userNameInput}
          placeholder='E-Post'
          placeholderTextColor={'#cecccc'}
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          value={userName}
          onChangeText={onChangeUserNameHandler}
        />
        <TextInput
          style={styles.userNameInput}
          placeholder='Lösenord'
          placeholderTextColor={'#cecccc'}
          keyboardType='default'
          secureTextEntry={true}
        />
        <View style={styles.buttonsContainer}>
          <MainButton onPressed={onLoginHandler}>Logga In</MainButton>
          <MainButton onPressed={onRegisterHandler}>Registrera</MainButton>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 70,
  },
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: '#611313',
    borderRadius: 10,
  },
  userNameInput: {
    height: 28,
    fontSize: 16,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 1,
    paddingVertical: 4,
    marginVertical: 6,
    color: '#ddb52f',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});
