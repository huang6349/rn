import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Actions,
  ActionConst,
} from 'react-native-router-flux';
import styles from './launch.image.style';

export default class LaunchImage extends Component {

  onLoad() {
    setTimeout(() => {
      Actions.main({ type: ActionConst.RESET });
    }, 1500);
  }

  render() {
    return <Image source={require('../assets/images/launch-image.png')} style={styles['image']} onLoadEnd={this.onLoad()} />;
  }
}
