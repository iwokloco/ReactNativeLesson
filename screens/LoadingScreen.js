import React from 'react';
import { ActivityIndicator, View, StyleSheet, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { getValueFor, SecureStoreService } from '../services/secure-store.service';
import { initApp } from '../store/actions/Actions';

const window = Dimensions.get('window');

export function LoadingScreen(props) {
  const dispatch = useDispatch();

  SecureStoreService.get('token')
    .then((token) => {
      console.log('loading: ', token);
      dispatch(initApp({ token }));
    })
    .catch((res) => {
      console.log('loading catch: ');
      dispatch(initApp({}));
    });

  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={70} color="#00ff00" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#082839',
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
