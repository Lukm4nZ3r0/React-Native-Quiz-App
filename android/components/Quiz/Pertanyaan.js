import React from 'react'
import {Text,View} from 'react-native'
import styles from '../Styles/Styles'

const Pertanyaan = ({dataSoal, soalSekarang, panjangSoal}) =>{
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <View style={{flex:1, alignItems:'center', justifyContent:'center', height:'100%'}}>
                <Text>{soalSekarang+1} OF {panjangSoal}</Text>
                <Text>Multiple Choice</Text>
            </View>
            <View style={{flex:2, width:'90%', backgroundColor:'cyan', height:'100%', justifyContent:'center' }}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>{dataSoal.question}</Text>
            </View>
        </View>
    )
}

export default Pertanyaan