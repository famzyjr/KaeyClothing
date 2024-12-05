import React from 'react'
function ProductDisplay(props) {
    const {product} = props;
  return (
    <div className='productdisplay  grid grid-cols-2  z-10  '>
     <div className="productdisplay-left mt-20 mx-20">
      <img className='  gap-10 p-4 mt-10' src={product.image} alt="" />
      <img className='  gap-10 p-4' src={product.image} alt="" />
      <img className=' gap-10 p-4' src={product.image} alt="" /> 
     </div>
  
     <div className="productdisplay-right mt-40 sticky top-20">
       <div className="productdisplay-con">
       <h2 className="text-4xl ">{product.desc}</h2>
       </div>
     </div>
    </div>
  )
}

export default ProductDisplay