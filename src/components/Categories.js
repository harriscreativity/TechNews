import React from 'react'
import { View,Text } from 'react-native';
//import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles/styles'; 
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const Categories = props =>{
    const { onSelected, selected } = props
    const categories = ['technology','business','entertainment','health','science','sports']
    return <View style={{ width : '90%', marginRight:'auto',marginLeft:'auto' }}>
        <ScrollView horizontal>
        {
            categories.map((category,index)=>
               <TouchableOpacity key={index} onPress={()=>{ onSelected(category) }}>
                    <View style={selected == category ? styles.selectCategory : styles.category}>
                        <Text style={selected == category ? styles.selectCategoryText : ''}>{category}</Text>
                    </View>
               </TouchableOpacity>
            )
        }
        </ScrollView>
    </View>
}

export default Categories