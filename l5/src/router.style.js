import {
  StyleSheet,
  Platform,
} from 'react-native';

export default StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    opacity: 1,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 64 : 54,
    paddingBottom: 50,
    backgroundColor: '#f9f9f9',
  }
});
