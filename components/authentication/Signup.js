import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { PersonSchema } from '../schemas/AllSchemas';
import PersonService from '../realm/RealmService';
import SignupForm from './SignupForm';
import { sha256 } from 'react-native-sha256';

const Realm = require('realm');

const Persons = {
    schema: [PersonSchema],
    schemaVersion: 2.1
};

export default class Signup extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      size : 0
    }
  }

  static navigationOptions = {
    header: null,
  }
  
  signUp(navigate) {
    let formstate = this.refs.SignupForm.getState()

    if (formstate.UserName !== '') {
      let user = PersonService.findUser(formstate.UserName);
      if(user!= null){
        alert('UserName already exists');
      } else {
        //this.hashPassword(formstate.Password);
        //formstate.Password = this.state.hash;
        PersonService.signUp(formstate);
        navigate("Login");
      }
    } else {
      alert('UserName is Empty');
    }
  }

  hashPassword = async (Password) => {
    try {
      await this.setState({hash: sha256(Password)})
    } catch (error) {
      // Error saving data
    }
  }

  componentWillMount() {

    Realm.open(Persons).then(realm => {
      this.setState({ size: realm.objects(PersonSchema.name).length });
      this.setState({realm});
    });

    console.log('REALM PATH', Realm.defaultPath);

  }

	render() {
    const { navigate } = this.props.navigation;
    const info = 'Number of items in this Realm: ' + this.state.size;

		return(
			<View style={styles.container}>
				<SignupForm ref='SignupForm'/>
        <TouchableOpacity style={styles.button} onPress={() => this.signUp(navigate) }>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={() => navigate("Login")}>
            <Text style={styles.signupButton}> Sign in</Text>
          </TouchableOpacity>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
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