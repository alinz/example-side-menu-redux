import React, { Component, View , StyleSheet, TouchableOpacity, Text } from 'react-native';

import * as sideMenu from '../actions/sideMenu';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

@connect((state) => ({}))
export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  onToggle() {
    const { dispatch } = this.props;
    const action = bindActionCreators(sideMenu, dispatch);

    action.toggle();
  }

  onClose() {
    const { dispatch } = this.props;
    const action = bindActionCreators(sideMenu, dispatch);

    action.close();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue',  alignItems: 'flex-start', justifyContent: 'center' }}>
        <TouchableOpacity onPress={this.onClose.bind(this)} style={styles.button}>
          <Text>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onToggle.bind(this)} style={styles.button}>
          <Text>Toggle</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
