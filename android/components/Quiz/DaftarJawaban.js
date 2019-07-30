import React from 'react'
import {View, Text} from 'react-native'
import Jawaban from './Jawaban'
import styles from '../Styles/Styles'

const DaftarJawaban = ({dataSoal, handleClick}) =>{
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const PanjangJawaban = dataSoal.answers.answer_option.length
    var jawaban = []
    for (let i = 0; i < PanjangJawaban ;i++){
        jawaban.push(
            <Jawaban 
                choice={i} 
                alphaOption={alphabet[i].split('')}
                dataSoalAnswer={dataSoal.answers.answer_selected}
                handleClick={handleClick} 
                answer={dataSoal.answers.answer_option[i]} 
                key={i}
            />
        )
    }
    return(
        <View style={{flex:1, width:'90%', height:'100%',}}>{jawaban}</View>
    )
}

export default DaftarJawaban