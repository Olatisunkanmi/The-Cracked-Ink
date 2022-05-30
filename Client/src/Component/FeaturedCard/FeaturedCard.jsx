import { CardList  } from "../Index"
import './FeaturedCard.css'

const FeaturedCard = () => {
  return (
    <>

    <h3 className="Featured--Articles"> Featured Articles </h3>

   <div className='container--FeaturedCard'>
    
     <CardList/ >
     <CardList />
     <CardList />
    
    <button> Older Post </button>

   </div>
    </>
   
 
  )
}

export default FeaturedCard