 import { useAuth } from '../Hooks/useAuth';
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
  const [post, setPost ] = useState ({})
  const [comments, setComments] = useState([])
 let COMMENTERROR = false
  

  useEffect(() => {
      const getCats = async () => {
           const res = await axios .get(`/posts`);
            
      }
      getCats()
  }, [])


   // getting the Id of the post
//    so all post and open on a new page in repect to their ids 
  const location = useLocation().pathname.split('/')[2]


  const lot = useLocation()
  useEffect(() => {
      const getDetails = async () => {
          const res = await axios.get(`/posts/${location}`);    

          
          setPost(res.data);
          setTitle(res.data.title);
          setDesc(res.data.desc);
        setComments(res.data.comments);

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
     
     }
  }

  const postComment = async () => {
    const username =  document.querySelector('#username');
    const comment =  document.querySelector('#comment');

    if(username.value === "" || comment.value === "")
    COMMENTERROR = true;
       
      try {
        const res = await axios.put(`/comment/${location}`, {
          username: username.value,
        comment: comment.value
        })
        setComments(res.data.comments)

          try {
           username.value = " "
            comment.value = '';
          } catch (error) {
            
          }
        
      } catch (error) {
          console.log(error);
      }

      
  }
  return (
    <> 

    <div>
        
        
                            <div className='text-center flex flex-col  items-center p-6 m-10'>
                                        <img src={PF + post.photo} alt="" className='w-full md:w-2/4 
                                        text-center justify-center align-center object-cover'/>
                        '
                                        {updatemode 

                                          ? <input type='text' value={title} className='' onChange={(e) => setTitle(e.target.value)}  />
                                          : <p className='mt-1 p-3 text-3xl md:text-5xl font-bold text-brightRed'> {title} </p>

                                        }


                                                    <div className='mt-1 flex flex-row space-x-3 items-center font-bold text-veryLightBrown  sp'>
                                                            <p className='capitalize text-black text-lg' > {post.username}</p>
                                                            <p className=''>
                                                            {new Date(post.createdAt).toDateString() }</p> 
                                                                
                                                                
                                                            {user && 
                                                              <button className="widgetSmButton" onClick={() => setUpdateMode(true)}> 
                                                              <EditOutlined />
                                                              </button> }
                                                </div>

    <hr 
                className='w-1/2  mt-10 border-2 border-veryLightBrown'/>
                            </div>

          

                        <div className="text-left flex justify-center p-2 m-2 -mt-7">       
                                      
                                       <div className='w-full md:w-2/3 leading-9 text-1xl md:text-xl font-serif'>
                                              {updatemode
                                                ? <textarea className='w-full h-full' value={desc} onChange={(e) => setDesc(e.target.value)}  />

                                                :<p className='first-letter:ml-6 first-letter:text-4xl leading-loose'>  {desc }  </p>

                                              }

                                              {updatemode &&

                                                <button 
                                                className='p-3 font-bold  bg-black text-brightRed  
                                                hover:bg-veryLightBrown hover:text-black' 

                                                onClick={handleUpdate}>
                                                      Update
                                                </button>
                                                
                                              }
                                       </div>


                                      
                        </div>

            
              <hr 
                   className='w-1/2  my-10 border-2 border-veryLightBrown m-auto'/>  
                                              {/**Comment section */}

                 <div 
                   className='flex flex-col md:flex-row text-left w-3/5 m-auto mb-5 max-h-96' >
                                              
              

                                    <div 
                                      className='bg-stone-500 p-5 flex-wrap w-full md:w-2/6 space-y-2'>
                                              <h3 className='post--comment--header text-white font-bold'>Leave a Reply</h3>
                                              

                                                <form className='flex flex-col space-y-10 '>
                                                                    <input type="text" id="username" required placeholder='Your Name' className='
                                                                   bg-black
                                                                   p-3
                                                                   text-white
                                                                   placeholder:text-brightRed'/>

                                                                    <textarea 
                                                                    id="comment"
                                                                    className='bg-black p-2 
                                                                    text-white
                                                                    placeholder:text-brightRed' 
                                                                    required
                                                                    name=""
                                                                      placeholder='Write A comment'>
                                                                  
                                                                    </textarea>

                                                  
                                                                    <div>
                                                                      
                                                                    <button className='p-3 font-bold  bg-black text-brightRed  
                                                                    hover:bg-veryLightBrown hover:text-black'
                                                                      onClick={postComment}> 
                                                                    Post Comment
                                                                      </button>
                                                                    </div>
                                                        </form>
                               </div>


                               <div 
                                className='bg-stone-300 w-full p-5 md:w-4/6 '>
                                                <h3 
                                                className='text-brightRed font-bold text-xl font-mono'>Comments Sections</h3>

                                                <div 
                                                  className='mt-4 overflow-y-auto space-y-3 h-4/5'>

                                                         <div>
                                                         <p className='text-lg font-bold'> </p>

                                                         {
                                                          comments.map(cur => (
                                                            <p  
                                                              className='my-5 text-lg font-mono p-2 bg-white'>
                                                         
                                                              {cur }</p>
                                                          ))
                                                         }
                                                        

                                                         </div>
                                                </div>
                               </div>

              </div>
            
   </div>
    </>
  )
}

export default SinglePost