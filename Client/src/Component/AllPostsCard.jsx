import React from 'react'
import {Link, useLocation } from "react-router-dom"
import {  useState } from "react";
import { ArrowRightAlt, CommentOutlined, FavoriteBorderOutlined, Share } from "@material-ui/icons";

const AllPostsCard = ({post}) => {
  const Path = useLocation()

 const  PostLikes = post.likes.length 
//  console.log(PostLikes);
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

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

                                                          <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
                                                          <span className="likes-counter">{ `Like | ${likes}` }</span>
                                                        </button>

                                                          <FavoriteBorderOutlined  className='cursor-pointer' />
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