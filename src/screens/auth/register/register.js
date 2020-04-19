import React, {Component, useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {GoLogin} from '../../navigations';

const Register = () => {
  let [number, setNumber] = useState('');
  let [password, setPassword] = useState('');
  function handleRegister() {
    console.log(number + ' --  ' + password);
  }
  return (
    <View>
      <TextInput
        placeholder="Enter Number"
        onChangeText={(text) => setNumber(text)}
      />
      <TextInput
        placeholder="Enter Password"
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Register" onPress={handleRegister()}></Button>
      <Button title="Login" onPress={GoLogin}></Button>
    </View>
  );
};

export default Register;
