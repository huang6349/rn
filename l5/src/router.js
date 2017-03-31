import React, { Component } from 'react';
import {
  Router,
  Scene,
  Modal,
  Actions,
  ActionConst,
} from 'react-native-router-flux';

import { connect } from 'dva/mobile';

import TabIcon from './components/tab.icon';
import Home from './routes/home';
import Single from './routes/single';
import Car from './routes/car';
import Settings from './routes/settings';
import styles from './router.style';

class RouterConfig extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="modal" component={Modal}>
          <Scene key="root" hideNavBar={true} hideTabBar={true}>
            <Scene
              key="main"
              hideNavBar={false}
              hideTabBar={false}
              tabs={true}
              tabBarStyle={styles['tabBarStyle']}>
              <Scene
                key="home"
                component={Home}
                type={ActionConst.REFRESH}
                title="首页"
                icon={TabIcon}
                iconName="ios-home"
                initial={true}></Scene>
              <Scene
                key="single"
                component={Single}
                type={ActionConst.REFRESH}
                title="工单"
                icon={TabIcon}
                iconName="ios-clipboard"></Scene>
              <Scene
                key="car"
                component={Car}
                type={ActionConst.REFRESH}
                title="车载设备"
                icon={TabIcon}
                iconName="ios-car"></Scene>
              <Scene
                key="settings"
                component={Settings}
                type={ActionConst.REFRESH}
                title="设置"
                icon={TabIcon}
                iconName="ios-settings"></Scene>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(RouterConfig);
