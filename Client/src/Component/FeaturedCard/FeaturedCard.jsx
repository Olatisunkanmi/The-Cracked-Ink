import { CardList  } from "../Index"
import './FeaturedCard.css'

const FeaturedCard = ({posts}) => {
  return (
    <>

    <h3 className="Featured--Articles"> Featured Articles </h3>
    
   <div className='container--FeaturedCard'>
        {posts.map ((cur) => (
          <CardList post= {cur} />
        
  ))}
     
    <button> Older Post </button>

   </div>
    </>
   
 
  )
}

export default FeaturedCard