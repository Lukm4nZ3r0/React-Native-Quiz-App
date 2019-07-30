import React, { Component } from 'react'
import {View, Text} from 'react-native'
import styles from './Styles/Styles'
import KotakKuis from './Quiz/KotakKuis'
import QuizButton from './Quiz/QuizButton'

export default class Quiz extends Component{
    constructor(props){
        super(props)

        var dataSoal = [
            {
                question: "What is 8 x 1? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi tortor, viverra eget lorem eu, laoreet euismod arcu. Suspendisse arcu felis, auctor eget molestie ut, euismod id nibh. Donec ultrices leo quis nisl pharetra eleifend.",
                answers: {
                    answer_option:[
                        "1",
                        "8",
                        "16",
                        "9"
                    ],
                    answer_selected: ''
                },
                correct: 1,
                clicked: false
            },
            {
                question: "Who is Steve Jobs?",
                answers: {
                    answer_option:[
                        "bla bla bla",
                        "bla bla bla",
                        "bla bla bla",
                        "bla bla bla"
                    ],
                    answer_selected: ''
                },
                correct: 3,
                clicked: false
            },
            {
                question: "Metallica is a ____ band",
                answers: {
                    answer_option:[
                        "1",
                        "8",
                        "bla bla bla",
                        "9"
                    ],
                    answer_selected: ''
                },
                correct: 3,
                clicked: false
            },
            {
                question: "IS is a ____",
                answers: {
                    answer_option:[
                        "1",
                        "8",
                        "bla bla bla",
                        "9"
                    ],
                    answer_selected: ''
                },
                correct: 2,
                clicked: false
            },
            {
                question: "Who was Einstein",
                answers: {
                    answer_option:[
                        "1",
                        "8",
                        "bla bla bla",
                        "9"
                    ],
                    answer_selected: ''
                },
                correct: 0,
                clicked: false
            },
            {
                question: "JavaScript can be used in ____ development",
                answers: {
                    answer_option:[
                        "1",
                        "8",
                        "bla bla bla",
                        "9"
                    ],
                    answer_selected: ''
                },
                correct: 3,
                clicked: false
            },
            {
                question: "Hitler was a",
                answers: {
                    answer_option:[
                        "1",
                        "8",
                        "bla bla bla",
                        "9"
                    ],
                    answer_selected: ''
                },
                correct: 3,
                clicked: false
            },
            {
                question: "Korn is a",
                answers: {
                    answer_option:[
                        "1",
                        "8",
                        "bla bla bla",
                        "9"
                    ],
                    answer_selected: ''
                },
                correct: 0,
                clicked: false
            },
            {
                question: "Windows computers are",
                answers: {
                    answer_option:[
                        "1",
                        "8",
                        "bla bla bla",
                        "9"
                    ],
                    answer_selected: ''
                },
                correct: 3,
                clicked: false
            },
            {
                question: "The BigBan stands in",
                answers: {
                    answer_option:[
                        "1",
                        "8",
                        "bla bla bla",
                        "9"
                    ],
                    answer_selected: ''
                },
                correct: 1,
                clicked: false
            },
        ];

        this.state={
            current:0,
            soal:dataSoal,
            benar:0,
            salah:0,
            sceneSoal:true
        }
        
        this.handleClick = this.handleClick.bind(this)
        this.multiStepButton = this.multiStepButton.bind(this)
        this.gantiSceneSoalFalse = this.gantiSceneSoalFalse.bind(this)
        this.gantiSceneSoalTrue = this.gantiSceneSoalTrue.bind(this)
    }

    handleClick(choice){
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

    multiStepButton(event){
        this.setState({current:event})
    }

    gantiSceneSoalFalse(){
        this.setState({sceneSoal:false})
    }

    gantiSceneSoalTrue(){
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
                        <View style={{flex:8,backgroundColor:'blue'}}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Text>Math(Random Test)</Text>
                            </View>
                            <KotakKuis 
                                handleClick={this.handleClick} 
                                dataSoal={this.state.soal[this.state.current]} 
                                soalSekarang={this.state.current}
                                panjangSoal={this.state.soal.length}
                            />
                        </View>

                        <View style={{flex:1,backgroundColor:'red'}}>
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
                    <View>
                        <Text>Jumlah Benar : {this.state.benar}</Text>
                        <Text onPress={this.gantiSceneSoalTrue}>Coba Lagi!</Text>
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