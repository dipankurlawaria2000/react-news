import NewsItem from "./NewsItem.js"
import React , {useEffect, useState} from "react"
import Axios from "axios"


const NewsList = () => {
   
    const[articles,setArticles]=useState([]);
    useEffect(()=>{
        const getArticles= async()=>{
            let c=(Math.random()*100)%2;
            c=Math.floor(c);
            console.log(c);
            
            
            if(c===0){
                const res=await Axios.get(
                    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=228804a9d62544a1a836c444a5ef6158");
    
                setArticles(res.data.articles);
            }
            else if(c===1){
                const res=await Axios.get(
                    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=228804a9d62544a1a836c444a5ef6158");
                    
                setArticles(res.data.articles);
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

export default NewsList
