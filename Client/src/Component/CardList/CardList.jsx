// import './CardList.css';
import {Link } from "react-router-dom"
import {CalendarTodayRounded }from'@material-ui/icons';

 

const CardList = ({post} ) => {
  const PF =  "http://localhost:5000/images/"    
  console.log(post);
  

  return (
    <div className='flex flex-col md:flex md:flex-row'>

                                  <div>
                                        <img 
                                        src={PF + post.photo} 
                                        alt="this is your picture"  
                                        className='' 
                                        width='50px'
                                        />
                                  </div>

                              <div className="">
                                          <span className="">
                                          <Link to={`/posts/${post._id}`}>
                                          {post.title}
                                          </Link>
                                          </span>


                                        
                                          <div className='flex items-center font-bold mb-10'>
                                          <CalendarTodayRounded />
                                          <span className="">{`${new Date(post.createdAt).toDateString()}.` }</span>

                                         </div>

                                      
                                          <p> {post.categories }</p>
                                          {
                                          // post.categories.map(c => (
                                          //   <span> {c.name}</span>
                                          // ))
                                          }
                                         
                                      


                                          <span className="">
                                          {post.desc}
                                          </span>


                                          <button className=''>
                                          <Link to={`/posts/${post._id}`}>
                                          Read More 
                                          </Link>
                                          </button>
                              </div>

     
    </div>
  )
}

export default CardList