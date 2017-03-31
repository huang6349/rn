import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from '../router.style';
import { connect } from 'dva/mobile';

class Settings extends React.Component {
  render() {
    return (
      <View style={styles['container']}>
        <Text>设置</Text>
      </View >
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Settings);
