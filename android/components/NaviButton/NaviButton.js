import React from 'react'
import {View,Text,TouchableHighlight} from 'react-native'
import styles from '../Styles/Styles'

const NaviButton = ({navigation, navChoice, navigationHandler}) =>{
    return(
        <TouchableHighlight style={styles.naviButtonContainer} onPress={() => navigationHandler(navChoice)}>
            <View style={styles.naviButtonContainer}>
                <Text>Gambar</Text>
                <Text>{navigation.name} {navigation.clicked?'(Aktif)':''}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default NaviButton