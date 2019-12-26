import {AsyncStorage} from 'react-native';

export default class LoginService {
  loginResponse = {};

  login = async (email, password) => {
    const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (emailRegex.test(email) && email.trim() != '') {
      this.loginResponse = await fetch(
        'http://heimdall3.ddns.net:8080/checkUser',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({email: email, password: password}),
        },
      );

      return await this.loginResponse.json();
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
