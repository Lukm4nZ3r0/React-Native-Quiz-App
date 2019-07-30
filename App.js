import React, {Component} from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import {View,Text} from 'react-native'
import NaviButtonList from './android/components/NaviButton/NaviButtonList'
import Quiz from './android/components/Quiz'
import Profile from './android/components/Profile'
import styles from './android/components/Styles/Styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

// export default class App extends Component{
//   constructor(props){
//     super(props)
//     this.state={
//       navigation: [
//         {name:'Quiz', clicked:false},
//         {name:'Search', clicked: false},
//         {name:'History', clicked: false},
//         {name:'Profile', clicked: true}
//       ],
//       navigation_current: 3
//     }

//     this.navigationHandler = this.navigationHandler.bind(this)
//   }
//   navigationHandler=(navOption)=>{
//     let navigationCopy = JSON.parse(JSON.stringify(this.state.navigation))
//     let navigationLength = this.state.navigation.length

//     for(let i=0 ; i<navigationLength; i++){
//       if(navOption === i){
//         navigationCopy[i].clicked = true
//       }
//       else{
//         navigationCopy[i].clicked = false
//       }
//     }

//     this.setState({
//       navigation: navigationCopy,
//       navigation_current:navOption
//     })
//   }
//   render() {
//     const navigationCurrent = () =>{
//       if(this.state.navigation_current===0){return(<Quiz />)}
//       else if(this.state.navigation_current===3){return(<Profile />)}
//     }

//     return(
//       <View style={styles.appContainer}>
//         <View style={styles.appCurrentScene}>
//           {navigationCurrent()}
//         </View>
//         <View style={styles.appNavigationBtn}>
//           <NaviButtonList navigation={this.state.navigation} navigationHandler={this.navigationHandler} />
//         </View>
//       </View>
//     );
//   }
// }

const bottomTabNavigator = createBottomTabNavigator({
  Quiz:{screen:Quiz},
  Profile:{screen:Profile},
},{
  defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = FontAwesome;
          let iconName;
          if (routeName === 'Quiz') {
              iconName = `pencil`;
          } else if (routeName === 'Profile') {
              iconName = `id-card`;
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={25} color={tintColor} />;
      }
  }),
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'grey',
    style:{
        backgroundColor:'white'
    },
    showLabel:false
  },
})

const App = createStackNavigator({
  Quiz:{
    screen:bottomTabNavigator,
    navigationOptions: () => ({
      header: null,
    })
  },
  Profile:{screen:Profile},
},{
  initialRouteName: 'Quiz'
})

export default createAppContainer(App)