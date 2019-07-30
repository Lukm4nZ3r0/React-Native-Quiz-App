import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    appContainer:{
        flex:1,
        backgroundColor:'white'
    }, 
    appCurrentScene:{
        flex: 9
    },
    appNavigationBtn:{
        flex: 1,
        backgroundColor: 'white',
        elevation: 20,
    },
    naviButtonListContainer:{
        flexDirection: 'row',
        height:'100%'
    },
    naviButtonContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    QuizButtonEnd:{
        marginTop:10, 
        alignItems:'center', 
        justifyContent:'center', 
        padding:20, 
        borderColor:'green', 
        borderWidth:1, 
        borderRadius:10
    }
});

export default styles