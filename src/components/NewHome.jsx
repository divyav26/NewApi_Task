import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Navbar from './Navbar'
import NewItem from './NewItem';

const NewHome = () => {
    const [articles, setArticles] = useState([])
    const [category,setCaterory] = useState('general')

    useEffect(()=>{
        const fetchArticles = async () => {
            try{
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f330845e4e774ac9a206f58674b9e208`)
                setArticles(response.data.articles);
                console.log(response)
            } catch (error) {
              console.error('Error fetching the articles', error);
            }
        }
        fetchArticles()
    },[category])
  return (
    <>
    <Navbar setCaterory={setCaterory} category={category}/> 
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
   {
    articles.map((news, index)=>{
        return(
            <>
            <NewItem key={index} title={news.title} description={news.description} img={news.urlToImage} url={news.url} />
            </>
        )
    })
   }
   </div>

    </>
    
  )
}

export default NewHome
