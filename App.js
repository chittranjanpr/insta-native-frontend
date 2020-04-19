import {Navigation} from 'react-native-navigation';
import {registeredscreens} from './src/screens/screens-register';

registeredscreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.insta_frontend.Auth',
            },
          },
        ],
      },
    },
  });
});
