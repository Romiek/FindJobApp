import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from "react-native";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      UserName: '',
      Password: ''
    };
  }

  getState() {
    return this.state;
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
          placeholder="UserName"
          selectionColor="#fff"
          onSubmitEditing={()=> this.password.focus()}
          onChangeText={(UserName) => this.setState({UserName})}/>
        <TextInput style={styles.inputBox}
          placeholder="Password" 
          secureTextEntry={true}
          ref={(input) => this.password = input}
          onChangeText={(Password) => this.setState({Password})}/>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container:{
  flex:1,
  alignItems: 'center',
  justifyContent: 'center'
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:21,
    color:'#ffffff',
    marginVertical: 10
  }
});