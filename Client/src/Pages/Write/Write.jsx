import { Topbar, FeaturedCard, Header, Footer, FirstCard } from "../../Component/Index"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"



export default function Write () {
  const [posts, setPosts ] = useState([]);

  useEffect(() => {
      const fetchPosts =  async () => {
           try {
              const res = await axios.get('http://localhost:5000/api/posts');
                        console.log(res.data);

                        // setting post to the newdata received from the /api
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
    <FirstCard posts={posts}/>
    <FeaturedCard />
    <Footer /> 

        </div>
  )
}

