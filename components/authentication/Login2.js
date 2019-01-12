import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import Logo from '../Logo';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Logo/>
                <View style={styles.container}>
                    <TextInput style={styles.inputBox}
                        placeholder="Email"
                        selectionColor="#fff"
                        keyboardType="email-address" 
                        onSubmitEditing={()=> this.password.focus()}
                        onChangeText={(UserName) => this.setState({UserName})}/>
                    <TextInput style={styles.inputBox}
                        placeholder="Password" 
                        secureTextEntry={true}
                        ref={(input) => this.password = input}
                        onChangeText={(Password) => this.setState({Password})}/>
                    <TouchableOpacity style={styles.button} onPress={() => this.Login(navigate) }>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
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
});