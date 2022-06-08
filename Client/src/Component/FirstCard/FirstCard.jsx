import {React}  from 'react';

import './FirstCard.css';
import gamble from "../../Assests/sea.jpg";
import { useState } from 'react';
import { useEffect } from 'react';



const FirstCard = ({newPost}) => {
      // Send only last item to array to first card.

        console.log(newPost);
  return (
    <div className='FirstCard--container'>


        <div className=''>
            <img src={newPost.photo}
            alt="image-Post"  className='FirstCard--img'/>
            
                    <div className="FirstCard--att--div">

                        <div className='FirstCard--date--cat'>
                        <span className="FirstCard--date">{new Date(newPost.createdAt).toDateString() }</span>

                              <div className='FirstCard--cat'>
                              </div>
                        </div>
                    <span className="FirstCard--title">{newPost.title}</span>

                    <span className="FirstCard--desc">
                          {newPost.desc}

                    </span>
                    <button className='FirstCard--btn'> Read More </button>


                    </div>

            
           
        </div>

    </div>
  )
}

export default FirstCard