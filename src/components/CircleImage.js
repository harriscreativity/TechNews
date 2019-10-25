import React from 'react'
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles/styles'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const CircleImage = props =>{
    return <View style={styles.CircleImage}>
        <TouchableOpacity onPress={()=>{}}>
            <Icon name="user" 
                size={30} 
                color="#707070" solid />
        </TouchableOpacity>
    </View>
}

export default CircleImage