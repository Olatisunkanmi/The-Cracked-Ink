import {Link } from "react-router-dom";
import {  CalendarTodayRounded} from  '@material-ui/icons'
import './FirstCard.css';


const FirstCard = ({newPost}) => {
      const PF =  "http://localhost:5000/images/";
      // Send only last item to array to first card.

        // console.log(newPost);
  return (
    <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>


        <div className='text-xl font-bold text-center flex flex-col  items-center p-6 m-10 -mt-9 -mb-2'>
            <img src={PF + newPost.photo}
            alt="image"  
            className='rounded'
            width='850px'/>

      </div>


            
                    <div className="flex flex-col items-center">

                                          <div className='flex items-center font-bold mb-10'>
                                                <CalendarTodayRounded />
                                                <span className="">{`${new Date(newPost.createdAt).toDateString()}.` }</span>

                                          </div>


                                    <span className="FirstCard--title">{newPost.title}</span>

                                    <span className="FirstCard--desc">
                                          {newPost.desc}
                                    </span>
                                    <button className='m-5 p-3 font-bold bg-black text-white hover:bg-veryLightBrown hover:text-black'> 
                                                <Link to={`/posts/${newPost._id}`}>
                                                Read More 
                                                </Link>
                                    </button>
                    </div>

    </div>
  )
}

export default FirstCard