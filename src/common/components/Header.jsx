import React from "react";
import { Input } from "@common/components";
import { ROUTES } from "@routes";
import { Link } from "react-router-dom";
import { ArrowDown, Logo } from "@assets/svgs";
import profile_img from "../../assets/images/profile_img.png";

export function Header() {
  return (
    <div className='flex items-center justify-between py-4 px-6 bg-[#000080]'>
      <Link to={ROUTES.HOME}>
        <Logo />
      </Link>
      <ul className='flex gap-6 text-white'>
        <li>
          <Link to={ROUTES.HOME}>Vendor</Link>
        </li>
        <li>
          <Link to={ROUTES.TICKETS}>Tickets</Link>
        </li>
        <li>
          <Link to={ROUTES.RESERVATION}>Hotel</Link>
        </li>
      </ul>
      <div className='flex gap-3'>
        <Input placeholder='USD Rate' />
        <Input placeholder='SAR Rate' />
        <div className='flex items-center gap-2 relative group cursor-pointer'>
          <img src={profile_img} alt='profile' />
          <ArrowDown />
          <div className='absolute right-0 top-full w-max bg-[#191919] py-2 px-5 rounded-sm text-underline z-1 hidden group-hover:block'>
            <p className='text-white cursor-pointer underline'>sign out</p>
          </div>
        </div>
      </div>
    </div>
  );
}
