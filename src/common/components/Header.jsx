import React from "react";
import { Button, Input } from "@common/components";

export function Header({ addVendorClick }) {
  return (
    <div className='flex items-center justify-between py-4 px-6 bg-gray-900'>
      <img src='' alt='logo' />
      <ul className='flex gap-6 text-white'>
        <li>Tickets</li>
        <li>Hotel</li>
      </ul>
      <div className='flex gap-6'>
        <div className='flex gap-3'>
          <Button className='bg-blue-600' title='Add Vendor' onClick={addVendorClick} />
          <Button className='bg-green-600' title='Add Ticket' />
          <Button className='bg-yellow-600' title='Add Reservation' />
        </div>
        <div className='flex gap-3'>
          <Input placeholder='USD Rate' />
          <Input placeholder='SAR Rate' />
        </div>
      </div>
    </div>
  );
}
