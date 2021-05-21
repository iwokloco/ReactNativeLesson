import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet, Dimensions, Text, Image, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { render } from 'react-dom';
import { loginSuccess } from '../store/actions/Actions';
import { connect } from 'react-redux';
import { URL_LOGIN } from '../constants';
import { save } from '../services/secure-store.service';
import { commonStyles } from '../styles/common.styles';

const windowWidth = Dimensions.get('window').width;

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorFillData: null,
      hideFooter: false,
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow() {
    this.setState({ hideFooter: true });
  }

  keyboardDidHide() {
    this.setState({ hideFooter: false });
  }

  doLoginRequest() {
    const { username, password } = this.state;
    if (this.hasEmptyFields()) {
      this.setState({ errorFillData: 'Tienes que rellenar todos los campos' });
    } else {
      fetch(URL_LOGIN, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: username, pass: password }),
      })
        .then((res) => res.json())
        .then((res) => {
          this.props.dispatch(loginSuccess({ token: res.token }));
        })
        .catch((err) => {
          console.log(err);
          this.setState({ error: 'Algo ha ido mal, inténtalo más tarde.' });
        });
    }
  }

  hasEmptyFields() {
    const { username, password } = this.state;
    return username.length === 0 || password.length === 0;
  }

  onChangeUsername(value) {
    if (this.hasEmptyFields()) {
      this.setState({ username: value, error: 'Tienes que rellenar todos los campos' });
    } else {
      this.setState({ username: value, error: null });
    }
  }

  onChangePassword(value) {
    if (this.hasEmptyFields()) {
      this.setState({ password: value, error: 'Tienes que rellenar todos los campos' });
    } else {
      this.setState({ password: value, error: null });
    }
  }

  render() {
    const { username, password, hideFooter, error } = this.state;
    return (
      <View style={commonStyles.container}>
        <View style={styles.logo}>
          <Ionicons name="rocket" size={windowWidth * 0.3} color="white" />
          <Text style={styles.txtLogin}>Iniciar sesión</Text>
        </View>
        <TextInput style={styles.input} autoCapitalize="none" placeholder="Username" value={username} onChangeText={(value) => this.setState({ username: value })} />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="Password"
          value={password}
          onChangeText={(value) => this.setState({ password: value })}
          secureTextEntry
        />

        {error ? <Text>{error}</Text> : null}

        <TouchableOpacity onPress={this.doLoginRequest.bind(this)}>
          <View style={styles.button}>
            <Text style={styles.buttonLabel}>Entrar</Text>
          </View>
        </TouchableOpacity>

        {!hideFooter ? (
          <View style={styles.footer}>
            <Image style={styles.footerImage} source={require('../assets/loginBottom.png')} resizeMode="cover" />
          </View>
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps)(SignInScreen);

const styles = StyleSheet.create({
  logo: {
    marginTop: 100,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtLogin: {
    fontSize: 20,
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    fontSize: 18,
    marginTop: 20,
    height: 50,
    padding: 15,
  },
  button: {
    marginTop: 50,
    backgroundColor: '#2296f3',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 50,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 20,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  footerImage: {
    width: '100%',
  },
});
