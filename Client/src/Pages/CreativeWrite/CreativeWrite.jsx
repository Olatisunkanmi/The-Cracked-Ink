import { Topbar, FeaturedCard, Header, Footer, FirstCard } from "../../Component/Index"
import { useEffect } from "react"
import axios from "axios";
import { useState } from "react"


// If page is yet to return render loading

export default function CreativeWrite () {
  const [posts, setPosts ] = useState([]);
const [newPost, setNewPosts ] =  useState([])



  useEffect(() => {
      const fetchPosts =  async () => {
              
                try {
              const res = await axios.get("/posts" );
                  console.log(res);
                                      try {
 
                                        let   newArr =  res.data;
                                        // A function to randomly select three posts for the cardlists
                                        
                                        const chooseRandom = (arr, num = 1) => {
                                          const res = [];
                                          for(let i = 0; i < num; ){
                                            const random = Math.floor(Math.random() * arr.length);
                                            if(res.indexOf(arr[random]) !== -1){
                                                continue;
                                            };
                                            res.push(arr[random]);
                                            i++;
                                          };
                                          return res;
                                      };
                                    
                                      setPosts(chooseRandom(newArr, 3));
                                      } catch (error) {
                                             
                                      }
                          try {
                                // getting the last post to send to <FirstCard />
                                 // finding the last post of the array
              const newPost =  res.data[res.data.length - 1];
                              // console.log(newPost);
                              setNewPosts(newPost)
                          } catch (error) {
                              console.log(error);
                          }
            // setting post to the newdata received from the /api
           
        
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
    <FirstCard newPost={newPost}/>
    <FeaturedCard posts={posts}/>
    <Footer /> 

        </div>
  )
}

