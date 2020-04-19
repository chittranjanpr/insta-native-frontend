import {Navigation} from 'react-native-navigation';
import Login from './auth/login/login';
import Auth from './auth';
import Register from './auth/register/register';
import Home from './home';

export function registeredscreens() {
  Navigation.registerComponent('com.insta_frontend.Auth', () => Auth);
  Navigation.registerComponent('com.insta_frontend.Login', () => Login);
  Navigation.registerComponent('com.insta_frontend.Register', () => Register);
  Navigation.registerComponent('com.insta_frontend.Home', () => Home);
}
