import React from 'react';
import { TextInput, Image } from 'react-native';

export default class Home extends React.Component {

  static navigationOptions = {
    tabBarIcon: () => {
      return <Image source={require('./icons/loupe.png')} style={{width:40, height: 40}}/>
    }
  }

  constructor(props){
    super(props);
    this.state = {
      city: 'Metz'
    }
  }

  setCity(city) {
    this.setState({city})
  }

  render() {
    return(
      <TextInput
            onChangeText={(text) => this.setState({text})}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            value={this.state.city}
          />
    )
  }
}
