import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from '../router.style';
import { connect } from 'dva/mobile';

class Car extends React.Component {
  render() {
    return (
      <View style={styles['container']}>
        <Text>车载设备</Text>
      </View >
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Car);
