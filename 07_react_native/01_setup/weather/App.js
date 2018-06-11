import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import About from './components/About';
import Search from './components/Search';
import { createMaterialTopTabNavigator} from 'react-navigation';


const Tabs = createMaterialTopTabNavigator({
  Search: { screen: Search },
  About: { screen: About }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
  },
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true}/>
        <Tabs />
      </View>
    );
  }
}
