import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon }  from 'native-base';

class MainScreen extends Component{

    static navigationOptions = {

        title: "Main",
        headerRight: <Icon style={{paddingRight:10}} 
        name="ios-chatbubbles"/>
    }
    render(){
         return (
            <View style={styles.container}>
                <Text>MainScreen</Text>
            </View>
        )
    }
}
export default MainScreen;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
    }
});