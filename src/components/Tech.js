import NewsItem from "./NewsItem.js"
import React , {useEffect, useState} from "react"
import Axios from "axios"


const Tech = () => {
   
    const[articles,setArticles]=useState([]);
    useEffect(()=>{
        const getArticles= async()=>{
            let c=(Math.random()*100)%3;
            c=Math.floor(c);
            console.log(c);
            
            if(c===0){
                const res=await Axios.get(
                    // "https://newsapi.org/v2/everything?q=apple&from=2021-09-29&to=2021-09-29&sortBy=popularity&apiKey=7e9e5f56009645f8a2fa82a7fd859abf");
                    "https://newsapi.org/v2/everything?q=apple&from=2021-11-17&to=2021-11-17&sortBy=popularity&apiKey=228804a9d62544a1a836c444a5ef6158");
                
                setArticles(res.data.articles);
                // console.log(res);
            }
            else if(c===1){
                const res=await Axios.get(
                    // "https://newsapi.org/v2/everything?q=tesla&from=2021-09-01&sortBy=publishedAt&apiKey=7e9e5f56009645f8a2fa82a7fd859abf");
                    "https://newsapi.org/v2/everything?q=tesla&from=2021-10-18&sortBy=publishedAt&apiKey=228804a9d62544a1a836c444a5ef6158");
    
                setArticles(res.data.articles);
                // console.log(res);
            }
            else if(c===2){
                const res=await Axios.get(
                    // "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7e9e5f56009645f8a2fa82a7fd859abf");
                    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=228804a9d62544a1a836c444a5ef6158");
    
                setArticles(res.data.articles);
                // console.log(res);
            }
        };
    getArticles();
    },[]);
    
    return (
    <div>
        {
            articles.map(({title, description, url, urlToImage}) =>(
                <NewsItem
                title={title}
                description={description}
                url={url}
                urlToImage={urlToImage}
                />
            ))
        }
    </div>
    );
}

export default Tech
