import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import styles from '../router.style';
import { connect } from 'dva/mobile';

class Single extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.any,
    single: React.PropTypes.any,
  };

  add() {
    this.props.dispatch({
      type: 'single/ADD',
      payload: {},
    });
  }

  reduce() {
    this.props.dispatch({
      type: 'single/REDUCE',
      payload: {},
    });
  }

  render() {
    const { count } = this.props.single;

    return (
      <View style={styles['container']}>
        <Text>&nbsp;</Text>
        <Text>工单量：{count}</Text>
        <Text>&nbsp;</Text>
        <Button title="增加" onPress={this.add.bind(this)}></Button>
        <Text>&nbsp;</Text>
        <Button title="减少" onPress={this.reduce.bind(this)}></Button>
      </View >
    );
  }
}

function mapStateToProps({ single }) {
  return { single };
}

export default connect(mapStateToProps)(Single);
