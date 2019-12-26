import React, {Component} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import ListService from '../Services/ListService';

class TasksList extends Component {
  listService;
  constructor(props) {
    super(props);
    this.listService = new ListService();
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('willFocus', this.getNotes);
  }

  getNotes = async () => {
    let res = await this.listService.getNotes();

    this.setState({
      notes: res.data,
    });
  };

  deleteNotes = async id => {
    let res = await this.listService.deleteNote(id);

    this.getNotes();
  };

  editNotes = item => {
    this.props.navigation.navigate('add', {
      update: true,
      item: item,
    });
  };

  renderItem = item => {
    return (
      <View style={styles.itemContainer}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 20}}>{item.title}</Text>
          <Text>{'Category' + item.category}</Text>
          <Text>{'Notes : ' + item.notes}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.image}
            onPress={() => this.editNotes(item)}>
            <Image
              source={require('../Assets/edit.png')}
              style={styles.image}
              resizeMethod="resize"
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.image}
            onPress={() => this.deleteNotes(item._id)}>
            <Image
              source={require('../Assets/remove.png')}
              style={styles.image}
              resizeMethod="resize"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.notes}
          extraData={this.state.notes}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={(item, index) => 'key' + index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 5,
    backgroundColor: '#c8c8c8',
  },
  buttonContainer: {width: 40, justifyContent: 'space-around'},
  image: {height: 25, width: 25, margin: 5},
});

export default TasksList;
