import React, { Component } from 'react';
import {View,Text,Button,StyleSheet,TextInput,AsyncStorage, TouchableHighlight, ImageBackground} from 'react-native'
import styles from './Styles/Styles'

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            sembunyikanSandi:true,
            redirect: false,
            isFocused:false
        }
    }

    penyimpanTeks = (namaState) =>{
        return (text) =>{
            this.setState({
                [namaState]:text
            })
        }
    }

    login = () =>{
        if(this.state.username && this.state.password){
            this.setState({redirect:true})
        }
        else{
            alert('Data salah')
        }
    }

    touchBtn = () =>{
        this.setState(currentState=>({
            sembunyikanSandi: !currentState.sembunyikanSandi
        }))
    }

    penyimpanFokus = (e) =>{
        this.setState({
            isFocused:true
        })
        if(this.props.onFocus){
            this.props.onFocus(e)
        }
    }

    render(){
        
        const gambarBg = require('../../assets/img/ea9bd5dd019a6d265ef2dc578d3ec7ce.png')
        return(
            <ImageBackground source={gambarBg} style={styles.bgBlue}>
                <Text style={styles.judulLogin}>Please Login</Text>
                <View style={styles.isiFormLogin}>
                <Text>Username:</Text>
                <TextInput 
                    onFocus={this.penyimpanFokus} 
                    underlineColorAndroid={isFocused? 'cyan':'grey'} 
                    placeholder="Username" 
                    onChangeText={this.penyimpanTeks('username')} 
                    autoCapitalize="none"
                    />
                <Text>Password:</Text>
                <TextInput 
                    onFocus={this.penyimpanFokus} 
                    underlineColorAndroid={isFocused? 'cyan':'grey'} 
                    placeholder="Password" 
                    onChangeText={this.penyimpanTeks('password')} 
                    secureTextEntry={this.state.sembunyikanSandi} 
                    autoCapitalize="none"
                    />
                <TouchableHighlight style={styles.tombolHiderPass} onPress={this.touchBtn}>
                    <Text>{this.state.sembunyikanSandi? 'Perlihatkan':'Sembunyikan'}</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.tombolLogin} onPress={this.login} title="Start" >
                    <Text style={styles.teksBtnLogin}>LOGIN</Text>
                </TouchableHighlight>
                </View>
            </ImageBackground>
        )
        
    }
}
