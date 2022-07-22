import { Topbar, Header, Footer,  AllPostsCard} from "../Index";
import {AxiosInstance} from "axios"
import { useEffect , useState } from "react";



const Posts = () => {
  const [posts, setPosts ] = useState([]);
    useEffect(() => {

    
      (async () => {
       const res = await AxiosInstance.get("/posts " );
       setPosts(res.data);
       
      })
      
      ();

    }, [])
    
  
  return (
    <div  >
        <Header />
        <Topbar  /> 

        {
          posts.map((cur ) => (
            <AllPostsCard 
            
            key={cur.title}
            post={cur} />
          ))
        }
        <Footer /> 
    </div>
  )
}

export default Posts