
import './Topbar.css';
// import {  NightsStay } from '@material-ui/icons';

const Topbar = () => {
  return (
        <>
        
            <div className="top">
                    <div className="top--Left">Igbasan Olasunkanmi</div>

                    <div className="top--Center">
                        <ul className="top--center-ul">
                              <li className="top--center-list">Home</li>
                              <li className="top--center-list">Read-Ups</li>
                              <li className="top--center-list">Poems</li>
                              <li className="top--center-list">Books</li>
                              <li className="top--center-list">About</li>
                        </ul>
                    </div>



                    <div className="top--Right">
                        <ul className="top--Right-ul">
                            <li className="top--Right-list"> Login </li>
                            <li className="top--Right-list"> Read Technical Articles  </li>
                        </ul>
                    </div>
            </div>
        </>
       
  

    
   
  )
}

export default Topbar;