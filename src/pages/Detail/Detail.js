import React,{useState} from 'react'
import { View,SafeAreaView,Image,Text,ScrollView } from 'react-native'

import Header from '../../components/Header';
import styles from '../../styles/styles';

const Detail = ({ navigation }) =>{

    const { state } = navigation
    
    const [loading,setLoading] = useState(false)

    return <SafeAreaView>
            <ScrollView>
                <Header goBack={navigation.goBack} />
                <View>
                    <Image style={{ height : 400 }}
                        loadingIndicatorSource={require('../../assets/error.png')} 
                        onLoadStart={()=>{}} 
                        onLoadEnd={()=>{}} source={{ uri: state.params.urlToImage }} />
                    <Text style={styles.h1}>{state.params.title}</Text>
                    <Text style={styles.p}>{state.params.content}</Text>
                </View>
                <View style={styles.p}>
                    <Text style={styles.span}>{state.params.author}</Text>
                    <Text style={styles.span}>{state.params.publishedAt}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
}

export default Detail;