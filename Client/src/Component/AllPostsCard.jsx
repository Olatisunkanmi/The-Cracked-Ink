import React from 'react'
import {Link } from "react-router-dom"
import { ArrowRightAlt, CommentOutlined, FavoriteBorderOutlined, Share } from "@material-ui/icons";

const AllPostsCard = ({post}) => {

  console.log(post.comments.length);



  return (
    <div>
              <div className="flex flex-col md:flex-row justify-around text-center p-4" >

                        <div 
                          className="m-5 mb-2 md:w-1/2 ">
                                    <div 
                                      className="bg-white p-5 lg:px-40 relative text-left">
                                                        <h3
                                                        className="font-serif text-left capitalize text-2xl tracking-wider font-semibold"> 
                                                        <Link to={`/posts/${post._id}`}>
                                                        {post.title} 
                                                        </Link> 
                                                        </h3>

                                                        <div className="mb-7 h-1 bg-zinc-700 border-none w-8"></div>
                                                      <p
                                                        className="para">
                                                        {post.desc}
                                                      </p>

                                                      <div  
                                                      className="mt-5">
                                                              <a href="" className="">
                                                              <Link to={`/posts/${post._id}`}>
                                                              READ MORE
                                                              </Link>
                                                            <ArrowRightAlt 
                                                              className=""/>
                                                            </a>

                                                            <div className=" h-1 bg-zinc-700 border-none w-8"></div>

                                                          <div  
                                                            className="space-x-5 mt-5"> 
                                                          <Share />
                                                          <FavoriteBorderOutlined />
                                                            <span> 
                                                            {
                                                              post.comments.length
                                                            }
                                                            
                                                            <CommentOutlined />  </span>
                                                          </div>

                                                      </div>
                                    </div>
                        </div>


                    

              </div>
    </div>
  )
}

export default AllPostsCard