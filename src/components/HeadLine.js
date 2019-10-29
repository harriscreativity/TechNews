import React from 'react';
import { View,Image,TouchableOpacity ,Text, ActivityIndicator} from 'react-native'
import styles, { sliderWidth, itemWidth,slideHeight } from '../styles/styles'

const ErrorImage =  require('../assets/error.png')

import Carousel from 'react-native-snap-carousel';

const HeadLine = props =>{

    const { news, loading,NavigateTo } = props
    let data = [];

    if(news)
        news.forEach(element => {
            if(element.urlToImage !== null){
                data.push(element);
            }else{
                console.log(element.urlToImage)
            }
                
        });

    

    const renderItem = ({item, index}) =>{
        return <TouchableOpacity activeOpacity={0.8} onPress={()=>{ NavigateTo(item) }}>
            <View style={styles.shadowContainer}>
                <View style={styles.headlines}>
                    <Image
                        style={styles.headlinesImage}
                        source={item.urlToImage != '' ? { uri: item.urlToImage } : ErrorImage}/>
                    <View style={styles.overlayHeadline}/>
                </View>
                <View style={styles.headlineTextContainer}>
                        <Text style={styles.headlineTitle}>{item.title}</Text>
                        <Text ellipsizeMode='tail' numberOfLines={2}
                            style={styles.headlineSubtitle}
                            >{item.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    }

    return <View>
        {
            loading ?
            <ActivityIndicator size="large" color="#707070" /> : 
            <Carousel
              data={data}
              renderItem={renderItem}
              slideHeight={slideHeight}
              itemWidth={400}
              sliderWidth={sliderWidth}/>
        }
    </View>
}

export default HeadLine