import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import Logo from '../Logo';

export default class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = { 
          Email: '',
          Password: ''
        };
      }

      
    static navigationOptions = {
        header: null,
    }

    Login(navigate) {
        if (this.state.Email !== '') {
            this.storeUserName(this.state.Email); // store user

            navigate("HomeTab");
        } else {
            alert('Email is Empty');
        }
    }

    storeUserName = async (UserName) => {
        try {
          await AsyncStorage.setItem('UserName', UserName);
        } catch (error) {
          // Error saving data
        }
    }
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Logo/>
                <View style={styles.container}>
                    <TextInput style={styles.inputBox}
                        placeholder="Email"
                        selectionColor="#fff"
                        keyboardType="email-address" 
                        onSubmitEditing={()=> this.password.focus()}
                        onChangeText={(Email) => this.setState({Email})}/>
                    <TextInput style={styles.inputBox}
                        placeholder="Password" 
                        secureTextEntry={true}
                        ref={(input) => this.password = input}
                        onChangeText={(Password) => this.setState({Password})}/>
                    <TouchableOpacity style={styles.button} onPress={() => this.Login(navigate) }>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.forgotPassword}>
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
            </View>
        );
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
    signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16,
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    },
    signupTextCont : {
        flex:1,
        alignItems:'flex-end',
        justifyContent :'center',
        flexDirection:'row'
    },
    forgotPassword : {
        justifyContent :'center',
        flexDirection:'row'
    },
});