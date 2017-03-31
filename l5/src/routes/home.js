import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from '../router.style';
import { connect } from 'dva/mobile';

class Home extends React.Component {
  static propTypes = {
    app: React.PropTypes.any,
    dispatch: React.PropTypes.any,
  };

  render() {

    const { isLogin } = this.props.app;

    console.log(this.props.app);
    return (
      <View style={styles['container']}>
        <Text>首页{isLogin ? '已登录' : '未登录'}</Text>
      </View >
    );
  }
}

function mapStateToProps({ app }) {
  return { app };
}

export default connect(mapStateToProps)(Home);
