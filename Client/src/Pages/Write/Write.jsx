import { useLocation , useNavigate } from "react-router-dom";
import upload  from '../../Assests/upload.svg'
import "./Write.css";
import { useAuth } from "../../Hooks/useAuth";
import axios from "axios";
import { useState } from "react";

export default function Write( ) {
  let navigate =  useNavigate()
  const { user } = useAuth();
  const [title, setTitle]  = useState(" ")
  const [desc, setDesc]  = useState(" ")
  const [file, setFile]  = useState(null)

const HandleSubmit = async (e) => {
  e.preventDefault();

  const newPost = {
    username: user.username,
    title,
    desc,
    
  };

  if(file){
    const data = FormData();

    // prevent user from uploading diffrent images with same name 
    const filename = Date.now + file.name;
    data.append("name", filename);
    data.append("file", filename);
    newPost.photo = filename;

        try {
              // upload Image
              await axios.post("/upload", data)
        } catch (error) {
              console.log(error);
        }
  }
        try {
          const res = axios.post(`/posts`)
            navigate(`/posts/${res.data._id}`)
        } catch (error) {

        }

}
   
    //  const [newContent, SetNewContent] = useState(`${content}`)
   const PublishPost =   () => {
        // const res =  await axios.post(`/posts/`)

        console.log('object');
   }

  return (

    <div className="write">

     {
      file 
      ?  <img  className="writeImg"  src={URL.createObjectURL(file)}  alt=""   />

      : <img src={upload} className="writeImg" alt=""/>
     }


            <form className="writeForm" onSubmit={HandleSubmit}>
                <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                
                
                <input id="fileInput" type="file" style={{ display: "none" }}  onChange={(e) => setFile(e.target.files[0])}/>
                <input
                    className="writeInput"
                    placeholder="Title"
                    type="text"
                    autoFocus={true}
                />
                </div>
                <div className="writeFormGroup">
              

              <textarea className="writeInput writeText" placeholder="Tell your story..." type="text" autoFocus={true} />

                


                </div>

                <button className="writeSubmit" type="submit"  onClick={PublishPost}> Publish </button>
            
            
            </form>



    </div>
  );
}
