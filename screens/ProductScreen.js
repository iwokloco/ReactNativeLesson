import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Button } from 'react-native';

export default class ProductScreen extends Component {
  // props = {navigation, route} <- route.params
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.route.params.productName}</Text>
      </View>
    );
  }
}
