import React, { Component } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";

class ProfileTab2 extends Component{
    constructor(props) {
        super(props);
    
        this.state = { 
          UserName: '',
          FirstName: '',
          LastName: '',
          Email: '',
          Password: '',
          editable: false
        };
    }

    static navigationOptions = {
        title: "Profile",
    }

    retrieveUser= async () => {
        try {
          const value = await AsyncStorage.getItem('UserName');
          if (value !== null) {
            this.setState({ UserName:value });

            const user = PersonService.findUser(this.state.UserName);
            this.setState({ FirstName: user.FirstName });
            this.setState({ LastName: user.LastName });
            this.setState({ Email: user.Email });
          }
         } catch (error) {
           // Error retrieving data
         }
    }

    componentDidMount() {
        this.retrieveUser();
    }

    render(){
        return (
            <View style={styles.container}>
                 <Text>Profile</Text>
            </View>
            );
        }
}

export default ProfileTab2;

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#455a64',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'
    },
    inputBox: {
        width:300,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:21,
        color:'#ffffff',
        marginVertical: 10
    }
});