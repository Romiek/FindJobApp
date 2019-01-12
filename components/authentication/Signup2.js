import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Signup extends Component {
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

    static navigationOptions = {
        header: null,
      }

    signUp(navigate) {
        
        if (this.state.Email !== '') {
            navigate("Login");
        } else {
          alert('Email is Empty');
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <View style={styles.container}>
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
                    <TouchableOpacity style={styles.button} onPress={() => this.signUp(navigate) }>
                        <Text style={styles.buttonText}>Signup</Text>
                     </TouchableOpacity>             
                </View>
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
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#455a64',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupTextCont : {
      alignItems:'flex-end',
      justifyContent :'center',
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
    inputBox: {
        width:350,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:21,
        color:'#ffffff',
        marginVertical: 10
    },
    button: {
        width:350,
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
    },
});