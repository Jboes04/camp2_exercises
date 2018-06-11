import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style = {styles.header}>
          <Text style = {{justifyContent: 'center'}}> Header </Text>
        </View>
        <View style={styles.container}>
          <Text style = {styles.Text}>Mathieu Question/Réponse</Text>
          <Image
            style={{width: 300, height: 250}}
            source={require('./public/Mat.png')}
          />
        </View>
          <View style={styles.footer}>
            <View style={{flex: 1, backgroundColor: 'powderblue', justifyContent:'center', alignItems:'center', marginRight: 5, borderTopRightRadius: 20}}>
              <Text style= {styles.menu}>Menu 1</Text>
            </View>
          <View style={{flex: 1, backgroundColor: 'skyblue', justifyContent:'center', alignItems:'center', marginRight: 5, borderTopRightRadius: 20, borderTopLeftRadius: 20}}>
            <Text style= {styles.menu}>Menu 2</Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'steelblue', justifyContent:'center', alignItems:'center', borderTopLeftRadius: 20}}>
            <Text style= {styles.menu}>Menu 3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'papayawhip',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'black',
    height: 30,
  },
  header: {
    height: 60,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  footer: {
    height: 100,
    backgroundColor: 'papayawhip',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  menu: {
  },
});
