import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage } from "react-native";
import Logo from '../Logo';
import LoginForm from './LoginForm';
import PersonService from '../realm/RealmService';
import { sha256 } from 'react-native-sha256';

export default class Login extends Component {

  Login(navigate) {

    let form = this.refs.LoginForm.getState();
    // for test only.
    // navigate("HomeTab");
    if (form.UserName !== '') {
      let user = PersonService.findUser(form.UserName);
      if(user!= null){
        if(user.Password === form.Password ){
          this.storeUserName(form.UserName); // store user
          navigate("HomeTab");
        } else {
          alert('UserName/Pasword incorrect');
        }
      } else {
        alert('UserName not found');
      }
    } else {
      alert('UserName is Empty');
    }      
  }

  storeUserName = async (UserName) => {
    try {
      await AsyncStorage.setItem('UserName', UserName);
    } catch (error) {
      // Error saving data
    }
  }

  hashPassword = async (Password) => {
    try {
      await this.setState({hash: sha256(Password)})
    } catch (error) {
      // Error saving data
    }
  }

  componentDidMount() {

  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Logo/>
        <LoginForm ref='LoginForm'/>
        <TouchableOpacity style={styles.button} onPress={() => this.Login(navigate) }>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.forgotpassTextCont}>
          <Text style={styles.signupText}>Trouble logging in?</Text>
          <TouchableOpacity>
            <Text style={styles.signupButton}> Click Here.</Text>
          </TouchableOpacity>
        </View>   
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={() => navigate("Signup")}>
            <Text style={styles.signupButton}> Signup</Text>
          </TouchableOpacity>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#455a64',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  forgotpassTextCont : {
  	flexGrow: 1,
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});