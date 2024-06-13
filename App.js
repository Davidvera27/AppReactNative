import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import RemindersListScreen from './screens/RemindersListScreen';
import AddVehicleScreen from './screens/AddVehicleScreen'; 

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#115da3', // Cambiar color de la barra
          },
          headerTintColor: '#fff', // Color del texto del encabezado
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'HOME' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
        <Stack.Screen name="RemindersList" component={RemindersListScreen} options={{ title: 'RemindersList' }} />
        <Stack.Screen name="AddVehicle" component={AddVehicleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
