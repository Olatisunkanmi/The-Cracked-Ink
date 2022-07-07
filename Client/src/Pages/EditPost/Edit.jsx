import './EditAdmin.css'
import FeaturedPosts from '../../Component/FeaturedPosts/FeaturedPosts';
import FeaturedComments from '../../Component/FeaturedPosts/FeaturedComments';
import image from '../../Assests/write.svg';
import {useAuth} from '../../Hooks/useAuth';
import {Link, useLocation} from 'react-router-dom';
import {  ChromeReaderMode, Delete, EditOutlined,Add, Book, ExitToApp, GolfCourse, NotificationImportantOutlined, Settings } from '@material-ui/icons';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Edit = () => {
  const {user , dispatch  } = useAuth();
    const handleLogout = () => {
        if(user ) {
              dispatch({ type : "LOGOUT"})
        }
    }
  
    const [posts, setPosts] = useState([])

    useEffect( () => {
        const getData  = async () => {
           try {
          const  res = await axios.get('/posts')
         setPosts(res.data)
           } catch (error) {
                    console.log(error);
           }
        } 

getData()
}, [])




  return (
 
<div className="whale">
<div className="bar--container">
                      <div className="wrapper">
                            <div className="left--tp--div">
                                <Book className='book'/> 
                                  <p className='write'> Writer Control Panel</p>
                                  <input type="text"  
                                    placeholder='Display Name'
                                      className='p-3 mr-1'/>

                                    <button 
                                      className='p-2 bg-slate-600 text-white border-2 '>
                                      Update
                                    </button>
                                </div>

                          
                                  <div className="right--tp--div">
                                        <ul className="right--ul">

                                              <li className="right--item"> 
                                                  <img src="" alt="" />
                                              </li>
                                              <li className="right--item"> 
                                               <button className='tp--btn'>
                                               <NotificationImportantOutlined />
                                               </button>
                                              </li>


                                              <li className="right--item"> 
                                              <button className='tp--btn'>
                                              <Settings />
                                              </button>
                                              </li>

                                              
                                              <li className="right--item"> 
                                                <button className='tp--btn' onClick={handleLogout} > 
                                                <ExitToApp />
                                                </button>
                                                  
                                              </li>

                                        </ul>
                                  </div>
                      </div>
            </div>



            <div className="container bd">
                    <div className="bd-wrapper features">
                              <div className="card--div">
                                        <div className="svg-cs">  
                                              <img src={image} alt="" className='svg--img' />
                                        </div>
                                        <div className="welcome"> 
                                              <h3 className='wel--text'>Welcome Admin</h3>
                                              <p className='wel--para'>
                                              Have any ideas for a new article?
                                               If not, you should definitely check the feed for some inspiration. 
                                              </p>

                                                <div className='card--btn--div'>

                                                <Link to='/admin-login/edit/adminwrite'>
                                                   <button className='wel--btn'>
                                                          <Add /> <p className='btn--para'> New Article </p>
                                                      </button>
                                                </Link>
                                                     


                                                      <Link  to="/" className='link'>
                                                      <button className='wel--btn'>

                                                       <GolfCourse /> <p className='btn--para'> Go To Blog</p>
                                                       </button>
                                                       </Link>
                                                 
                                                </div>
                                        </div>
                              </div>




                                            <div className="count-div">
                                                      <h3 className='count-header'>Blog HightLights and Details  </h3>
                                                                  <div className="count--wrapper">
                                                                          <div className="card--counts"> 
                                                                                    <p className='details--head'> Articles</p>
                                                                                    <p className='count-para'> 20 </p>
                                                                              </div>

                                                                              <div className="card--counts"> 
                                                                               <p className='details--head'> comments</p>
                                                                              <p className='count-para'> 20 </p>
                                                                              </div>

                                                                              <div className="card--counts"> 
                                                                               <p className='details--head'> New Visits</p>

                                                                              <p className='count-para'> 20 </p>
                                                                              </div>

                                                                              <div className="card--counts"> 
                                                                               <p className='details--head'>  Email Subscription</p>

                                                                              <p className='count-para'> 20 </p>
                                                                              </div>
                                                                  </div>
                                            </div>
                    </div>
            </div>


            <div className="container">
            <div className="bd-wrapper features">

            <div className='featured--posts'>
            <p className='featured-header'>Featured Posts</p>
            <ul className="featured--post--ul">
                             {
                                                    posts.map (cur => (
                                                      <FeaturedPosts 
                                                      key={cur.title}
                                                      post={cur} />
                                                    ))
                                                  }
                              
                       
                                                  </ul>
        
        
        
    </div>  
                                <div className="featured--Comments">
                                <p className='comments-header'>Featured Comments</p>
                            <ul className="featured--post--ul">
                                    <li className='comment--items'>
                                     <FeaturedComments />
                                                   <div>
                                                                <button className="widgetSmButton">
                                                               
                                                                <ChromeReaderMode />
                                                                </button>
                                                    </div>
                                                    
                                          </li>
                                </ul>
                                </div>
            </div>
        </div>
           
 </div>


 
  )
}

export default Edit