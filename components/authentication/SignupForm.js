import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, TextInput } from "react-native";

export default class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      UserName: '',
      FirstName: '',
      LastName: '',
      Email: '',
      Password: ''
    };
  }

  getState() {
    return this.state;
  }

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.userRow}>
          <TextInput style={styles.inputBox}
            placeholder="Username"
            selectionColor="#fff"
            onSubmitEditing={()=> this.firstname.focus()}
            onChangeText={(UserName) => this.setState({UserName})}/>
          <TextInput style={styles.inputBox}
            placeholder="FirstName"
            selectionColor="#fff"
            ref={(input) => this.firstname = input}
            onSubmitEditing={()=> this.lastname.focus()}
            onChangeText={(FirstName) => this.setState({FirstName})}/>
          <TextInput style={styles.inputBox}
            placeholder="LastName"
            selectionColor="#fff"
            ref={(input) => this.lastname = input}
            onSubmitEditing={()=> this.email.focus()}
            onChangeText={(LastName) => this.setState({LastName})}/>
          <TextInput style={styles.inputBox}
            placeholder="Email"
            selectionColor="#fff"
            keyboardType="email-address" 
            ref={(input) => this.email = input}
            onSubmitEditing={()=> this.password.focus()}
            onChangeText={(Email) => this.setState({Email})}/>
          <TextInput style={styles.inputBox}
            placeholder="Password" 
            secureTextEntry={true}
            ref={(input) => this.password = input}
            onChangeText={(Password) => this.setState({Password})}/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  container:{
  flex:1,
  alignItems: 'center',
  flexDirection: 'column',
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