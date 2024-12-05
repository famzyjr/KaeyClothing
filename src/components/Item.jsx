import React from 'react'
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import Loading from '../components/Loading';
function Item(props) {
  const [isLoading,setisLoading] = useState(true);
  useEffect(()=>{
  // stimulating api
     setTimeout(()=>{
      setisLoading(false);
     },2000)
  },[])
  if(isLoading){
    return <Loading/>;
  }
  return (
    <div>
      <h1>{props.header}</h1>
     <div className="transform transition duration-300 hover:scale-[1.05]">
     <Link to={`/product/${props.id}`}><img src={props.image} alt="b" className=' w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"' loading='lazy' /></Link>
      <div className='item-con'>
      <a href="https://alvo.chat/5hne" target='blank' className='border-b-2 border-black text-2xl'>Contact talior</a>
      </div>
     </div>
    </div>
  )
}

export default Item