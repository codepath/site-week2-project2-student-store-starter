import React from 'react';

const Footer = () => {
  return (
    <div className='w-full h-[300px] bg-gray-200 mt-4 p-12 flex justify-center items-center'>
      <div className='w-2/3 flex justify-around items-center'>
        <div>
          <h1 className='font-bold text-xl my-4'>Categories</h1>
          <ul id='options' className='font-normal gap-y-4'>
            <li className='mt-2'>All Categories</li>
            <li className='mt-2'>Clothing</li>
            <li className='mt-2'>Food</li>
            <li className='mt-2'>Accessories</li>
            <li className='mt-2'>Tech</li>
          </ul>
        </div>
        <div>
          <h1 className='font-bold text-xl my-4'>Company</h1>
          <ul id='options' className='font-normal gap-y-4'>
            <li className='mt-2'>About Us</li>
            <li className='mt-2'>Find a Store</li>
            <li className='mt-2'>Terms</li>
            <li className='mt-2'>Sitemap</li>
            <li className='mt-2'>Careers</li>
          </ul>
        </div>
        <div>
          <h1 className='font-bold text-xl my-4'>Support</h1>
          <ul id='options' className='font-normal gap-y-4'>
            <li className='mt-2'>Contact Us</li>
            <li className='mt-2'>Money Refund</li>
            <li className='mt-2'>Order Status</li>
            <li className='mt-2'>Shipping Info</li>
            <li className='mt-2'>Open Dispute</li>
          </ul>
        </div>
        <div>
          <h1 className='font-bold text-xl my-4'>Account</h1>
          <ul id='options' className='font-normal gap-y-4'>
            <li className='mt-2'>Login</li>
            <li className='mt-2'>Register</li>
            <li className='mt-2'>Account Setting</li>
            <li className='mt-2'>My Orders</li>
            <li className='mt-2'>Wallet</li>
          </ul>
        </div>
        <div>
          <h1 className='font-bold text-xl my-4'>Socials</h1>
          <ul id='options' className='font-normal gap-y-4'>
            <li className='mt-2'>Facebook</li>
            <li className='mt-2'>Twitter</li>
            <li className='mt-2'>LinkedIn</li>
            <li className='mt-2'>Instagram</li>
            <li className='mt-2'>YouTube</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;