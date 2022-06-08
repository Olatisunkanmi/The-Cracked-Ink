import {React}  from 'react';

import './FirstCard.css';
import gamble from "../../Assests/sea.jpg";
import { useState } from 'react';
import { useEffect } from 'react';



const FirstCard = ({post}) => {
      // Send only last item to array to first card.

        console.log(post);
  return (
    <div className='FirstCard--container'>


        <div className=''>
            <img src={gamble}
            alt="image-Post"  className='FirstCard--img'/>
            
                    <div className="FirstCard--att--div">

                        <div className='FirstCard--date--cat'>
                        <span className="FirstCard--date">Sept. 3 2019</span>

                              <div className='FirstCard--cat'>
                              </div>
                        </div>
                    <span className="FirstCard--title">The Old Man and The Sea</span>

                    <span className="FirstCard--desc">
                        When life dumps upon you pieces but steady fucks, how strognly
                        can your Chi fight? How Steady can your hold the reins of your life's ships in the Ocean of Mother Nature's,
                        when we attacks with all that she has. All against you. But you are not alone  

                    </span>
                    <button className='FirstCard--btn'> Read More </button>


                    </div>

            
           
        </div>

    </div>
  )
}

export default FirstCard