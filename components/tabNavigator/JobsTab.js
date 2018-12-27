import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon }  from 'native-base';

class JobsTab extends Component{

    static navigationOptions = {
        title: "Jobs",
        tabBarIcon: ({ tintColor } ) => (
            <Icon name="ios-search" style= {{color:tintColor}} />
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Jobs</Text>
            </View>
        )
    }
}
export default JobsTab;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
    }
});