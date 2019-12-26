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

import ListService from '../Services/ListService';

class AddTasks extends Component {
  title = '';
  category = '';
  notes = '';
  listService = {};
  constructor(props) {
    super(props);
    this.listService = new ListService();
    this.title = this.props.navigation.getParam('item').title;
    this.category = this.props.navigation.getParam('item').category;
    this.notes = this.props.navigation.getParam('item').notes;
  }

  updateService = async () => {
    let res = await this.listService.updateNote(
      this.props.navigation.getParam('item')._id,
      this.title,
      this.category,
      this.notes,
    );

    this.props.navigation.goBack();

    console.log(res);
  };

  addService = async () => {
    let res = await this.listService.addNote(
      this.title,
      this.category,
      this.notes,
    );
    console.log(res);
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
            placeholder={this.title}
            onChangeText={title => (this.title = title)}
          />
          <TextInput
            style={styles.inputs}
            placeholder={this.category}
            onChangeText={category => (this.category = category)}
          />
          <TextInput
            style={[
              styles.inputs,
              {height: 100, padding: 10, backgroundColor: '#c9c9c9'},
            ]}
            multiline={true}
            placeholder={this.notes}
            onChangeText={notes => (this.notes = notes)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (this.props.navigation.getParam('update')) {
                this.updateService();
              } else {
                this.addService();
              }
            }}>
            <Text style={styles.buttonText}>Submit / Update</Text>
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
    width: 150,
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

export default AddTasks;
