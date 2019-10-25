const apiKey = "a1e6891a5659461ab4c582ef5a60e6a6";
const url = "https://newsapi.org/v2/";

const getTopHeadline = async (params) =>{
    const res = await fetch(url + "top-headlines?"+ params + "&apiKey="+apiKey);
    const newsData = await res.json()
    return newsData;
}

export const GetTopHeadline = getTopHeadline;