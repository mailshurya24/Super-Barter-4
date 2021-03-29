import * as React from 'react';
import {Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Stylesheet, Component, TextInput, Modal} from 'react-native';
import firebase from 'firebase';
import db from './Config';
import AppHeader from './Header';

export default class Feedback extends React.Component
{
    constructor()
    {
        super();
        this.state = 
        {
            opinion: '',
            username: '',
            userEmail: '',
            likes: 0,
            dislikes: 0
        }
    }

    incrementLikes = () =>
    {
        var likePressed = db.collection("Reviews").doc(this.state.likes).update({
            Likes: firebase.firestore.FieldValue.increment(this.state.likes + 1)
        })

        this.setState({likes:likePressed})
        alert("Thank you for submitting your feedback!");
    }

    incrementDislikes = () =>
    {
        var dislikePressed = db.collection("Reviews").doc(this.state.dislikes).update({
            Dislikes: firebase.firestore.FieldValue.increment(this.state.dislikes + 1)
        })

        this.setState({dislikes: dislikePressed});
        alert("Thank you for submitting your feedback!");
    }

    submitFeedback = () =>
    {
        db.collection("Feedback").update({
            Opinion: this.state.opinion,
            Name: this.state.username,
            Email: this.state.userEmail,
            Date: firebase.firestore.Timestamp.now().toDate()
        });

        this.setState({
            opinion: '',
            username: '',
            userEmail: ''
        })
    }

    render()
    {
        return(
            <View>
                <KeyboardAvoidingView>
                <View>
                    <AppHeader title = "Feedback" color = "66C1B3"/>
                </View>

                <View>
                    <TextInput
                        placeholder = "Your Name"
                        value = {this.state.username}
                        onChangeText = {(text)=>{
                            this.setState({username: text})
                        }}
                    />

                    <TextInput
                        placeholder = "Your Email Address"
                        keyboardType = 'email-address'
                        value = {this.state.userEmail}
                        onChangeText = {(text)=>{
                            this.setState({userEmail: text})
                        }}
                    />

                    <TextInput
                        placeholder = "Your Opinion"
                        multiline = {true}
                        value = {this.state.opinion}
                        onChangeText = {(text)=>{
                            this.setState({opinion: text})
                        }}
                    />
                </View>

                <TouchableOpacity onPress = {()=>{this.submitFeedback()}}>
                    <Text>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source = {{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png"}}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image
                        source = {{uri: "data:image/png;base64,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"}}
                    />
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}