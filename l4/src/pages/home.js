import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  WebView,
} from 'react-native';
import { Carousel } from 'antd-mobile';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 54, paddingBottom: 50, }}>
        <Carousel dots={true} autoplay={true} infinite={true}>
          <Image source={{ uri: 'http://www.hbsgf.cn/frame/img/main/banner_1_1.jpg' }} style={{ height: 120, }}></Image>
          <Image source={{ uri: 'http://www.hbsgf.cn/frame/img/main/banner_1_2.jpg' }} style={{ height: 120, }}></Image>
          <Image source={{ uri: 'http://www.hbsgf.cn/frame/img/main/banner_1_3.jpg' }} style={{ height: 120, }}></Image>
        </Carousel>
      </View >
    );
  }
}
