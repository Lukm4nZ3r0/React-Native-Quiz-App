import React from 'react'
import {View,TouchableOpacity,Text} from 'react-native'

const QuizButton = ({current, dataSoal, multiStepButton, gantiSceneSoalFalse}) =>{
    let PanjangSoal = dataSoal.length
    let SoalSaatIni = current

    PrevButton = () =>{
        if(SoalSaatIni>0){
            return(
                <TouchableOpacity style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}  onPress={() => multiStepButton(current-1)}>
                    <Text>Prev</Text>
                </TouchableOpacity>
            )
        }
        else{
            return(
                <Text style={{flex:1}} />
            )
        }
    }

    NextButton = () =>{
        if(SoalSaatIni<PanjangSoal-1){
            return(
                <TouchableOpacity style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} onPress={() => multiStepButton(current+1)}>
                    <Text>Next</Text>
                </TouchableOpacity>
            )
        }
        else{
            return(
                <TouchableOpacity style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}  onPress={() => gantiSceneSoalFalse()}>
                    <Text>Selesai</Text>
                </TouchableOpacity>
            )
        }
    }
    
    return(
    <View style={{flexDirection: 'row',height:'100%'}}>
        {this.PrevButton()}
        {this.NextButton()}
    </View>
    )
}

export default QuizButton