import './EditAdmin.css'
import image from '../../Assests/write.svg'
import { Add, Book, ChromeReaderMode, Delete, EditOutlined, ExitToApp, GolfCourse, NotificationImportantOutlined, Settings } from '@material-ui/icons';

const Edit = () => {
  return (
      <>
<div className="whale">
<div className="bar--container">
                      <div className="wrapper">
                            <div className="left--tp--div">
                                <Book className='book'/> 
                                  <p className='write'> Writer Control Panel</p>
                                </div>

                          
                                  <div className="right--tp--div">
                                        <ul className="right--ul">

                                              <li className="right--item"> 
                                                  <img src="" alt="" />
                                              </li>
                                              <li className="right--item"> 
                                                  <NotificationImportantOutlined />
                                              </li>
                                              <li className="right--item"> 
                                                  <Settings />
                                              </li>
                                              <li className="right--item"> 
                                                  <ExitToApp />
                                                  
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
                                                        <button className='wel--btn'>
                                                          <Add /> <p className='btn--para'> New Article </p>
                                                      </button>

                                                      <button className='wel--btn'>
                                                          <GolfCourse /> <p className='btn--para'> Go To Blog</p>
                                                      </button>
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
                                                          <li className='posts--items'>
                                                              <p> How I met Your Mother </p>
                                                                        <div>
                                                                          <button className="widgetSmButton">
                                                                                      <EditOutlined />
                                                                                      </button>
                                                                                      
                                                                                      <button className="widgetSmButton">
                                                                                      <Delete />
                                                                                      </button>
                                                                          </div>
                                                                          
                                                                </li>
                                                          <li className='posts--items'>
                                                              <p> How I met Your Mother </p>
                                                                        <div>
                                                                          <button className="widgetSmButton">
                                                                                      <EditOutlined />
                                                                                      </button>
                                                                                      
                                                                                      <button className="widgetSmButton">
                                                                                      <Delete />
                                                                                      </button>
                                                                          </div>
                                                                          
                                                                </li>
                                                          <li className='posts--items'>
                                                              <p> How I met Your Mother </p>
                                                                        <div>
                                                                          <button className="widgetSmButton">
                                                                                      <EditOutlined />
                                                                                      </button>
                                                                                      
                                                                                      <button className="widgetSmButton">
                                                                                      <Delete />
                                                                                      </button>
                                                                          </div>
                                                                          
                                                                </li>
                                                          <li className='posts--items'>
                                                              <p> How I met Your Mother </p>
                                                                        <div>
                                                                          <button className="widgetSmButton">
                                                                                      <EditOutlined />
                                                                                      </button>
                                                                                      
                                                                                      <button className="widgetSmButton">
                                                                                      <Delete />
                                                                                      </button>
                                                                          </div>
                                                                          
                                                                </li>
                                                        
                                                      </ul>
                                          </div>
                                 




                                          
                                          <div className="featured--Comments">
                                          <p className='comments-header'>Featured Comments</p>
                                      <ul className="featured--post--ul">
                                              <li className='comment--items'>
                                                  <p> 
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vitae praesentium aliquid. Quisquam et tempore qui natus quam praesentium facilis ex laborum, recusandae sequi inventore non aliquid optio voluptatem ipsum.
                                                  </p>
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


      </>
  )
}

export default Edit