import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ItemList from '../components/ItemList/ItemList';
import SignInScreen from './SignInScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Photos"
          component={ItemList}
          options={{
            tabBarLabel: 'Las fotos',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="Login"
          component={SignInScreen}
          options={{
            tabBarLabel: 'Las fotos',
            tabBarIcon: ({ color, size }) => <MaterialIcons name="photo-camera" size={size} color={color} />,
          }}
        />
      </Tab.Navigator>
    );
  }
}

// <Button title="Volver a la home" onPress={() => this.props.navigation.replace('Photos')}></Button>

// <Button title="Product Detail" onPress={() => this.props.navigation.navigate('Product', { productName: 'Delorean' })}></Button>
