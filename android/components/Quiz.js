import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './Styles/Styles'
import KotakKuis from './Quiz/KotakKuis'
import QuizButton from './Quiz/QuizButton'
import QuizData from './DummyData/QuizData'

export default class Quiz extends Component{
    constructor(props){
        super(props)
        this.state={
            current:0,
            soal:QuizData,
            benar:0,
            salah:0,
            sceneSoal:true
        }
    }

    handleClick = (choice) =>{
        let copySoal = JSON.parse(JSON.stringify(this.state.soal))
        if(choice == this.state.soal[this.state.current].correct){
            if(this.state.soal[this.state.current].clicked == false){
                this.setState({benar: this.state.benar + 1})

                copySoal[this.state.current].clicked = true
            }
        }
        else{
            if(this.state.soal[this.state.current].clicked == true){
                this.setState({benar: this.state.benar - 1})

                copySoal[this.state.current].clicked = false
            }
        }

        copySoal[this.state.current].answers.answer_selected = choice
        this.setState({soal:copySoal})
    }

    multiStepButton = (event) =>{
        this.setState({current:event})
    }

    gantiSceneSoalFalse = () =>{
        this.setState({sceneSoal:false})
    }

    gantiSceneSoalTrue = () =>{
        let copySoal = JSON.parse(JSON.stringify(this.state.soal))
        for(let i=0;i<this.state.soal.length-1;i++){
            copySoal[i].answers.answer_selected = ''
            copySoal[i].clicked = false
        }
        this.setState({
            benar:0,
            salah:0,
            current:0,
            sceneSoal:true,
            soal:copySoal
        })
    }
    
    render(){
        const sceneSoal = () =>{
            if(this.state.sceneSoal){
                return(
                    <View style={{flex:1}}>
                        <View style={{flex:8}}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Text>Random Test</Text>
                            </View>
                            <KotakKuis 
                                handleClick={this.handleClick} 
                                dataSoal={this.state.soal[this.state.current]} 
                                soalSekarang={this.state.current}
                                panjangSoal={this.state.soal.length}
                            />
                        </View>

                        <View style={{flex:1}}>
                            <QuizButton 
                                current={this.state.current} 
                                dataSoal={this.state.soal} 
                                multiStepButton={this.multiStepButton} 
                                gantiSceneSoalFalse={this.gantiSceneSoalFalse}
                            />
                        </View>
                    </View>
                )
            }
            else{
                return(
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Text>Jumlah Benar : {this.state.benar}</Text>
                        <TouchableOpacity onPress={this.gantiSceneSoalTrue} style={styles.QuizButtonEnd}>
                            <Text style={{color:'green'}}>Coba Lagi?</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        }
        return(
            <View style={{flex:1}}>
                {sceneSoal()}
            </View>
        )
    }
}