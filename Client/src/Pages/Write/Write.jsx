import { useLocation } from "react-router-dom";
import "./Write.css";
import axios from axios

export default function Write( ) {
    const location =  useLocation();
    const state =  location.state

    if (  !state){
        console.log('State is null');

    }else {
        
    }


   const UpdatePost =  async () => {
            const res = await axios.put(`/posts/${id}`)
   }


  return (

    <div className="write">
      <img
        className="writeImg"
        src=""
        alt=""   />


            <form className="writeForm">
                <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input id="fileInput" type="file" style={{ display: "none" }} />
                <input
                    className="writeInput"
                    placeholder="Title"
                    type="text"
                    autoFocus={true}
                />
                </div>
                <div className="writeFormGroup">
                <textarea
                    className="writeInput writeText"
                    placeholder="Tell your story..."
                    type="text"
                    autoFocus={true}
                />
                </div>

              { state
                
                ? <button className="writeSubmit" type="submit" onClick={UpdatePost}> Edit </button>
                :<button className="writeSubmit" type="submit" onClick={PublishPost}> Publish </button>
            
            }
            </form>



    </div>
  );
}
