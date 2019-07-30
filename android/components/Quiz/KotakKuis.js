import React from 'react'
import {View} from 'react-native'
import styles from '../Styles/Styles'
import Pertanyaan from './Pertanyaan'
import DaftarJawaban from './DaftarJawaban'

const KotakKuis = ({dataSoal, handleClick, soalSekarang, panjangSoal})=>{
    return(
        <View style={{flex:8, alignItems:'center'}}>
            <Pertanyaan dataSoal={dataSoal} soalSekarang={soalSekarang} panjangSoal={panjangSoal}/>
            <DaftarJawaban dataSoal={dataSoal} handleClick={handleClick} />
        </View>
    )
}

export default KotakKuis