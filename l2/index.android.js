/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  NativeModules
} from 'react-native';

export default class l2 extends Component {

  onButtonPress1() {
    /** 在这里使用NativeModules调用原生的方法 */
    NativeModules.RnTestModule.show("调用原生方法成功拉！");
  }

  onButtonPress2() {
    /** 在这里使用NativeModules调用原生的方法,带回调函数的 */
    NativeModules.RnTestModule.getResult("https://www.baidu.com/", (response) => {
      alert(response);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Text>&nbsp;</Text>
        <Button style={styles.button} onPress={this.onButtonPress1.bind(this)} title="&nbsp;&nbsp;&nbsp;测&nbsp;&nbsp;试&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;" ></Button>
        <Text>&nbsp;</Text>
        <Button style={styles.button} onPress={this.onButtonPress2.bind(this)} title="&nbsp;&nbsp;&nbsp;测&nbsp;&nbsp;试&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;" ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('l2', () => l2);
