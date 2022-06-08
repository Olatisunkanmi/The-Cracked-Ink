import './CardList.css';
import {Link } from "react-router-dom"
import gamble from "../../Assests/gamble.jpg";
 

const CardList = ({post} ) => {
    console.log(post);
  return (
      <>
      
    <div className='CardList'>
  <img src={post.photo} alt="this is your picture"  className='CardImg'/>

      <div className="CardInfo">
           <span className="CardTitle">
              <Link to={`/posts/${post._id}`}>
                      {post.title}
              </Link>
             
           </span>
          <div className='CardList--date--cat'>
          <span className="CardDate">{new Date(post.createdAt).toDateString() }</span>

                    <div className="CardCat">
                          <p> {post.categories }</p>
                          {
                            // post.categories.map(c => (
                            //   <span> {c.name}</span>
                            // ))
                          }
                    </div>
          </div>
    

          <span className="CardDesc">
              {post.desc}
          </span>
          <button className='cardBtn'>
          <Link to={`/posts/${post._id}`}>
          Read More 
                  </Link>
          </button>
      </div>

     
    </div>


    </>

  )
}

export default CardList