import { CardList  } from "../Index"
import './FeaturedCard.css'

const FeaturedCard = ({posts}) => {
 
  console.log(posts);
  return (
    <>

    <h3 className="Featured--Articles"> Featured Articles </h3>
    
   <div className='container--FeaturedCard'>
        {
          posts.map ((cur) => (
          <CardList post= {cur} />   ))
        
        }
     
   

   </div>
    <button> Older Post </button>
    </>
   
 
  )
}

export default FeaturedCard