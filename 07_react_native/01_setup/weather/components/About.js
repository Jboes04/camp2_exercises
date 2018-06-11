import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image, Button } from 'react-native';

export default class About extends React.Component {

  static navigationOptions = {
    tabBarIcon: () => {
      return <Image source={require('./icons/home.png')} style={{width:40, height: 40}}/>
    }
  }

  search() {
    this.props.navigation.navigate('Search')
  }


  render() {
    return(
      <View style={styles.view}>
        <Text style={styles.title}> A propos de l'Application </Text>
        <Text style={{margin:20}}>Description Appli</Text>
        <View  style={styles.buttonStyle}>
          <Button onPress={() => this.search()} title="Rechercher" />
        </View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white'
  },
  title: {
    paddingTop: 50,
    textAlign: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'skyblue'
  },
  buttonStyle: {
    marginTop: 10,
    padding: 10,
    margin: 30,
    backgroundColor: 'skyblue'
  }
})
