import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Logo extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Image style={{ width:40, height:70 }}
                    source={require('./images/logo.png')}/>
                <Text style={styles.logoText}>Welcome to my App</Text>
            </View>
        )
    }
}

export default Logo;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems: 'center',
    justifyContent:'flex-end',
    },
    logoText: {
        marginVertical: 5,
        fontSize:18,
        color: 'rgba(255,255,255,0.7)'
    }
});