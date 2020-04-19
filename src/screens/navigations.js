import {Navigation} from 'react-native-navigation';

export const GoLogin = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.insta_frontend.Login',
            },
          },
        ],
      },
    },
  });
};

export const GoRegister = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.insta_frontend.Register',
            },
          },
        ],
      },
    },
  });
};

export const GoHome = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.insta_frontend.Home',
            },
          },
        ],
      },
    },
  });
};
