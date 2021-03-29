import * as React from 'react';
import {Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Stylesheet, Component, TextInput, Modal} from 'react-native';
import firebase from 'firebase';
import db from './Config';
import Request from './Request';
import AppHeader from './Header';

export default class Home extends React.Component
{
    constructor()
    {
        super();
        this.state = 
        {
            moreInfoVisible: false
        }
    }

    moreInfo = () =>
    {
        alert("Welcome to Super Barter - a hub for people looking to exchange their belongings!", "Fast, safe and secure, you can easily exchange your real-time belongings with people across the globe. If you like or dislike something about the app, we would love to hear your feedback. Navigate to the feedback screen using the feedback tab, and put in your review and opinion about the app.");
    }

    render()
    {
        return(
            <View>
                <View>
                    <AppHeader title = "Super Barter" color = "66C1B3"/>
                </View>

                <View>
                    <Text>
                    In the age of the Internet, everyone is connected and it is extremely easy to 
                    share information with everyone. What if we could share our physical
                    belongings just as easily as we share information? Using Super Barter,
                    you can easily exchange some of your belongings in real-time with people
                    across the globe!
                    </Text>
                </View>

                <View>
                    <TouchableOpacity onPress = {()=>{this.moreInfo(); this.setState}}>
                        <Text>Know More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}