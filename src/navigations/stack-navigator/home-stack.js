import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/home';
import ReservationDetails from '@screens/reservation-details';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="res-details" component={ReservationDetails} />
    </Stack.Navigator>
  );
};
export default HomeStack;
