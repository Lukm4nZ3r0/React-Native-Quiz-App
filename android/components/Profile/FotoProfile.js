import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'

export default class FotoProfile extends Component {
    render(){
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Image source={require('../../../assets/img/depositphotos_113862774-stock-illustration-vector-businessman-profile-icon-man.jpg')} style={{width:120, height:120, borderRadius:120, borderColor:'white', borderWidth:5}} />
                <Text style={{color:'white', fontSize:24, fontWeight:'bold', marginTop:'5%'}}>Asep Lukman Hakim (Dev)</Text>
            </View>
        )
    }
}