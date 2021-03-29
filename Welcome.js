import * as React from 'react';
import {Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Stylesheet, Component, TextInput, Modal} from 'react-native';
import firebase from 'firebase';
import db from './Config';
import Home from './Home';
import Request from './Request';
import AppHeader from './Header';

export default class Welcome extends React.Component
{
    constructor()
    {
        super();
        this.state = 
        {
            emailID : '',
            password : '',
            isModalVisible : false,
            firstName : '',
            lastName : '',
            confirmPassword : '',
            address : '',
            contactDetails : '',
            age : '',
        }
    }

    userLogin = async(EmailID, Password) =>
    {
        firebase.auth().signInWithEmailAndPassword(EmailID, Password)
        .then((doc)=>
        {
            return(
                alert("User Logged In Successfully!"),
                this.props.navigation.navigate("Home")
                
            )
        })
        .catch((error)=>
        {
            var errorCode = error.code;
            var errorContainer = error.message;
            return(
            alert(errorContainer)
            )
        })
    }

    userSignUp = async(EmailId, password, confirmPassword) =>
    {

        if(password !== confirmPassword)
        {
            alert("Password doesn't match!")
        }
        else
        {
            firebase.auth().createUserWithEmailAndPassword(EmailId, password)
            .then((doc)=>
            {
                db.collection("Users").add({
                FirstName: this.state.firstName,
                LastName: this.state.lastName,
                Age: this.state.age,
                Address: this.state.address,
                ContactDetails: this.state.contactDetails,
                EmailIdentity: this.state.emailID,
                Password: this.state.password
                })

                return(
                    alert("Welcome to Super Barter!", "User Added Successfully",
                         [{text: "Continue", onPress: ()=>{
                             this.setState({isModalVisible: false})
                         }}])
                )
            })
            .catch((error)=>
            {
                var errorCode = error.code;
                var errorContainer = error.message;
                return(
                    alert(errorContainer)
                )
            })    
        }
    }

    showModal = () =>
    {
        return(
            <Modal
                animationType = 'fade'
                transparent = {true}
                visible = {this.state.isModalVisible}
            >
                <View>
                    <KeyboardAvoidingView>
                        <AppHeader title = "Registration" color = "#66C1B3"/>

                        <TextInput
                        placeholder = "First Name"
                        maxLength = {15}
                        onChangeText = {(text)=>
                        {
                            this.setState({firstName:text})
                        }}
                        value = {this.state.firstName}
                        />

                        <TextInput
                        placeholder = "Last Name"
                        maxLength = {15}
                        onChangeText = {(text)=>
                        {
                            this.setState({lastName:text})
                        }}
                        value = {this.state.lastName}
                        />

                        <TextInput
                        style = {}
                        placeholder = "Email Address e.g., abc@gmail.com"
                        keyboardType = "email-address"
                        value = {this.state.emailID}
                        onChangeText = {(text)=>{
                            this.setState({emailID : text})
                        }}
                        />
                    
                        <TextInput
                        style = {}
                        placeholder = "Enter your Password here"
                        secureTextEntry = {true}
                        value = {this.state.password}
                        onChangeText = {(text)=>{
                            this.setState({password : text})
                        }}
                        />

                        <TextInput
                        placeholder = {"Confirm Password"}
                        onChangeText = {(text)=>
                        {
                            this.setState({confirmPassword:text})
                        }}
                        value = {this.state.confirmPassword}
                        />
                        
                        <TextInput
                        placeholder = 'Address'
                        onChangeText = {(text)=>
                        {
                            this.setState({address:text})
                        }}
                        value = {this.state.address}
                        multiline = {true}
                        />

                        <TextInput
                        placeholder = 'Age'
                        keyboardType = 'number-pad'
                        onChangeText = {(num)=>
                        {
                            this.setState({age:num})
                        }}
                        value = {this.state.age}
                        />

                        <TextInput
                        placeholder = 'Contact Number'
                        keyboardType = 'number-pad'
                        onChangeText = {(num)=>
                        {
                            this.setState({contactDetails:num})
                        }}
                        value = {this.state.contactDetails}
                        />
                    </KeyboardAvoidingView>

                    <View>
                        <TouchableOpacity onPress = {()=>{
                            this.userSignUp(this.state.emailID, this.state.password, this.state.confirmPassword);
                        }}>
                            <Text>REGISTER</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress = {()=>{
                            this.setState({isModalVisible: false})
                        }}>
                            <Text>CANCEL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }

    render()
    {
        return(
            <View>
                <View>
                    {this.showModal()};
                </View>

                <View>
                    <Image
                        source = {require("./assets/WelcomeImage")}
                    />
                    <Text>Super Barter</Text>
                    
                    <TextInput
                    style = {}
                    placeholder = "Email Address e.g., abc@gmail.com"
                    keyboardType = "email-address"
                    value = {this.state.emailID}
                    onChangeText = {(text)=>{
                        this.setState({emailID : text})
                    }}
                    />
                    
                    <TextInput
                    style = {}
                    placeholder = "Enter your Password here"
                    secureTextEntry = {true}
                    value = {this.state.password}
                    onChangeText = {(text)=>{
                        this.setState({password : text})
                    }}
                    />
                </View>

                <View>
                    <TouchableOpacity 
                    onPress = {()=>{this.userLogin(this.state.emailID, this.state.password)}}
                    >
                        <Text>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress = {()=>{this.userSignUp(this.state.emailID, this.state.password)
                                    this.setState({isModalVisible:true})}}
                    >
                        <Text>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
        
    }

}

const styles = Stylesheet.create
({

})