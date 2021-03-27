import React from 'react';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EditScreen from '../screens/EditScreen';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#222'},
        headerTintColor: '#FFF',
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Edit"
        component={EditScreen}
        options={{
          title: props.title || 'Editar',
        }}
      />
    </Stack.Navigator>
  );
};
