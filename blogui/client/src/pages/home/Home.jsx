import './home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import Footer from '../footer/Footer';

export default function Home() {
    const [posts,setPosts]= useState([]);
    const { search } = useLocation();

    useEffect(()=>{
        const fatchPosts = async ()=>{
            const res = await axios.get("/posts" + search);
            setPosts(res.data)            
        }
        fatchPosts()
    },[search])
    return (
        <>
        <Header/>
        <div className='home'>
            <Posts posts={posts}/>    
                  
            
        </div>
        <Footer/>
        </>
    )
}
 