import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon }  from 'native-base';

class HomeTab extends Component{

    static navigationOptions = {
        title: "Find Jobs",
        headerRight: <Icon style={{paddingRight:10}} 
        name="ios-chatbubbles"/>,        
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        )
    }
}
export default HomeTab;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
    }
});