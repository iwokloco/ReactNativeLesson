import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import ItemList from './components/ItemList/ItemList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen, { HOME_SCREEN_OPTIONS } from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SignInScreen from './screens/SignInScreen';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './store/reducers/products';
import SearchScreen from './screens/SearchScreen';
import { getValueFor } from './services/secure-store.service';
import { LoadingScreen } from './screens/LoadingScreen';
import * as SecureStore from 'expo-secure-store';
import { logout } from './store/actions/Actions';
import { IconButton } from './components/IconButton/IconButton';

const Stack = createStackNavigator(); // {Navigator, Screen} nos retorna un objeto que contiene dos componentes

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.productStore.auth.token);
  const isLoading = useSelector((state) => state.productStore.isLoading);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {isLoading ? (
          <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        ) : token ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTitle: '',
                headerRight: () => <IconButton onPress={() => dispatch(logout())} icon="logout" size={24} color="white" />,
              }}
            />
          </>
        ) : (
          <Stack.Screen name="Login" component={SignInScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function Index() {
  return (
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  );
}
