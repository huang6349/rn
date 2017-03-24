import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './tab.icon.style';

export default class TabIcon extends Component {

  static propTypes = {
    selected: React.PropTypes.bool,
    title: React.PropTypes.string,
    iconName: React.PropTypes.string,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={this.props.selected ? styles['icon-selected'] : styles['icon']}>
          <Icon
            name={this.props.selected ? this.props.iconName : `${this.props.iconName}-outline`}
            size={25} />
        </Text>
        <Text style={this.props.selected ? styles['title-selected'] : styles['title']}>{this.props.title}</Text>
      </View >
    );
  }
}
