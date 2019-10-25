import React from 'react'
import { View,SafeAreaView,Image,Text,ScrollView } from 'react-native'

import Header from '../../components/Header';

const Detail = ({ navigation }) =>{

    const { state } = navigation
    
    return <View>
        <SafeAreaView>
            <Header goBack={navigation.goBack} />
            <ScrollView>
                <View>
                    <Image style={{ height : 400 }} source={{ uri: state.params.urlToImage }} />
                    <Text>{state.params.title}</Text>
                    <Text>{state.params.content}</Text>
                </View>
                <View>
                    <Text>{state.params.author}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    </View>
}

export default Detail;