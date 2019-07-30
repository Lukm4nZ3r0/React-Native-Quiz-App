import React from 'react'
import {Text,View,TouchableHighlight} from 'react-native'
import styles from '../Styles/Styles'

const Jawaban = ({choice, handleClick, answer, alphaOption, dataSoalAnswer}) =>{
    return(
        <TouchableHighlight style={{flex:1, backgroundColor:'white'}} onPress={() => handleClick(choice)}>
            <View style={{flex:1, justifyContent:'center'}}>
            <View style={{flex:8, flexDirection: 'row', alignItems:'center'}}>
                <Text style={{flex:1,backgroundColor:choice === dataSoalAnswer ?'blue':'black', color:'white', fontWeight:'bold', padding:20}}>{alphaOption}</Text>
                <Text style={{flex:10, backgroundColor:choice === dataSoalAnswer ?'cyan':'white', padding:20}}>
                    {answer}
                </Text>
            </View>
            <View style={{flex:1, backgroundColor:'green'}} />
            </View>
        </TouchableHighlight>
    )
}

export default Jawaban