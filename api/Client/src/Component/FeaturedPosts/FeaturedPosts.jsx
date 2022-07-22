import React from 'react';
import axios from 'axios';
import './FeaturedComments.jsx';
import {Link } from 'react-router-dom'
import {  ChromeReaderMode, Delete, EditOutlined } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';



const FeaturedPosts = ({post}) => {
    const navigate = useNavigate();
    console.log(post);
const id =   post._id
    const DeletePost = async() => {
            try {
                const res = await axios.delete(`/posts/${id}`)
            } catch (error) {
                    console.log(error);
            }
    }


    const EditPost =  ( ) => {
        // console.log(id);
        // navigate('/admin-login/edit/adminwrite', {state: {post}   }   )
   }
     
  return (
    <>
  
    
           
                    <li className='posts--items'>
                          <p>{post.title} </p>
                    <div>
                                   
                                    <button className="widgetSmButton">
                                    <EditOutlined />
                                    </button>
                                
                                    <button className="widgetSmButton" onClick={DeletePost}>
                                    <Delete />
                                    </button>
                                    </div>
                                    
                          </li>
             
                  
           
 
                     
    </>
  )
}

export default FeaturedPosts;