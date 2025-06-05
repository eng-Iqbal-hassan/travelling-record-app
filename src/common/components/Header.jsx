import React from "react";
import { Input } from "@common/components";
import { ROUTES } from "@routes";
import { Link, useLocation } from "react-router-dom";
import { ArrowDown, Logo } from "@assets/svgs";
import profile_img from "../../assets/images/profile_img.png";

export function Header() {
  // const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname === ROUTES.TICKETS);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/app/login";
  };

  return (
    <div className='flex items-center justify-between py-4 px-6 bg-[#000080]'>
      <Link to={ROUTES.HOME}>
        <Logo />
      </Link>
      <ul className='flex gap-6 text-white'>
        <li>
          <Link to={ROUTES.HOME} className={location.pathname === ROUTES.HOME ? "opacity-100" : "opacity-70"}>
            Vendor
          </Link>
        </li>
        <li>
          <Link to={ROUTES.TICKETS} className={location.pathname === ROUTES.TICKETS ? "opacity-100" : "opacity-70"}>
            Tickets
          </Link>
        </li>
        <li>
          <Link
            to={ROUTES.RESERVATION}
            className={location.pathname === ROUTES.RESERVATION ? "opacity-100" : "opacity-70"}
          >
            Hotel
          </Link>
        </li>
        <li>
          <Link to={ROUTES.VISA} className={location.pathname === ROUTES.VISA ? "opacity-100" : "opacity-70"}>
            Visa
          </Link>
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
