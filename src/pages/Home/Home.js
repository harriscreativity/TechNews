import React,{useEffect,useState} from 'react'
import { SafeAreaView,ScrollView } from 'react-native'

//COMPONENTS
import AppBar from '../../components/AppBar'
import HeadLine from '../../components/HeadLine';
import Categories from '../../components/Categories';
import HomeNews from '../../components/Homenews';

import { GetTopHeadline }  from '../../services/api/api'

const Home = ({navigation}) =>{

    const { navigate } = navigation;

    const [headlings,setHeadlings] = useState([])
    const [allHeadlines,setAllHeadlines] = useState([])
    const [allLoading,setAllLoading] = useState(false)
    const [headLineLoading,setheadLineLoading] = useState(false)
    const [selected,setSelect] = useState('technology')

    useEffect(()=>{
        loadNews();
    },[])


    const loadNews = async () =>{
        await getHeadlings();
        await getCategories(selected)
    }

    const getHeadlings = async() =>{
        setheadLineLoading(true)
        try {
            let data = await GetTopHeadline("country=za")
            setHeadlings(data)
            setheadLineLoading(false)
        } catch (error) {
            setheadLineLoading(false)
            console.log(error)
            return;
        }
    }

    const NavigateTo = (params) =>{
        navigate('Detail',params)
    }

    const getCategories = async (category) =>{
        setAllLoading(true)
        try {
            let data = await GetTopHeadline("country=za" + "&category="+ category + "&pageSize=15")
            setAllHeadlines(data);
            setAllLoading(false)
        } catch (error) {
            setAllLoading(false)
            console.log(error)
            return;
        }
    }

    const onSelected = params =>{
        setSelect(params);
        getCategories(params);
    }

    return <SafeAreaView>
        <AppBar /> 
        <ScrollView>
            <HeadLine NavigateTo={NavigateTo} loading={headLineLoading} news={headlings.articles} />
            <Categories onSelected={onSelected} selected={selected} />
            <HomeNews NavigateTo={NavigateTo} loading={allLoading} news={allHeadlines.articles} />
        </ScrollView>       
    </SafeAreaView>
}

export default Home;