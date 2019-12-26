import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import SignupService from '../Services/SignupService';

class SignupScreen extends Component {
  email = '';
  password = '';

  constructor(props) {
    super(props);
  }

  addUser = async () => {
    let signupService = new SignupService();

    try {
      let res = await signupService.signup(this.email, this.password);
      if (res.statusMessage === 'User added successfully!') {
        await signupService.storeData();
        this.props.navigation.replace('list');
      }
    } catch (e) {
      this.email = '';
      this.password = '';
      alert(e.message);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../Assets/user.png')}
            resizeMode={'contain'}
            resizeMethod={'resize'}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            onChangeText={email => (this.email = email)}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            onChangeText={password => (this.password = password)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.addUser()}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {flex: 0.5, justifyContent: 'center', alignItems: 'center'},
  image: {height: 80, width: 80, alignSelf: 'center'},
  inputContainer: {flex: 1},

  button: {
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#4c8bf5',
  },
  buttonText: {
    color: '#fff',
  },
  inputs: {
    margin: 10,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 10,
    backgroundColor: '#c9c9c9',
  },
});

export default SignupScreen;
