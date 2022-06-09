import './SinglePost.css';
import  love from '../../Assests/love.jpg';
import { CardList } from '../Index';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
// import { Comment, MenuBook, Person, Timer } from '@material-ui/icons';

const SinglePost = () => {
//   const [cat, setCats] =  useState([])
//   console.log(cat)

//   useEffect(() => {
//       const getCats = async () => {
//            const res = await axios .get(`/posts`);
//             console.log(res.data);
//       }
//       getCats()
//   }, [])

   // getting the Id of the post
//    so all post and open on a new page in repect to their ids 
  const location = useLocation().pathname.split('/')[2]
  console.log(location);
  const [post, setPost ] = useState ({})

  
  useEffect(() => {
      const getDetails = async () => {
          const res = await axios.get(`/posts/${location}`);    

          console.log(res.data);
          setPost(res.data);
      };
      getDetails();  
  }, [location])


  return (
    <> 
        <div className="post--container">

                    
              <div className='img--tag--div'>
                  <img src={post.photo} alt="" className='post--img'/>
  
                   <p className='post--title'> {post.title} </p>
  
             
              </div>
            <hr />

            <div className="post--content-div">       
                            <div className='post--cat'>
                                    
                            </div>

            <div className='post--auth--date--com'>
            <p className='post--author'> {post.username}</p>
             <p className='post--date'>
             {new Date(post.createdAt).toDateString() }</p> 
                
              
            </div>

          
                    <p className='post--content'> 
                            {
                                // post.content
                            }
                    </p>
                    
            </div>

            <hr />

            <div className="post--comment--div">
                <h3 className='post--comment--header'>Leave a Reply</h3>
                <p>Your Email will not be published. Required Fields are marked <span> * </span></p>
                
                <div className='post--comment-input'>
                <input type="text" id="" placeholder='Your Name' className='comment--name'/>
                <input type="text" id="" placeholder='Your Email Address'   className='comment--email'/>
                    </div>

                <textarea className='post--comment' name="" id="" cols="50" rows="5" placeholder='Write A comment'>
                  
                </textarea>

                <button className='post--comment--btn'> Submit </button>
            </div>    
            
            {
            // <h3 className="Recent--posts"> Recent Post </h3>
            // <CardList />
            // <CardList />
            // <CardList />
}

        </div>
    </>
  )
}

export default SinglePost