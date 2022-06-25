import { CardList  } from "../Index"
import './FeaturedCard.css'

const FeaturedCard = ({posts}) => {
 
  console.log(posts);
  return (
    <div className="mt-2"> 

    <h3 className="Featured--Articles text-veryLightBrown font-bold"> Featured Articles </h3>
    
   <div className='container--FeaturedCard'>
        {
          posts.map ((cur) => (
          <CardList post= {cur} />   ))
        
        }
     
   
        <button className='m-5 p-3 font-bold bg-black text-white hover:bg-veryLightBrown hover:text-black'> 
      Older Posts 
      </button>

   </div>



    </div>
   
 
  )
}

export default FeaturedCard