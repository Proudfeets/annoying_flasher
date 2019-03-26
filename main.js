import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state= {
      isShowingText: true
    };
    setInterval(() =>(
      this.setState(previousState => (
        {isShowingText: !previousState.isShowingText}
      ))
    ), 1000);
  }
  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    return(
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return(
    <View style={{marginTop: 100, backgroundColor: 'yellow', fontSize: 30 }}>
      <Blink style={{ color: 'blue' }} text='I love to blink' />
      <Blink text='Blinking is just the best' />
      </View>
    );
  }
}
