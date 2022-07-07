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
  const [post, setPost ] = useState ({})


  // console.log(cat)

  useEffect(() => {
      const getCats = async () => {
           const res = await axios .get(`/posts`);
            // console.log(res.data);
      }
      getCats()
  }, [])


   // getting the Id of the post
//    so all post and open on a new page in repect to their ids 
  const location = useLocation().pathname.split('/')[2]
  // console.log(`${location} loca`);

  const lot = useLocation()
//   console.log(lot);

  
  useEffect(() => {
      const getDetails = async () => {
          const res = await axios.get(`/posts/${location}`);    

          // console.log(res.data);
          setPost(res.data);
          setTitle(res.data.title);
          setDesc(res.data.desc);
      };
      getDetails();  
  }, [location])

  console.log(post);

  const handleUpdate = async() => {
     try {
      const res = await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc
      })  
      setUpdateMode(false)

     } catch (error) {
      // console.log(error);
     }
  }

  const postComment = async () => {
    const username =  document.querySelector('#username');
    const mail =  document.querySelector('#email');
    const comment =  document.querySelector('#comment');
        console.log(username.value);
      console.log(location);


      try {
        const res = await axios.put(`/comment/${location}`, {
          username: username.value,
        email: mail.value,
        comment: comment.value
        })
        // setPost(res.data)
        
      } catch (error) {
          console.log(error);
      }
  }

  // useEffect(() => {
  //     const UpdateComments = 
  
  //   return () => {
  //     second
  //   }
  // }, [])
  
  


  return (
    <> 

    <div>
        
        
                            <div className='text-center flex flex-col  items-center p-6 m-10'>
                                        <img src={PF + post.photo} alt="" className='w-full md:w-2/3
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
                   className='flex flex-col md:flex-row text-left w-3/5 m-auto mb-5' >
                                              
              

                                    <div 
                                      className='bg-stone-500 p-5 flex-wrap w-full md:w-2/6 space-y-2'>
                                              <h3 className='post--comment--header text-brightRed font-bold'>Leave a Reply</h3>
                                                <p
                                                  className='text-sm text-white text-thin '>Your Email will not be published. Required Fields are marked <span> * </span></p>


                                                <div className='flex flex-col space-y-5 '>
                                                                    <input type="text" id="username" placeholder='Your Name' className='
                                                                   bg-black
                                                                   p-3
                                                                   text-white
                                                                   placeholder:text-brightRed'/>


                                                                    <input type="text" id="email" placeholder='Your Email Address'   
                                                                    className='
                                                                   bg-black
                                                                   p-3
                                                                   text-white
                                                                   placeholder:text-brightRed
                                                                    '/>

                                                                    <textarea 
                                                                    id="comment"
                                                                    className='bg-black p-2 
                                                                    text-white
                                                                    placeholder:text-brightRed' 

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
                                                        </div>
                               </div>


                               <div 
                                className='bg-stone-300 w-full p-5 md:w-4/6 '>
                                                <h3 
                                                className='text-brightRed font-bold text-xl font-mono'>Comments Sections</h3>

                                                <div 
                                                  className='mt-4 overflow-y-auto space-y-3 h-4/5'>

                                                         <div>
                                                         <p className='text-lg font-bold'> Username</p>
                                                       
                                                         </div>
                                                </div>
                               </div>

              </div>
            
   </div>
    </>
  )
}

export default SinglePost