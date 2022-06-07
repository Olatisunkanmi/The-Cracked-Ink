import './SinglePost.css';
import  love from '../../Assests/love.jpg';
import { CardList } from '../Index';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
// import { Comment, MenuBook, Person, Timer } from '@material-ui/icons';

const SinglePost = () => {
  
  // getting the Id of the post
  const location = useLocation().pathname.split('/')[2]
  console.log(location);
  const [post, setPost ] = useState ({})

  useEffect(() => {
      const getDetails = async () => {
          const res = await axios.get(`/posts/${location}`);    

          console.log(res.data);
          setPost(res.data);
      };
      getDetails();  
  }, [location])


  return (
    <> 
        <div className="post--container">

                    
              <div className='img--tag--div'>
                  <img src={post.photo} alt="" className='post--img'/>
  
                   <p className='post--title'> {post.title} </p>
  
             
              </div>
            <hr />

            <div className="post--content-div">

                
               
            <div className='post--cat'>
           <p> {post.categories} </p>
            </div>

            <div className='post--auth--date--com'>
            <p className='post--author'> {post.username}</p>
             <p className='post--date'>
             {new Date(post.createdAt).toDateString() }</p> 
                
              
            </div>

          
                    <p className='post--content'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra turpis dolor, sit amet venenatis massa scelerisque ut. Quisque ac dui id ex tristique accumsan nec non nulla. Ut porta blandit nunc, vel sollicitudin nibh mattis non. Morbi luctus bibendum varius. Proin ac lorem ut orci vulputate consectetur. Fusce in malesuada nibh. Sed neque ex, viverra ac euismod eu, semper id erat. Quisque facilisis turpis ut ante porta rhoncus. Vivamus dictum eu lorem ullamcorper suscipit. Aliquam iaculis, turpis ac rutrum ornare, justo urna ullamcorper purus, a dignissim sapien enim a sem. Ut fringilla metus sit amet felis porttitor fermentum. <br /> <br />
                    Phasellus scelerisque, augue ac tempus aliquet, lacus arcu ultrices tellus, eget tristique eros mauris non erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula metus, pellentesque eget libero nec, volutpat sollicitudin mi. Praesent sed est sagittis, auctor nulla et, convallis lectus. Etiam aliquam imperdiet mattis. Suspendisse venenatis, nisi eu rhoncus fermentum, diam leo suscipit augue, ut sodales dolor felis nec est. Mauris elementum eleifend laoreet. Pellentesque accumsan leo non est mattis, sed tincidunt eros iaculis. Phasellus vel consequat nibh. In facilisis feugiat lobortis. Fusce feugiat efficitur dolor eu accumsan. Donec fringilla augue sed justo lobortis, ac efficitur felis egestas. Suspendisse ex augue, sagittis non feugiat ac, gravida vitae massa. Ut hendrerit lorem nec sapien vestibulum, vel aliquam lectus lobortis. Fusce in risus enim. Cras at risus ut elit faucibus condimentum.

                    Integer eu odio tellus. Proin et gravida dolor, sed ultricies arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas at ligula ante. Duis at ex gravida, condimentum risus non, pretium turpis. Morbi sollicitudin dui id scelerisque accumsan. Etiam auctor quam elementum orci sodales aliquet. Morbi quis aliquam neque. Cras dapibus vehicula vulputate. Pellentesque eget est sit amet quam malesuada mattis quis non risus.

                    Vivamus sem ante, luctus id ipsum id, sollicitudin feugiat eros. Nulla commodo auctor ex, eleifend egestas nulla imperdiet in. Vestibulum sit amet dui non mi scelerisque congue. Vivamus tempus dignissim ipsum sed consequat. Pellentesque fringilla sit amet eros quis tristique. Cras finibus malesuada nibh id tempor. Vestibulum non erat eu turpis blandit placerat. Ut sollicitudin auctor tortor a viverra. Praesent vulputate nisi id leo rutrum, id elementum eros tristique. Nullam arcu ante, dapibus ut semper sollicitudin, pretium a purus. Donec condimentum posuere interdum. Sed laoreet ante eu est faucibus, id placerat massa tempus. Quisque maximus leo eu ex ullamcorper, vitae blandit nisl vulputate. Proin egestas elit sit amet enim convallis dapibus ut ac ligula. Donec pulvinar purus non justo auctor, in scelerisque nibh lacinia. Maecenas eu justo non erat placerat pharetra.
                   

                    </p>
                    
            </div>

            <hr />

            <div className="post--comment--div">
                <h3 className='post--comment--header'>Leave a Reply</h3>
                <p>Your Email will not be published. Required Fields are marked <span> * </span></p>
                
                <div className='post--comment-input'>
                <input type="text" id="" placeholder='Your Name' className='comment--name'/>
                <input type="text" id="" placeholder='Your Email Address'   className='comment--email'/>
                    </div>

                <textarea className='post--comment' name="" id="" cols="50" rows="5" placeholder='Write A comment'>
                  
                </textarea>

                <button className='post--comment--btn'> Submit </button>
            </div>    
            
            {
            // <h3 className="Recent--posts"> Recent Post </h3>
            // <CardList />
            // <CardList />
            // <CardList />
}

        </div>
    </>
  )
}

export default SinglePost