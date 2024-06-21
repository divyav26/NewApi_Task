import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Navbar from './Navbar'
import NewItem from './NewItem';
import Paginations from './Paginations';

const NewHome = () => {
    const [articles, setArticles] = useState([])
    const [category,setCaterory] = useState('general')
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const articlesPerPage = 5; // Set the number of articles per page

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
      setCurrentPage(1); // Reset to first page on new search
    };

 
  

    useEffect(()=>{
        const fetchArticles = async () => {
            try{
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${currentPage}&pageSize=${articlesPerPage}&q=${encodeURIComponent(searchQuery)}&apiKey=f330845e4e774ac9a206f58674b9e208`)
                setArticles(response.data.articles);
                console.log(response)
            } catch (error) {
              console.error('Error fetching the articles', error);
            }
        }
        fetchArticles()
    },[category,currentPage,searchQuery])
  return (
    <>
    <Navbar setCaterory={setCaterory} category={category} handleSearchChange={handleSearchChange}/> 
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-[3rem]'>
   {
    articles.length >0 ?(
    articles.map((news, index)=>{
        return(
            <>
            <NewItem key={index} title={news.title} description={news.description} img={news.urlToImage} url={news.url} />
            </>
        )
    })
  ):(
    <div className=''>
      <p className=" text-red-700 font-bold text-xl">This article is not available.</p>

    </div>
  )
   }
   </div>

   <div className='py-4'>
    <Paginations currentPage={currentPage} setCurrentPage={setCurrentPage } />
   </div>


    </>
    
  )
}

export default NewHome
