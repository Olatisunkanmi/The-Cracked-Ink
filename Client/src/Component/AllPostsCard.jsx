import React from 'react'
import { ArrowRightAlt, CommentOutlined, FavoriteBorderOutlined, Share } from "@material-ui/icons";

const AllPostsCard = ({posts}) => {
  console.log(posts);

  return (
    <div>
    <div className="flex flex-col md:flex-row justify-around text-center p-4" >

    <div 
      className="m-5 mb-2 md:w-1/2 ">
                <div 
                  className="bg-white p-5 lg:px-40 relative text-left">
                                    <h3
                                    className="font-serif text-left capitalize text-2xl tracking-wider font-semibold"> Some kind Of Title </h3>

                                    <div className="mb-7 h-1 bg-zinc-700 border-none w-8"></div>
                                  <p
                                    className="para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam sequi modi possimus natus. Alias, ipsum quisquam, voluptatem quasi pariatur ullam commodi, officia consequatur ipsa eius sequi quae? Mollitia, totam!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam sequi modi possimus natus. Alias, ipsum quisquam, voluptatem quasi pariatur ullam commodi, officia consequatur ipsa eius sequi quae? Mollitia, totam!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam sequi modi possimus natus. Alias, ipsum quisquam, voluptatem quasi pariatur ullam commodi, officia consequatur ipsa eius sequi quae? Mollitia, totam!
                                  </p>

                                  <div  
                                  className="mt-5">
                                          <a href="" className="">
                                          READ MORE
                                         <ArrowRightAlt 
                                          className=""/>
                                        </a>

                                        <div className=" h-1 bg-zinc-700 border-none w-8"></div>

                                      <div  
                                        className="space-x-5 mt-5"> 
                                      <Share />
                                      <FavoriteBorderOutlined />
                                        <span> 39 <CommentOutlined />  </span>
                                      </div>

                                  </div>
                </div>
    </div>


    <div 
      className="w-1/2">
          Hello
    </div>

</div>
    </div>
  )
}

export default AllPostsCard