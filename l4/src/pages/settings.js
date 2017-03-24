import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  WebView,
} from 'react-native';

export default class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 54, paddingBottom: 50, }}>
        <WebView
          style={{ flex: 1 }}
          ref="webview"
          automaticallyAdjustContentInsets={false}
          source={{ uri: 'https://mobile.ant.design/kitchen-sink/' }}
          scalesPageToFit={false}
        />
      </View >
    );
  }
}
