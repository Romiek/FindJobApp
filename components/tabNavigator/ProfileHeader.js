import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Image  } from "react-native";

class ProfileHeader extends Component{

    render(){
        return (
            <ImageBackground  style={styles.headerBackground} source={require('../images/water.jpg')}> 
                <View style={styles.header}>
                    <View style={styles.profilepicWrap}>
                        <Image style={styles.prfilepic} source={require('../images/logo.png')}/>
                    </View>
                    <Text style={styles.name}>Romeo </Text>
                    <Text style={styles.pos}>App Developer</Text>
                </View>
            </ImageBackground>
        );
    }
}

export default ProfileHeader;

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#455a64',
        flex: 1,
        alignItems:'center',
        justifyContent :'center',
    },
    headerBackground: {
        //flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    header: {
        //flex: 1,
        alignItems: 'center',
        justifyContent :'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20,
    },
    profilepicWrap: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 16,
    },
    prfilepic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 4,
    },
    name: { 
        marginTop: 20,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    pos: {
        fontSize: 14,
        color: '#0394c0',
        fontWeight: '300',
        fontStyle: 'italic',
    }
});