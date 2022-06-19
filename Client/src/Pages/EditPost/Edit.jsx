import './Edit.css';
import { Book, ExitToApp, Logout, NotificationImportantOutlined, Settings } from '@material-ui/icons';

const Edit = () => {
  return (
      <>
            <div className="topbar--container">
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
      </>
  )
}

export default Edit