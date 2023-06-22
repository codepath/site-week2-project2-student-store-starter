import * as React from 'react';
import '../../globals.css';
import CodePathLogo from '../../assets/images/codepathLogo.png';
import { listItem } from '../../assets/styles';

export default function Navbar() {
  return (
    <div className='flex px-2 justify-around items-center w-full h-100px bg-green-700'>
      <img
        src={CodePathLogo}
        alt='CodePath logo'
        className='h-[85px] cursor-pointer'
      />
      <ul className='flex justify-around items-center w-1/3'>
        <li className={listItem}>Home</li>
        <li className={listItem}>About Us</li>
        <li className={listItem}>Contact Us</li>
        <li className={listItem}>Buy Now</li>
      </ul>
    </div>
  );
}