import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Button, TextInput, FlatList } from 'react-native';
import { connect } from 'react-redux';

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.list}
          keyExtractor={(_item, index) => `key${index}`}
          renderItem={(flatListElement) => {
            return <Text>{flatListElement.item.user.username}</Text>;
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { list: state.productStore.list };
};

export default connect(mapStateToProps)(ProductList);
