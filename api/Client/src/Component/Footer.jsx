import axios from 'axios';
import React from 'react';

      

const Footer = () => {

//   const handleSubcribe = async () => {
// const email = document.querySelector('#email');

//     console.log(email.value);
    
//       try {
//         const res = await axios.post('/subscribe', {
//           email: email.value,
//         }) 
        
//           }catch (error) {
//             console.log(error);
//       }

//     }

const handleSubcribe = () => {
  const email = document.querySelector('#email');
  console.log(email.value );
}

  return (
    <>
        <footer className='bg-veryDarkBlue text-white'>

        <div  
         className="container p-1 -space-x-10 mx-auto flex flex-col  items-center justify-around md:flex md:flex-row">
            
                                <div className="m-5  text-l">
                                    <h4 className=''>Subscribe Via Email.</h4>

                                    <p className=''>Receive notifications of new posts.</p>

                                    <form className='flex flex-col font-left mt-2'>
                                                <input 
                                                type="text" 
                                                id="email"
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                class="text-black p-3 flex-1 px-5 rounded-full focus:outline-none 
                                                  placeholder:text-black placeholder:italic" 
                                                placeholder="Enter Your mail"
                                                  required/>

                                                <div class="flex mt-3 justify-center md:justify-start font-bold"> 
                                                <button
                                                href="#" 
                                                className="p-3 px-6 pt-2 text-black bg-brightRed rounded-full baseline
                                                  hover:bg-white hover:text-black" 
                                                    onClick={handleSubcribe}>
                                                    Subscribe 
                                                </button>
                                            </div>
                                    </form>


                                </div>



                    <div className='space-y-0.5'>
                            <p className='text-lg font-bold'> Cracked Inc.</p>
                        <p className='font-bold'>  
                          <span className='text-lg'>&copy;</span>
                          2022 | All Rights Reserved.</p>
                    </div>
                        
        </div>

    </footer>
    </>
  )
}

export default Footer