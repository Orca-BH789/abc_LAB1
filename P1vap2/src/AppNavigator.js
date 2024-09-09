import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Exercise1 from './exercises/Exercise1';
import Exercise2 from './exercises/Exercise2';
// import Exercise3 from './exercises/Exercise3';
// import Exercise4 from './exercises/Exercise4';
// import Exercise5 from './exercises/Exercise5';
// import Exercise6 from './exercises/Exercise6';
// import Exercise7 from './exercises/Exercise7';
// import Exercise8 from './exercises/Exercise8';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Exercise1" component={Exercise1} />
        <Stack.Screen name="Exercise2" component={Exercise2} />
        {/* <Stack.Screen name="Exercise3" component={Exercise3} />
        <Stack.Screen name="Exercise4" component={Exercise4} /> 
        <Stack.Screen name="Exercise5" component={Exercise5} />
        <Stack.Screen name="Exercise6" component={Exercise6} />
        <Stack.Screen name="Exercise7" component={Exercise7} />
        <Stack.Screen name="Exercise8" component={Exercise8} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
