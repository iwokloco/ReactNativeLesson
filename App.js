import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ItemList from './components/ItemList/ItemList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SignInScreen from './screens/SignInScreen';
import { Provider, useSelector } from 'react-redux';
// import Reducers from './store/reducers/Reducer';
import { createStore } from 'redux';
import { reducers } from './store/reducers/products';
import SearchScreen from './screens/SearchScreen';

const Stack = createStackNavigator(); // {Navigator, Screen} nos retorna un objeto que contiene dos componentes

function App() {
  const user = useSelector((state) => state.productStore.user);
  console.log(user);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={SearchScreen} />
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

{
  // {!isLogged ? <Stack.Screen name="SignIn" component={SignInScreen} /> : <Stack.Screen name="Home" component={HomeScreen} />}

  {
    /* <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Photos" component={ItemList} />
        <Stack.Screen name="Product" component={ProductScreen} options={{ title: '' }} /> */
  }

  /* <View style={styles.container}>
<ItemList />
<StatusBar style="auto" />
</View> */
}

// const URL = 'http://localhost:3000/data';

// function makePostRequest() {
//   let data = {
//     method: 'POST',
//     credentials: 'same-origin',
//     mode: 'same-origin',
//     body: { user: 'admin', pass: '1234' },
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjIxMzQzODU2LCJleHAiOjE2MjEzNTM4NTZ9.AcADf7s7cogzIOvZz3YZaSAAWzr2WZ8U8g01o70_M9g',
//     },
//   };
//   return fetch(URL, data)
//     .then((response) => response.json()) // promise
//     .then((res) => console.log(res));
// }

{
  /* <Login data={{ username: 'Yoda', password: '4321' }} /> */
}
