import {Link } from 'react-router-dom'

const Topbar = () => {
  return (
    
        
            <div className="hidden flex flex-col-reverse  md:flex md:flex-row justify-center mt-5 justify-between bg-veryLightBrown text-black">
                    <div className=" p-6">
                                <a 
                                href='/'
                                className="hidden text-xl text-black font-bold">
                                Igbasan Olasunkanmi</a>
                    </div>

                    <div className="p-6 ">
                        <div className="flex space-x-12 font-bold">
                        <a href="/home" className="">Home </a>
                        <a href="#" className="hidden">Read-Ups  </a>
                        <a href="/posts" className="">Write ups </a>
                        <a href="#" className="hidden">Our Authors  </a>
                        <a href="#" className="">Contact </a>
                        <a href="/" className=""> About Me </a>
                      
                        </div>
                    </div>



                    <div className="p-6 space-x-5">
                            <Link to='/admin-login'>
                                    <a 
                                    href="/admin-login" 
                                    class="p-3 px-6 pt-2 text-black bg-white rounded-full baseline">
                                    Login as Admin 
                                    </a>
                            </Link>
                    </div>
            </div>
        
  )
}

export default Topbar;