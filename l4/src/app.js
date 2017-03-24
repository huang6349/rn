import React, { Component } from 'react';
import {
  Router,
  Scene,
  Modal,
} from 'react-native-router-flux';

import TabIcon from './components/tab.icon';
import LaunchImage from './pages/launch.image';
import Home from './pages/home';
import Home2 from './pages/home2';
import Home3 from './pages/home3';
import Settings from './pages/settings';
import styles from './app.style';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="modal" component={Modal}>
          <Scene key="root" hideNavBar={true} hideTabBar={true}>
            <Scene key="launch" component={LaunchImage} initial={true}></Scene>
            <Scene key="main" hideNavBar={false} hideTabBar={false} tabs={true} tabBarStyle={styles['tabBarStyle']}>
              <Scene key="home1" component={Home} title="首页" icon={TabIcon} iconName="ios-home" initial={true}></Scene>
              <Scene key="home2" component={Home2} title="音乐" icon={TabIcon} iconName="ios-musical-notes"></Scene>
              <Scene key="home3" component={Home3} title="朋友圈" icon={TabIcon} iconName="ios-navigate"></Scene>
              <Scene key="home4" component={Settings} title="设置" icon={TabIcon} iconName="ios-settings"></Scene>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}
