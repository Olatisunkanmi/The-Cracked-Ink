import './CardList.css';
import {Link } from "react-router-dom"
import gamble from "../../Assests/gamble.jpg";
 

const CardList = ({post} ) => {
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
                    <span> {post.categories}</span>
                    </div>
          </div>
    

          <span className="CardDesc">
              {post.desc}
          </span>
          <button className='cardBtn'> Read More </button>
      </div>

     
    </div>


    </>

  )
}

export default CardList