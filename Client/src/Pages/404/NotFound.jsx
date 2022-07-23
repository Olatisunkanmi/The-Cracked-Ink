import image from '../../Assests/404.svg';

const NotFound = () => {
  return (
        <div 
        className='flex flex-row bg-black p-20 mt-20 justify-center items-center mx-auto'>
              
                    <div>
                            <h2 className="text-4xl"> 
                                Where are you ?
                            </h2>
                  </div>


                  <div>
                  <img src={image} alt="" />
              </div>

        </div>
  )
}

export default NotFound