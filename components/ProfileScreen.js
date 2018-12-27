import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class ProfileScreen extends Component{

    static navigationOptions = {

        title: "Home",
    }
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
            </View>
        )
    }
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
    }
});