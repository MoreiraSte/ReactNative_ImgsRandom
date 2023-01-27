import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import principal from "./principal";
import randomPage from "./randomImages"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={principal} />
        <Stack.Screen name="Voltar" component={randomPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;