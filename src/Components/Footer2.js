import React from 'react'
import footer_2_icon from "../Assets/footer_2_icon.png"

function Footer2() {
  return (
    <div className='bg-[#d9d9d9] border-t border-white flex flex-col items-center justify-center pt-10 pb-10'>
        <span className='font-semibold text-lg md:text-xl pb-4'>Accredited by</span>
        <img src={footer_2_icon} alt='footer_2_icon' className='h-10 md:h-16' />
    </div>
  )
}

export default Footer2