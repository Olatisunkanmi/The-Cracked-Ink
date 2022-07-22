import { CardList  } from "../Index"
import './FeaturedCard.css'

const FeaturedCard = ({posts}) => {
 

  return (

    <div className="justify-center mt-20 flex flex-col items-left max-w-5xl m-auto "> 
             <h3 className="Featured--Articles font-bold text-brightRed"> Featured Articles </h3>
    

      <div className='flex flex-col md:flex md:flex-row space-x-10'>
              {
                posts.map ((cur) => (
                <CardList post= {cur} />   ))
              
              }
      </div>
         
         
          <div>
          <button className='m-5 p-3 font-bold bg-black text-white hover:bg-veryLightBrown hover:text-black'> 
          View Older Posts
          </button>
          </div>
   </div>
   
 
  )
}

export default FeaturedCard