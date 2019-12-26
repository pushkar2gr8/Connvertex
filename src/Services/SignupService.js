import {AsyncStorage} from 'react-native';

export default class SignupService {
  signup = {};

  signup = async (email, password) => {
    const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (emailRegex.test(email) && email.trim() != '') {
      this.signup = await fetch('http://heimdall3.ddns.net:8080/addUser', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: email, password: password}),
      });
      return await this.signup.json();
    } else {
      alert('Please enter valid email');
    }
  };

  storeData = async () => {
    try {
      await AsyncStorage.setItem('login', 'done');
    } catch (error) {
      // Error saving data
    }
  };
}
