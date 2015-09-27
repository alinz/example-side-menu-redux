import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

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

@connect(() => ({}))
export default class Content extends Component {
  constructor(props) {
    super(props);
  }

  onOpen() {
    const { dispatch } = this.props;
    const action = bindActionCreators(sideMenu, dispatch);

    action.open();
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={this.onOpen.bind(this)} style={styles.button}>
          <Text>Open</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
