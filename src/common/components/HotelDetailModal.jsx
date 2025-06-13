import React from "react";
import { ModalBody, ModalWrapper } from "@common/components";
import { CrossIcon } from "@assets/svgs";

export function HotelDetailModal({ crossIconClick, data }) {
  return (
    <ModalWrapper>
      <ModalBody className='w-[70vw]'>
        <CrossIcon className='absolute top-2 right-2' onClick={crossIconClick} />
        <h1 className='text-xl font-bold mb-8'>Reservation Detail</h1>
        <div className='flex flex-col gap-6'>
          <div className='flex gap-5 justify-between'>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>Vendor Name:</h4>
              <p>{data.vendor || "-"}</p>
            </div>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>Hotel Name:</h4>
              <p>{data.name || "-"}</p>
            </div>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>CheckedIn Date:</h4>
              <p>{data.checkedIn || "-"}</p>
            </div>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>CheckedOut Date:</h4>
              <p>{data.checkedOut || "-"}</p>
            </div>
          </div>
          <div className='flex gap-5 justify-between'>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>Reservation Number:</h4>
              <p>{data.reservationNo || "-"}</p>
            </div>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>Guest Name:</h4>
              <p>{data.guestName || "-"}</p>
            </div>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>View:</h4>
              <p>{data.view || "-"}</p>
            </div>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>Nights:</h4>
              <p>{data.nts || "-"}</p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h2>Rooms</h2>
            <div className='flex gap-5 justify-between'>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Single:</h4>
                <p>1</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Double:</h4>
                <p>1</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Triple:</h4>
                <p>1</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Quadratic:</h4>
                <p>1</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h2>Meal</h2>
            <div className='flex gap-5 justify-between'>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Breakfast:</h4>
                <p>2</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Lunch:</h4>
                <p>3</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Dinner:</h4>
                <p>3</p>
              </div>
              <div className='min-w-[14.875rem]'></div>
            </div>
          </div>
          <div className='flex gap-5 justify-between'>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>Room Amount:</h4>
              <p>350</p>
            </div>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>Meal Amount:</h4>
              <p>200</p>
            </div>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>Total Amount:</h4>
              <p>{data.pkrAmount || "-"}</p>
            </div>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>Payment Method:</h4>
              <p>{data.paymentType || "-"}</p>
            </div>
          </div>
        </div>
      </ModalBody>
    </ModalWrapper>
  );
}
