import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.data.username,
      password: '',
    };

    console.log(props);
  }

  componentDidMount() {}

  makeRequest() {}

  // setUsername(text) {
  //   console.log(text);
  //   this.setState({ username: text });
  // }

  render() {
    return (
      <View>
        <Text>Text</Text>
        <TextInput
          onChangeText={(text) => {
            this.setState({ username: text });
          }}
          value={this.state.username}
        />
        {/* <TextInput onChangeText={this.setUsername.bind(this)} value={this.state.username} /> */}
      </View>
    );
  }
}
