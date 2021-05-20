import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { index } = this.props.data;
    const { img, user, viewed, likes } = this.props.data.item;
    const { username, avatar } = user;

    return (
      <View style={styles.container}>
        <Text>{`${index} ${username}`}</Text>
        <View>
          <Image source={{ uri: img }} style={styles.image} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  image: {
    width: windowWidth,
    height: 100,
  },
});
