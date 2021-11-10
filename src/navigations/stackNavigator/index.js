/**
    *@description
    *StackNavigator is a navigator that manages a stack of screens,
    *and can be used to navigate between them.
    *
    * @class StackNavigator
    * @extends Navigator
    * @param {Object} props
    * @param {Object} props.initialRoute
    * @param {Object} props.initialRouteStack
    * @param {Object} props.navigationOptions
    * @param {Object} props.config
    * @param {Object} props.config.mode
    * @param {Object} props.config.headerMode
    * @param {Object} props.config.cardStyle
    * @param {Object} props.config.onTransitionStart
    * @param {Object} props.config.onTransitionEnd
    * @param {Object} props.config.onTransitionCancel
    * @param {Object} props.config.onTransitionError
    * 
    
    * @example
    * import React from 'react';
    * import {StackNavigator} from 'react-native-navigation';
    * import HomeScreen from '@screens/home';
    
    * const Stack = createStackNavigator();
    * const HomeStack = () => {
    * return (
    * <Stack.Navigator
    * screenOptions={{
    * headerTitle: () => <Header />,
    * title: 'Home',
    * headerStyle: {
    * backgroundColor: '#fff',
    * shadowOpacity: 0,
    * elevation: 0,
    * },
    * }}>
    * <Stack.Screen name="home" component={HomeScreen} />
    * </Stack.Navigator>
    * );
    * };
    * export default HomeStack;

 */
