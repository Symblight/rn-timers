import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './main';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}
