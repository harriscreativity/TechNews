import { StyleSheet, Dimensions, Platform } from 'react-native';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.2;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default styles = StyleSheet.create({
    appbar:{
        height : 50,
        alignItems:'center',
        flexDirection:'row',
        marginLeft:20,
        marginRight:10,
        marginTop:10,
        marginBottom:10
    },
    header:{
        margin:15,
        alignItems:'center',
        flexDirection:'row',
    },
    spacer:{
        flex:1
    },
    CircleImage:{
        width : 40,
        height : 40,
        borderRadius : 100,
        justifyContent:"center",
        alignItems:'center',
        borderColor:'#707070',
        borderWidth:2,
    },
    icon:{
        paddingLeft:10,
        paddingRight:10
    },
    headlines : {
        height : 200,
        borderRadius: 20,
    },
    headlinesImage : {
        backgroundColor: '#ccc',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        borderTopLeftRadius : 20,
        borderTopRightRadius:20,
    },
    overlayHeadline:{
        backgroundColor: 'black',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        opacity: 0.5,
        borderTopLeftRadius : 20,
        borderTopRightRadius:20,
    },
    headlineTextContainer:{
        backgroundColor : '#fff',
        padding : 15,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
        flexDirection:"row",
        flexWrap:"wrap",
        width:'100%',
        shadowColor: "#000",
    },
    headlineTitle:{
        fontWeight:'800',
        fontSize : 15,
        marginBottom : 5
    },
    shadowContainer:{
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        margin:18,
        elevation: 5,
        backgroundColor:'#F7F7F7',
        borderRadius:20
    },
    headlineSubtitle:{
        color:'#707070'
    },
    category:{
        borderRadius: 20,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        margin:7,
        borderWidth:2,
        borderColor:'#707070'
    },
    selectCategory:{
        borderRadius: 20,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        margin:7,
        backgroundColor:'#212121'
    },
    selectCategoryText:{
        color : 'white'
    },
    newsItem:{
        borderRadius:20,
        width:'auto',
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        flexDirection:"row",
        backgroundColor:'#F7F7F7'
    },
    newsImageContainer:{
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        width:120,
        height:130
    },
    newsImage:{
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    newsContent:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        width:'100%',
        padding:10,
        borderBottomRightRadius:20,
        borderTopRightRadius:20,
        height:130
    },
    newsTitle:{
        fontWeight : '900',
        color:'#191C2F',
        marginBottom : 6,
        width : '98%'
    },
    newsSubtitle:{
        fontWeight : '400',
        color:'#333'
    },
    h1:{
        fontSize : 18,
        fontWeight : 'bold',
        padding: 10
    },
    p:{
        fontSize : 14,
        padding : 10
    },
    span:{
        fontSize:13,
        color : '#707070'
    }
})