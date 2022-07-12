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
       console.log(res.data);
      })
      
      ();

    }, [])
    
  
  return (
    <div>
        <Header />
        <Topbar  /> 

        <AllPostsCard posts={posts} /> 
        <Footer /> 
    </div>
  )
}

export default Posts