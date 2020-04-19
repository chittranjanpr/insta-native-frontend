import React from 'react';
import {
  View,
  Text,
  AsyncStorage,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import {GoLogin, GoHome} from '../navigations';

export default class Auth extends React.Component {
  componentDidMount() {
    AsyncStorage.getItem('loginData')
      .then((res) => {
        console.log(res);
        if (res == null) GoLogin();
        else GoHome();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="#b3e6ff"
          barStyle="dark-content"
          hidden={false}
          translucent={true}
        />
      </View>
    );
  }
}
