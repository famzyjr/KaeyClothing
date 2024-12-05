import React from 'react'
import ReactLoading from 'react-loading';
const Loading = () => {
  return (
    <div>
     <ReactLoading type='spinningBubbles' className='flex  max-sm: justify-center max-sm:ml-40 max-md:ml-44 max-xl:ml-44'  color="black" height={100} width={50}/>
    </div>
  )
}

export default Loading