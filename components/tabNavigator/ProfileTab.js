import React, { Component } from "react";
import { View, TextInput, StyleSheet, AsyncStorage } from "react-native";
import { Icon }  from 'native-base';
import PersonService from '../realm/RealmService';
import ProfileHeader from "./ProfileHeader";

class ProfileTab extends Component{
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
    _renderPassword () {
        return (
            <TextInput style={styles.inputBox}
              placeholder="Password" 
              secureTextEntry={true}
              ref={(input) => this.password = input}
              onChangeText={(Password) => this.setState({Password})}/>
        );  
    }

    componentDidMount() {
        this.retrieveUser();
    }

    render(){

        return (
             
            <View style={styles.container}>
                <ProfileHeader FirstName={ this.state.FirstName }/>

            <TextInput style={styles.inputBox}
              placeholder="Username"
              selectionColor="#fff"
              value={this.state.UserName}
              editable = {this.state.editable}
              onSubmitEditing={()=> this.firstname.focus()}
              onChangeText={(UserName) => this.setState({UserName})}/>
            <TextInput style={styles.inputBox}
              placeholder="FirstName"
              selectionColor="#fff"
              value={this.state.FirstName}
              editable = {this.state.editable}
              ref={(input) => this.firstname = input}
              onSubmitEditing={()=> this.lastname.focus()}
              onChangeText={(FirstName) => this.setState({FirstName})}/>
            <TextInput style={styles.inputBox}
              placeholder="LastName"
              selectionColor="#fff"
              value={this.state.LastName}
              editable = {this.state.editable}
              ref={(input) => this.lastname = input}
              onSubmitEditing={()=> this.email.focus()}
              onChangeText={(LastName) => this.setState({LastName})}/>
            <TextInput style={styles.inputBox}
              placeholder="Email"
              selectionColor="#fff"
              keyboardType="email-address"
              value={this.state.Email}
              editable = {this.state.editable}
              ref={(input) => this.email = input}
              onSubmitEditing={()=> this.password.focus()}
              onChangeText={(Email) => this.setState({Email})}/>
            
            </View> 
        );
    }
}
export default ProfileTab;

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