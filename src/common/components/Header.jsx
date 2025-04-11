import React from "react";
import { Button, Input } from "@common/components";
import { ROUTES } from "@routes";
import { Link } from "react-router-dom";

export function Header({ addVendorClick, AddTicketClick, AddReservationClick }) {
  return (
    <div className='flex items-center justify-between py-4 px-6 bg-[#000080]'>
      <Link to={ROUTES.HOME}>
        <img src='' alt='logo' />
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
      <div className='flex gap-6'>
        <div className='flex gap-3'>
          <Button className='bg-blue-600' title='Add Vendor' onClick={addVendorClick} />
          <Button className='bg-green-600' title='Add Ticket' onClick={AddTicketClick} />
          <Button className='bg-yellow-600' title='Add Reservation' onClick={AddReservationClick} />
        </div>
        <div className='flex gap-3'>
          <Input placeholder='USD Rate' />
          <Input placeholder='SAR Rate' />
        </div>
      </div>
    </div>
  );
}
