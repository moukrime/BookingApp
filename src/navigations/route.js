import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import deepLinking from './deepLinking';
import Home from '@screens/home';

const Stack = createStackNavigator();

const Route = ({navigation}) => {
  return (
    <NavigationContainer linking={deepLinking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
