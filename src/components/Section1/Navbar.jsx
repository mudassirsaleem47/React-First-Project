import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6 px-18 bg-white'>
        <h4 className='bg-black text-white py-2 px-4 text-sm rounded-full tracking-wide uppercase'>Target Audience</h4>
        <button className='bg-gray-50 border cursor-pointer border-sky-500 px-6 py-2 uppercase rounded-full tracking-widest text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar