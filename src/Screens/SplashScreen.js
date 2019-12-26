import React, {Component} from 'react';
import {View, Text, AsyncStorage} from 'react-native';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);

    this._retrieveData();
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('login');
      console.log(value);
      if (value !== null) {
        console.log(value);
        setTimeout(() => {
          this.props.navigation.replace('list');
        }, 2000);
      } else {
        setTimeout(() => {
          this.props.navigation.replace('login');
        }, 2000);
      }
    } catch (error) {}
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{width: '100%', textAlign: 'center', fontSize: 20}}>
          Machine Test
        </Text>
      </View>
    );
  }
}
