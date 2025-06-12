import React from "react";
import { Input } from "@common/components";
import { ROUTES } from "@routes";
import { NavLink } from "react-router-dom";
import { ArrowDown, Logo } from "@assets/svgs";
import profile_img from "../../assets/images/profile_img.png";

export function Header() {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/app/login";
  };

  return (
    <div className='flex items-center justify-between py-4 px-6 bg-[#000080]'>
      <NavLink to={ROUTES.HOME} className='link'>
        <Logo />
      </NavLink>
      <ul className='flex gap-6 text-white'>
        <li>
          <NavLink to={ROUTES.HOME} className='link'>
            Vendor
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.TICKETS} className='link'>
            Tickets
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.RESERVATION} className='link'>
            Hotel
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.VISA} className='link'>
            Visa
          </NavLink>
        </li>
      </ul>
      <div className='flex gap-3'>
        <Input placeholder='USD Rate' />
        <Input placeholder='SAR Rate' />
        <div className='flex items-center gap-2 relative group cursor-pointer'>
          <img src={profile_img} alt='profile' />
          <ArrowDown />
          <div className='absolute right-0 top-full w-max bg-[#191919] py-2 px-5 rounded-sm text-underline z-1 hidden group-hover:block'>
            <p onClick={handleLogout} className='text-white cursor-pointer underline'>
              sign out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
