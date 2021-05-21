import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet, Dimensions, Text, Image, TouchableOpacity, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import { connect } from 'react-redux';
import { ApiService } from '../services/api.service';

class ScreenAulas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err: null,
      aulas: [],
    };
    console.log(this.props);
  }

  componentDidMount() {
    ApiService.getAulas(this.props.token)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.err) {
          this.setState({ err: res.err });
        } else if (res.length) {
          this.setState({ aulas: res, err: null });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getRows() {
    return this.state.aulas.map((aula, index) => (
      <DataTable.Row key={`aula${index}`}>
        <DataTable.Cell>{aula.name}</DataTable.Cell>
        <DataTable.Cell numeric>{aula.nota}</DataTable.Cell>
      </DataTable.Row>
    ));
  }

  render() {
    return (
      <ScrollView>
        {this.state.err ? (
          <Text>{this.state.err}</Text>
        ) : (
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Asignatura</DataTable.Title>
              <DataTable.Title numeric>Notas</DataTable.Title>
            </DataTable.Header>
            {this.getRows()}
          </DataTable>
        )}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { token: state.productStore.auth.token.token };
};
export default connect(mapStateToProps)(ScreenAulas);
