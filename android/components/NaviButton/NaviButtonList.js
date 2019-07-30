import React from 'react'
import {View} from 'react-native'
import styles from '../Styles/Styles'
import NaviButton from './NaviButton'

const NaviButtonList = ({navigation,navigationHandler}) =>{
    const navigationButton = []
    const navigationLength = navigation.length
    for(let i = 0; i<navigationLength; i++){
        navigationButton.push(
            <NaviButton key={i} navigation={navigation[i]} navChoice={i} navigationHandler={navigationHandler} />
        )
    }
    return(
        <View style={styles.naviButtonListContainer}>
            {navigationButton}
        </View>
    )
}

export default NaviButtonList