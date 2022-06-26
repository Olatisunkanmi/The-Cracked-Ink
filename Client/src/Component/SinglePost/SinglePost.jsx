import './SinglePost.css';
import { useAuth } from '../../Hooks/useAuth';
import   {EditOutlined } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
// import { Comment, MenuBook, Person, Timer } from '@material-ui/icons';

const SinglePost = () => {
  const {user } = useAuth()
  const PF =  "http://localhost:5000/images/";
  const [cat, setCats] =  useState([])
  const [updatemode, setUpdateMode ] =  useState(false)
  const [title, setTitle ] =  useState('')
  const [desc, setDesc ] =  useState('')
  // console.log(cat)

  useEffect(() => {
      const getCats = async () => {
           const res = await axios .get(`/posts`);
            console.log(res.data);

      }
      getCats()
  }, [])

   // getting the Id of the post
//    so all post and open on a new page in repect to their ids 
  const location = useLocation().pathname.split('/')[2]
  console.log(`${location} loca`);

  const lot = useLocation()
//   console.log(lot);
  const [post, setPost ] = useState ({})

  
  useEffect(() => {
      const getDetails = async () => {
          const res = await axios.get(`/posts/${location}`);    

          console.log(res.data);
          setPost(res.data);
          setTitle(res.data.title);
          setDesc(res.data.desc);
      };
      getDetails();  
  }, [location])


  const handleUpdate = async() => {
     try {
      const res = await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc
      })  
      setUpdateMode(false)
     } catch (error) {
      console.log(error);
     }
  }


  return (
    <> 
        <div className="flex flex-col">

                    
              <div className='text-center flex flex-col  items-center p-6 m-10'>
                          <img src={PF + post.photo} alt="" className='w-2/3
                           text-center justify-center align-center'/>
          
                          {updatemode 

                            ? <input type='text' value={title} className='' onChange={(e) => setTitle(e.target.value)}  />
                            : <p className='mt-5 p-3 text-5xl font-bold text-brightRed'> {title} </p>

                          }


                          <div className='mt-3 font-bold text-md'>
                                  <p className=''> {post.username}</p>
                                  <p className=''>
                                  {new Date(post.createdAt).toDateString() }</p> 
                                      
                                      
                                  {user && 
                                    <button className="widgetSmButton" onClick={() => setUpdateMode(true)}> 
                                    <EditOutlined />
                                    </button> }
                       </div>


              </div>

              <hr/>

                        <div className="text-left flex flex-col items-center p-6 m-5">       
                                      
                                       <div className='max-w-7xl leading-9 text-2xl'>
                                              {updatemode
                                                ? <textarea className='post--content' value={desc} onChange={(e) => setDesc(e.target.value)}  />

                                                :<p className='post--content'>  {desc }  </p>

                                              }

                                              {updatemode &&

                                                <button className='update--btn' onClick={handleUpdate}>
                                                      Update
                                                </button>
                                                
                                              }
                                       </div>
                        </div>

            <hr />

            <div className="flex flex-col flex-wrap font-bold ">
            
                  <div className='flex flex-col max-w-6xl items-center align-center text-left justify-start space-y-5 p-5'>
                            <div className=''>
                            <h3 className='post--comment--header'>Leave a Reply</h3>
                            <p>Your Email will not be published. Required Fields are marked <span> * </span></p>
                            </div>
                            
                            <div className='flex flex-col space-y-5 '>
                            <input type="text" id="" placeholder='Your Name' className='comment--name'/>
                            <input type="text" id="" placeholder='Your Email Address'   className='comment--email'/>
            
                            <textarea 
                            className='post--comment' 
                            name="" id="" cols="50"
                              rows="5" 
                              placeholder='Write A comment'>
                          
                            </textarea>
            
                                </div>
            
                          
            
                              <div>
                              <button className='m-5 p-3 font-bold bg-black text-white hover:bg-veryLightBrown hover:text-black'> 
                             Post Comment
                              </button>
                              </div>
                  </div>
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