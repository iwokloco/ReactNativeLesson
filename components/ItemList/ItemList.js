import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import Item from '../Item/Item';
import { MOCK } from '../mock';

const URL = 'https://iwokloco.github.io/fotos.json';

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  showData() {
    return (
      <FlatList
        data={MOCK.lista}
        keyExtractor={(_item, index) => `key${index}`}
        renderItem={(flatListElement) => {
          // {index, item}
          console.log(flatListElement);
          return <Item data={flatListElement} />;
        }}
      />
    );

    // return this.state.data.items.map((item, i) => <Text key={i}>{item.user.username}</Text>)
  }

  render() {
    console.log(this.state.data);
    return <View style={{ justifyContent: 'flex-start' }}>{this.state.data && this.state.data.items ? this.showData() : <ActivityIndicator size="small" color="#0000ff" />}</View>;
  }
}
