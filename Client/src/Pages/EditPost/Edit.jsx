import './Edit.css';
import { Facebook, NotificationImportantOutlined } from '@material-ui/icons';

const Edit = () => {
  return (
      <>
            <div className="topar--container">
                    <div className="left--tp--div"> Writer Control Panel</div>
                    <div className="right--tp--div">
                          <ul className="right--ul">

                                <li className="right--item"> 
                                    <img src="" alt="" />
                                </li>
                                <li className="right--item"> 
                                      <Facebook />
                                </li>

                          </ul>
                    </div>
            </div>
      </>
  )
}

export default Edit