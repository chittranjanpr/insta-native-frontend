import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { GoRegister } from '../../navigations';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      password: '',
    };
  }
  handleChange = (data, name) => {
    this.setState({[name]: data});
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter Number"
          onChangeText={(text) => this.handleChange(text, 'number')}
        />
        <TextInput
          placeholder="Enter Password"
          onChangeText={(text) => this.handleChange(text, 'password')}
        />
        <Button title="Login"></Button>
      <Button title="Register" onPress={GoRegister}></Button>
      </View>
    );
  }
}

export default Login;
