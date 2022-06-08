import { Topbar, FeaturedCard, Header, Footer, FirstCard } from "../../Component/Index"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom";



export default function CreativeWrite () {
  const [posts, setPosts ] = useState([]);
const [newPost, setNewPosts ] =  useState([])

  useEffect(() => {
      const fetchPosts =  async () => {
           try {
              const res = await axios.get('/posts');
                        console.log(res.data);

              // getting the last post to send to <FeaturedPost />
              const newPost =  res.data[res.data.length - 1]

              console.log(newPost);

            // setting post to the newdata received from the /api
            const RandomPost =  
            setPosts(res.data)
           } catch (error) {
              console.log(error);
           }
      }

      fetchPosts()
  }, [])



  return (
        <div>

    <Header />
    <Topbar  /> 
    <FirstCard posts={newPost}/>
    <FeaturedCard posts={posts}/>
    <Footer /> 

        </div>
  )
}

