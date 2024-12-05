import React from 'react'
import Title from "../components/Title";
// import Newsletter from '../components/Newsletter'
import img_1 from '../caroImg/red.jpeg'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
     <Title text1={"CONTACT"} text2={'US'}/>
     <div  className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
     <img className='w-full md:max-w-[480px]' src={img_1} alt="" />
     <div className='flex flex-col justify-center items-start gap-6'>
       <p className='font-semibold text-xl' >Our Store</p>
       <p className='text-black text-xl'>54709 Willms Station
       Suite 350, Washington, USA</p>
       <p className='text-black text-xl'>Tel: 09150721990</p>
      <p>Email: <a href='kaeyclothing@gmail.com' blank=''> kaeyclothing@gmail.com</a></p> 
       <p className='font-semibold text-xl text-black'>K Clothing</p>
       <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'><a href="https://alvo.chat/5hne" target='blank'>Contact Us</a></button>
     </div>
     </div>
      </div>
      {/* <Newsletter/> */}
    </div>
  )
}

export default Contact