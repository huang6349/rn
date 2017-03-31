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
        <Text style={styles[this.props.selected ? 'icon-selected' : 'icon']}>
          <Icon name={this.props.selected ? this.props.iconName : `${this.props.iconName}-outline`} size={26} />
        </Text>
        <Text style={styles[this.props.selected ? 'title-selected' : 'title']}>
          {this.props.title}
        </Text>
      </View >
    );
  }
}
