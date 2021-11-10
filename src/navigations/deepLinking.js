const config = {
  screens: {
    Home: {
      path: '/:key',
      parse: {
        id: key => `${key}`,
      },
    },
    Login: {
      path: 'reset/:key/:state',
      parse: {
        key: key => `${key}`,
        id: state => `${state}`,
      },
    },
    Notifications: 'Notifications',
    Settings: 'Settings',
  },
};

const deepLinking = {
  prefixes: ['app://BookingApp'],
  config,
};

export default deepLinking;
