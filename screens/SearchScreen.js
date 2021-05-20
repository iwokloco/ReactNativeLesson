import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Button } from 'react-native';
import ProductList from '../components/ProductList/ProductList';
import SearchInput from '../components/SearchInput/SearchInput';

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchInput />

        <View style={{ flex: 5, backgroundColor: 'red' }}>
          <ProductList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
