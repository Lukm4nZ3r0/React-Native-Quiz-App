import React, { Component } from 'react';
import {View,Text} from 'react-native'
import FotoProfile from './Profile/FotoProfile'
import Biodata from './Profile/Biodata'

export default class Profile extends Component{
    constructor(props){
        super(props)
        this.state={
            redirect: false
        }
    }
    render(){
        return(
            <View style={{flex:1, backgroundColor:'blue'}}>
                <View style={{flex:3, justifyContent:'center', alignItems:'center'}}>
                    <FotoProfile />
                </View>
                <View style={{flex:4, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
                    <Biodata />
                </View>
            </View>
        )
    }
}