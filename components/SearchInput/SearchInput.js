import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { doSearch, doSearchFail, doSearchSuccess } from '../../store/actions/Actions';

const URL = 'https://taltaltaltalta.com';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.search,
    };
  }

  showError() {
    if (this.props.err) {
      return <Text>{this.props.err}</Text>;
    }
    return null;
  }

  search(text) {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        this.props.dispatch(doSearchSuccess(res.items));
      })
      .catch((err) => {
        this.props.dispatch(doSearchFail('Ha habido un error'));
      });
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Escribe lo que quieras"
          onChangeText={(inputValue) => {
            this.props.dispatch(doSearch(inputValue));
            this.search(inputValue);
          }}
          value={this.state.search}
        />
        {this.showError()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { err: state.productStore.err };
};
export default connect(mapStateToProps)(SearchInput);
