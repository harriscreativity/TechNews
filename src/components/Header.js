import React from 'react'
import { View,StatusBar,TouchableOpacity,Image } from 'react-native'

import styles from '../styles/styles'

const Header = (props) =>{

    const { goBack } = props

    return <View>
        <StatusBar />
        <View style={styles.appbar}>
            <TouchableOpacity onPress={()=>{ goBack(); }}>
                <Image style={{ height:30, width : 30, }} source={require('../assets/left-arrow.png')} />
            </TouchableOpacity>
            <View  style={styles.spacer} />
        </View>
    </View>
}

export default Header