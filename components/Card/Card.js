import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class Card extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View style={{ flexDirection: 'column' }}>
        <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
      </View>
    );
  }
}
