/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Dva, { connect } from 'dva/mobile';
import RouterConfig from './router';
import AppModels from './models/app';
import SingleModels from './models/single';

// 1. 初始化"dva"
const app = Dva();

// 2. 注册"dva"插件
//app.use({});

// 3. 注册程序模型
app.model(AppModels);
app.model(SingleModels);

// 4. 注册程序路由
app.router(() => <RouterConfig />);

AppRegistry.registerComponent('l5', () => app.start());
