import React from 'react'
import { View,StatusBar,TouchableOpacity,Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

import CircleImage from './CircleImage';

import styles from '../styles/styles'

const AppBar = () =>{
    return <View>
        <StatusBar />
        <View style={styles.appbar}>
            <CircleImage />
            <View  style={styles.spacer} />
            <TouchableOpacity onPress={()=>{}}>
                <Icon style={styles.icon}
                    name="bell" 
                    size={30} 
                    color="#707070" solid />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}>
                <Icon style={styles.icon}
                    name="search" 
                    size={30} 
                    color="#707070" />
            </TouchableOpacity>
            
        </View>
    </View>
}

export default AppBar