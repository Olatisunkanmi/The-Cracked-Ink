import { Topbar, Header, Footer,  AllPostsCard} from "../Index";
import axios from "axios"
import { useEffect , useState } from "react";
import './Each.css'
import img from '../../Assests/pg.jpg'
import { ArrowRightAlt, CommentOutlined, FavoriteBorderOutlined, Share } from "@material-ui/icons";


const Posts = () => {
  const [posts, setPosts ] = useState([]);
    useEffect(() => {

    
      (async () => {
       const res = await axios.get("/posts " );
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