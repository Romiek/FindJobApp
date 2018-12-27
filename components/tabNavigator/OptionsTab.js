import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon }  from 'native-base';

class OptionsTab extends Component{

    static navigationOptions = {
        title: "Options",
        tabBarIcon: ({ tintColor } ) => (
            <Icon name="ios-settings" style= {{color:tintColor}} />
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Options</Text>
            </View>
        )
    }
}
export default OptionsTab;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
    }
});