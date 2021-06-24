import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../screens/main';
import SecondScreen from '../screens/second';

const RootStack = createStackNavigator();

export default function Navigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="MainScreen" component={MainScreen} />
      <RootStack.Screen name="SecondScreen" component={SecondScreen} />
    </RootStack.Navigator>
  );
}
