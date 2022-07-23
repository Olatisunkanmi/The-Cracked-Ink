import '../../App.css'
import {Link } from "react-router-dom"
import {Header } from '../../Component/Index';
import profileImage from '../../Assests/sk.jpg';
import { ArrowRightAlt, GitHub, Instagram, LinkedIn, MailOutline, Twitter } from '@material-ui/icons'


const About = () => {
 
  return (
    <div>
    <Header />


      <div>
        <div 
          className='text-center mt-5'>
              <h3 
              className='about'> About Me .</h3>
        </div>


                    <div className="flex flex-col -mt-5 w-full md:flex-row m-auto items-center justify-around ">
    
           
                                                <div className="md:w-2/5 m-auto justify-end flex">
                                                <img src={profileImage} alt="" className=" md:w-4/6 rounded-lg " />

                                                </div>



                                  <div className=" w-full md:w-3/5 p-10 flex flex-col">


                                                  

                                                          <div className="mt-5 max-w-2xl ">
                                                                  
                                                                      <p className="font-mono text-md xl:text-xl leading-normal">
                                                                      Hello there and Welcome to my blog. <br />
                                                                      My name is <span className='font-bold text-black text-1xl'>Olasunkanmi. </span>
                                                                      I am a Full-Stack Developer as well as a Creative Writer.
                                                                      Before I tell you about myself, something occurred to me recently and I would like to tell you about it 
                                                                      <br />
                                                                      <br />
                                                                      It was past midnight, 1:30 AM to be exact.
                                                                      Sitting across from me on the glass-topped dining table was my brother-in-law.
                                                                      We'd been up all night while he tested a company's security system for vulnerabilities.
                                                                      I sat across from him, juggling between codes and coffee. Right there, I saw a reflection of myself !! .
                                                                      In a few years, that would still be me
                                                                      staying up all night again, A father and Husband (probably ) but older for sure. 
                                                                      <br />
                                                                      We are frequently so fixated on who we want to be that we lose sight of practically everything else.
                                                                      Like people who would always admire us for who we are,those who would make sure we never have as much as a scowl on our face.
                                                                      It was then that I decided to start a blog.
                                                                      "My own corner," I murmured to myself.
                                                                      A place where I can simply appreciate and ponder on everything around me. 
                                                                      </p>
                                                                    

                                                          </div>
                                        

                                                  <div>
                                                  <button className='mt-10 border-4 p-3 bg-veryLightBrown rounded-lg font-bold' > 
                                                    <Link to="/posts/" className='link'>
                                                        Go To Blog
                                                    </Link>
                                              
                                                  </button>
                                                  <p className="font-mono text-xl leading-relaxed">Enough With the boring stuffs, I promise you are going to love it there.</p>
                                              </div>
                              </div>


                      </div>



      </div>

<footer 
  className="bg-veryLightBrown">
            <div className=" bg-black p-8 text-white flex flex-col md:flex-row items-center justify-between">

                        <div className="hidden md:block w-1/5">
                        <button  className=' md:block mt-10 border-4 p-3 bg-white rounded-lg font-bold text-black' >Contact Me <ArrowRightAlt /> </button>
                        <p 
                          className='text-xl font-serif'>Everything Begins with an Hello !</p>
                        </div>

                        <div className="w-3/5 text-center space-x-10 text-3xl">

                                    <a href="https://github.com/Olatisunkanmi " target='_blank'>
                                    <GitHub className="icons"/>
                                    </a>
                                    

                                    <a href="https://instagram.com/olatisunkanmi__?igshid=YmMyMTA2M2Y=" target='_blank'>
                                    <Instagram className="icons"/>
                                    </a>

                                      <a href='https://twitter.com/olatisunkanmi_ ' target='_blank'> 
                                      <Twitter className="icons"/>
                                      </a>

                                    <a href='https://www.linkedin.com/in/olasunkanmi-igbasan-591447223/ ' target='_blank'>
                                  <LinkedIn className="icons"/>
                                    </a>
                                  
                                  <MailOutline className="icons " />


                                  <div 
                                  className='md:hidden my-7 '>
                                  <p 
                                  className='text-xl font-serif'>Everything Begins with an Hello !</p>
                                  </div>
                        </div>


                        <div 
                          className="flex flex-col w-1/5 md:block">
                          <p className='text-lg font-bold'> Cracked Inc.</p>

                          <p className='font-bold'>  
                          <span className='text-lg'>&copy;</span>
                          2022 | All Rights Reserved.</p>
                          
                              <button  className='hidden mt-1 border-4 p-3 bg-white rounded-lg font-bold text-black' > 
                              <Link to="/admin-login/edit">
                              Login as Admin
                              </Link>
                            </button>
                        </div>
                        
            
            </div>

</footer>


    
    </div>
  )
}

export default About