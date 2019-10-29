import React from 'react'
import { View,StatusBar,TouchableOpacity,Image } from 'react-native'

import styles from '../styles/styles'

const Header = (props) =>{

    const { goBack } = props

    return <View>
        <StatusBar />
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>{ goBack(); }}>
                <Image style={{ height:25, width : 25, }} source={require('../assets/left-arrow.png')} />
            </TouchableOpacity>
            <View  style={styles.spacer} />
        </View>
    </View>
}

export default Header