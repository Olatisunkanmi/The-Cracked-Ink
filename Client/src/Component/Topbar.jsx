import { LocalCafeOutlined } from '@material-ui/icons';
import {Link } from 'react-router-dom'

const Topbar = () => {
  return (

        <div 
                className=''>
                        <div 
                                className='max-w-5xl mx-auto justify-around flex flex-row p-5 mt-7 border-4 border-y-black
                                border-x-0'>
                                <ul 
                                        className='flex flex-row w-3/5 text-center justify-between '>
                                        <li  > 
                                                 <a href='/home' className='font-serif cursor-pointer text-xl
                                                font-semibold
                                                hover:text-veryLightBrown' > Home </a>
                                        </li>

                                        <li> 
                                                        <a href='/posts' className='font-serif cursor-pointer text-xl
                                                font-semibold
                                                hover:text-veryLightBrown' > Write ups</a>
                                        </li>
                                        <li> 
                                               
                                                        <a href='' className='font-serif cursor-pointer text-xl
                                                font-semibold
                                                hover:text-veryLightBrown' > Services </a>
                                        </li>
                                        <li> 
                                             
                                                        <a href='/'  className='font-serif cursor-pointer text-xl
                                                font-semibold
                                                hover:text-veryLightBrown'> About Me </a>
                                        </li>
                                      
                                       
                                </ul>


                                <div    >
                                      <a
                                      href='https://www.buymeacoffee.com/olatisun'
                                      target='_blank'
                                        className='font-serif cursor-pointer text-xl
                                        font-bold
                                        text-brightRed'> Buy ME Coffee <LocalCafeOutlined /> </a>
                                        
                                </div>
                        </div>
        </div>
        
        
  )
}

export default Topbar;