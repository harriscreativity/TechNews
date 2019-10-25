import React from 'react';
import { View, ActivityIndicator,Image, TouchableOpacity ,Text} from 'react-native'
import styles from '../styles/styles';

const ErrorImage =  require('../assets/error.png')

const HomeNews = props =>{

    const { news, loading, NavigateTo } = props

    var newsList = []

    if(news)
        news.forEach(element => {
            if(element.urlToImage !== null){
                newsList.push(element);
            }else{
                console.log(element.urlToImage)
            }
        });

    return <View style={{ marginTop : 20 }}>
        {
            loading ? 
            <ActivityIndicator size="large" color="#707070" /> :
            <View>
                {
                    newsList.map((item,index)=>
                        <TouchableOpacity activeOpacity={0.7} key={index} onPress={()=>{ NavigateTo(item) }}>
                            <View style={styles.newsItem}>
                                <View style={styles.newsImageContainer}>
                                    <Image style={styles.newsImage} 
                                        source={item.urlToImage != '' ? { uri: item.urlToImage } : ErrorImage } />
                                </View>
                                <View style={styles.newsContent}>
                                    <Text ellipsizeMode='tail' numberOfLines={4} style={styles.newsTitle}>{item.title}</Text>
                                    <Text ellipsizeMode='tail' numberOfLines={2} style={styles.newsSubtitle}>{item.description}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }
            </View>
        }
    </View>
}

export default HomeNews