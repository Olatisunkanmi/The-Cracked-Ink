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

    <div>
        <div className="flex flex-col justify-around m-10">

                    
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

                        <div className="text-left flex flex-col items-center p-6 m-5 bg-">       
                                      
                                       <div className='w-1/2 leading-9 text-2xl '>
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
            </div>
                                              {/**Comment section */}

                 <div 
                   className='flex flex-col md:flex-row text-left w-3/5 m-auto mb-5' >
                                              

                                    <div 
                                      className='bg-stone-500 p-5 flex-wrap w-2/6 space-y-2'>
                                              <h3 className='post--comment--header text-brightRed font-bold'>Leave a Reply</h3>
                                                <p
                                                  className='text-sm text-white text-thin '>Your Email will not be published. Required Fields are marked <span> * </span></p>


                                                <div className='flex flex-col space-y-5 '>
                                                                    <input type="text" id="" placeholder='Your Name' className='
                                                                   bg-black
                                                                   p-3
                                                                   text-white
                                                                   placeholder:text-brightRed'/>


                                                                    <input type="text" id="" placeholder='Your Email Address'   
                                                                    className='
                                                                   bg-black
                                                                   p-3
                                                                   text-white
                                                                   placeholder:text-brightRed
                                                                    '/>

                                                                    <textarea 
                                                                    className='bg-black p-2 
                                                                    text-white
                                                                    placeholder:text-brightRed' 

                                                                    name="" id="" 
                                                                      placeholder='Write A comment'>
                                                                  
                                                                    </textarea>

                                                                      

                                                                  

                                                                    <div>
                                                                      
                                                                    <button className='p-3 font-bold  bg-black text-brightRed  
                                                                    hover:bg-veryLightBrown hover:text-black'> 
                                                                    Post Comment
                                                                      </button>
                                                                    </div>
                                                        </div>
                               </div>


                               <div 
                                className='bg-stone-300 p-5 w-4/6 '>
                                                <h3 
                                                className='text-brightRed font-bold text-xl font-mono'>Comments Sections</h3>

                                                <div 
                                                  className='mt-4 overflow-y-auto space-y-3 h-4/5'>

                                                         <div>
                                                         <p className='text-lg font-bold'> Username</p>
                                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa doloremque placeat explicabo excepturi commodi vitae libero porro! Ipsum ratione ex cumque fugit a aperiam, repellat dolore accusamus! Veritatis, saepe laboriosam!</p>
                                                         </div>


                                                         
                                                         <div> 
                                                         <p className='text-lg font-bold'> Username</p>
                                                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa doloremque placeat explicabo excepturi commodi vitae libero porro! Ipsum ratione ex cumque fugit a aperiam, repellat dolore accusamus! Veritatis, saepe laboriosam!</p>
                                                         </div>


                                                         <div> 
                                                         <p className='text-lg font-bold'> Username</p>
                                                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa doloremque placeat explicabo excepturi commodi vitae libero porro! Ipsum ratione ex cumque fugit a aperiam, repellat dolore accusamus! Veritatis, saepe laboriosam!</p>
                                                         </div>
                                                          
                                                         <div> 
                                                         <p className='text-lg font-bold'> Username</p>
                                                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa doloremque placeat explicabo excepturi commodi vitae libero porro! Ipsum ratione ex cumque fugit a aperiam, repellat dolore accusamus! Veritatis, saepe laboriosam!</p>
                                                         </div>
                                                          
                                                          
                                                </div>
                               </div>

              </div>
            
   </div>
    </>
  )
}

export default SinglePost