import React, {Component} from 'react';
import {View,Text} from 'react-native'
import NaviButtonList from './android/components/NaviButton/NaviButtonList'
import Quiz from './android/components/Quiz'
import Profile from './android/components/Profile'
import styles from './android/components/Styles/Styles'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      navigation: [
        {name:'Quiz', clicked:false},
        {name:'Search', clicked: false},
        {name:'History', clicked: false},
        {name:'Profile', clicked: true}
      ],
      navigation_current: 3
    }

    this.navigationHandler = this.navigationHandler.bind(this)
  }
  navigationHandler=(navOption)=>{
    let navigationCopy = JSON.parse(JSON.stringify(this.state.navigation))
    let navigationLength = this.state.navigation.length

    for(let i=0 ; i<navigationLength; i++){
      if(navOption === i){
        navigationCopy[i].clicked = true
      }
      else{
        navigationCopy[i].clicked = false
      }
    }

    this.setState({
      navigation: navigationCopy,
      navigation_current:navOption
    })
  }
  render() {
    const navigationCurrent = () =>{
      if(this.state.navigation_current===0){return(<Quiz />)}
      else if(this.state.navigation_current===3){return(<Profile />)}
    }

    return(
      <View style={styles.appContainer}>
        <View style={styles.appCurrentScene}>
          {navigationCurrent()}
        </View>
        <View style={styles.appNavigationBtn}>
          <NaviButtonList navigation={this.state.navigation} navigationHandler={this.navigationHandler} />
        </View>
      </View>
    );
  }
}
