import { Topbar, FeaturedCard, Header, Footer, FirstCard } from "../../Component/Index"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"



export default function Write () {
  const [post, setPosts ] = useState([]);

  useEffect(() => {
      const fetchPosts =  async () => {
           try {

              const response = await axios.get('http://localhost:5000/api/posts');
                        console.log(response);
           } catch (error) {
              console.log(error);
           }
      }

      fetchPosts()
  }, [])

  return (
        <div>

    <Header />
    <Topbar /> 
    <FirstCard />
    <FeaturedCard />
    <Footer /> 

        </div>
  )
}

