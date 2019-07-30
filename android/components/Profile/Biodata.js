import React, {Component} from 'react'
import {View, Text} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class Biodata extends Component{
    constructor(props){
        super(props)
        this.state = {
            biodata:[
                {key:0, vectorIcons:'user', label:'Asep Lukman Hakim'},
                {key:1, vectorIcons:'github', label:'https://github.com/Lukm4nZ3r0'},
                {key:2, vectorIcons:'tags', label:'Your Label Here'},
                {key:3, vectorIcons:'tags', label:'Your Label Here'},
                {key:4, vectorIcons:'tags', label:'Your Label Here'},
            ]
        }
    }
    renderBiodata = () =>{
        return this.state.biodata.map(item=>{
            return(
                <View style={{flexDirection:'row', alignItems:'center', margin:10}} key={item.key}>
                    <FontAwesome name={item.vectorIcons} style={{fontSize:30}}/>
                    <Text style={{fontSize:17, marginLeft:15}}>{item.label}</Text>
                </View>
            )
        })
    }
    render(){
        return(
            <View style={{width:'90%'}}>
                {this.renderBiodata()}
            </View>
        )
    }
} 