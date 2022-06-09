import './About.css';
import {Link } from "react-router-dom"
import {Header } from '../../Component/Index';
import profileImage from '../../Assests/sk.jpg';
import {Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@material-ui/icons'


const About = () => {
 
  return (
    <>
    <Header />
    <div class="body--container">

              
                <div class="img--div">
                <img src={profileImage} alt="" class="about-me-img" />

                </div>

                <div class="details--div">

                                <div class="top--details">

                                        <div class="header">
                                        <h3 class="header--h3">About </h3>

                                        <hr class="header--hr"/>  
                                        </div>

                                        <div class="top--details--div">
                                                    <div class="about--me--details">
                                                    <p class="about--me--details--para">
                                                    Hello there and Welcome to my blog. <br />
                                                    My name is <span>Olasunkanmi. </span>
                                                    I am a Writer, with actute mind for details. A Self taught backend Software Developer, who is very passionate about learning, as learning never ends.
                                                    I am also very dedicated to my work.
                                                    <br />
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. S
                                                    unt nam consectetur cupiditate doloribus nostrum beatae est
                                                    sint dolores quo fugit voluptates repellendus dolorum eaque, 
                                                    ipsam cumque explicabo minus provident repellat.
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. S
                                                    unt nam consectetur cupiditate doloribus nostrum beatae est
                                                    sint dolores quo fugit voluptates repellendus dolorum eaque, 
                                                    ipsam cumque explicabo minus provident repellat.
                                                    <br />
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. S
                                                    unt nam consectetur cupiditate doloribus nostrum beatae est
                                                    sint dolores quo fugit voluptates repellendus dolorum eaque, 
                                                    ipsam cumque explicabo minus provident repellat.
                                                    With almost a year of experience as a developer,
                                                    I have acquired the skills and knowledge
                                                    necessary to make your project a success. I am open to Internship and Junior positions.
                                                    </p>
                                                    </div>

                                        </div>
                                </div>

                                <div>
                                <button> 
                                  <Link to="/posts/">
                                      Go To Blog
                                  </Link>
                            
                                 </button>
                                <p>Enough With the boring stuffs, I promise you are going to love it there.</p>
                        </div>
            </div>


</div>

<footer>
            <div className="wrapper--container">

                        <div className="contact--div">
                        <button className='contact--btn'>Contact Me!</button>
                        <p>Everything Begins with an Hello !</p>
                        </div>

                        <div className="social--icons">
                            
                            
                        </div>
                        
            
            </div>

</footer>


    
    </>
  )
}

export default About