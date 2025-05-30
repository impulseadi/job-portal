import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'>
      <img width={160} src={assets.logo} alt="" loading="lazy"/>
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright Aditya | All rights reserved.</p>
      <div className='flex gap-2.5'>
        <img width={38} src={assets.facebook_icon} alt="" loading="lazy"/>
        <img width={38} src={assets.twitter_icon} alt="" loading="lazy"/>
        <img width={38} src={assets.instagram_icon} alt="" loading="lazy"/>
      </div>
    </div>
  )
}

export default Footer