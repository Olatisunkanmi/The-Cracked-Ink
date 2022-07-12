import React from 'react';
import { GitHub, Instagram, LinkedIn, Mail, Phone, Twitter } from '@material-ui/icons';

const Footer = () => {
  return (
    <>
        <footer className='bg-veryLightBrown'>

        <div  
         className="container p-1 -space-x-10 mx-auto flex flex-col  items-center justify-around md:flex md:flex-row">
            
                                <div className="m-5 font-bold text-l">
                                    <h4 className=''>Subscribe Via Email.</h4>

                                    <p className=''>Receive notifications of new posts.</p>

                                    <div className='flex flex-col font-left mt-2'>
                                                <input 
                                                type="text" 
                                                class="flex-1 px-5 rounded-full focus:outline-none" 
                                                placeholder="Enter Your mail"/>

                                                <div class="flex mt-3 justify-center md:justify-start"> 
                                                <a 
                                                href="#" 
                                                class="p-3 px-6 pt-2 text-black bg-white rounded-full baseline">
                                                    Subscribe 
                                                </a>
                                            </div>
                                    </div>


                                </div>


                                <div className="hidden md:block m-5 font-bold text-l space-y-3">
                                    <h4 className=''>Categories</h4>
                                        <div className='space-y-1 flex flex-col'>
                                                <a href=""> Lifestyle </a>
                                                <a href=""> Travel </a>
                                                <a href=""> Travel </a>
                                                <a href=""> Travel </a>
                                        </div>
                                </div>
                
            

                    <div className='space-y-0.5'>
                            <p className='text-lg font-bold'> Cracked Inc.</p>
                        <div className='space-x-2'>
                        <Instagram />
                        <Twitter />
                        <GitHub />
                        <LinkedIn />
                        <Phone />
                        <Mail />
                        </div>
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