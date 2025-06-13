import React from "react";
import { ModalBody, ModalWrapper } from "@common/components";
import { CrossIcon } from "@assets/svgs";

export function HotelDetailModal({ crossIconClick, data }) {
  const mealData = {
    BF: { label: "Breakfast", count: 0, rate: "0.00", total: "0.00" },
    LU: { label: "Lunch", count: 0, rate: "0.00", total: "0.00" },
    DI: { label: "Dinner", count: 0, rate: "0.00", total: "0.00" },
  };

  const roomData = {
    1: { label: "Single", count: 0, rate: "0.00", total: "0.00" },
    2: { label: "Double", count: 0, rate: "0.00", total: "0.00" },
    3: { label: "Triple", count: 0, rate: "0.00", total: "0.00" },
    4: { label: "Quadratic", count: 0, rate: "0.00", total: "0.00" },
  };

  data.meals?.forEach((meal) => {
    if (mealData[meal.type]) {
      mealData[meal.type].count = meal.count;
      mealData[meal.type].rate = meal.ratePerNight;
      mealData[meal.type].total = meal.total;
    }
  });

  data.rooms?.forEach((room) => {
    if (roomData[room.type]) {
      roomData[room.type].count = room.count;
      roomData[room.type].rate = room.ratePerNight;
      roomData[room.type].total = room.total;
    }
  });

  const totalMealAmount =
    parseFloat(mealData.BF.total || 0) + parseFloat(mealData.LU.total || 0) + parseFloat(mealData.DI.total || 0);

  const totalRoomAmount = data.rooms?.reduce((acc, room) => acc + parseFloat(room.total || 0), 0).toFixed(2);
  return (
    <ModalWrapper>
      <ModalBody className='w-[70vw]'>
        <CrossIcon className='absolute top-2 right-2' onClick={crossIconClick} />
        <h1 className='text-xl font-bold mb-8'>Reservation Detail</h1>
        <div className='flex flex-col gap-6'>
          <div className='flex gap-5 justify-between pb-4 border-b border-[#ccc]'>
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

          <div className='flex gap-5 justify-between pb-4 border-b border-[#ccc]'>
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

          <div className='flex flex-col gap-4 pb-4 border-b border-[#ccc]'>
            <h2>Rooms</h2>

            <div className='flex gap-5 justify-between'>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Single:</h4>
                <p>{roomData[1].count || "-"}</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Double:</h4>
                <p>{roomData[2].count || "-"}</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Triple:</h4>
                <p>{roomData[3].count || "-"}</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Quadratic:</h4>
                <p>{roomData[4].count || "-"}</p>
              </div>
            </div>

            <div className='flex gap-5 justify-between'>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Per Night Rate:</h4>
                <p>{roomData[1].rate || "-"}</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Per Night Rate:</h4>
                <p>{roomData[2].rate || "-"}</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Per Night Rate:</h4>
                <p>{roomData[3].rate || "-"}</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Per Night Rate:</h4>
                <p>{roomData[4].rate || "-"}</p>
              </div>
            </div>

            <div className='flex gap-5 justify-between'>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Single Total:</h4>
                <p>{roomData[1].total || "-"}</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Double Total:</h4>
                <p>{roomData[2].total || "-"}</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Triple Total:</h4>
                <p>{roomData[3].total || "-"}</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Quadratic Total:</h4>
                <p>{roomData[4].total || "-"}</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4 pb-4 border-b border-[#ccc]'>
            <h2>Meal</h2>
            <div className='flex gap-5 justify-between'>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Breakfast:</h4>
                <p>{data?.meals?.find((m) => m.type === "BF")?.count || "-"}</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Lunch:</h4>
                <p>{data?.meals?.find((m) => m.type === "LU")?.count || "-"}</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Dinner:</h4>
                <p>{data?.meals?.find((m) => m.type === "DI")?.count || "-"}</p>
              </div>
              <div className='min-w-[14.875rem]'></div>
            </div>
            <div className='flex gap-5 justify-between'>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Per Meal Rate:</h4>
                <p>{data?.meals?.find((m) => m.type === "BF")?.ratePerNight || "-"}</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Per Meal Rate:</h4>
                <p>{data?.meals?.find((m) => m.type === "LU")?.ratePerNight || "-"}</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Per Meal Rate:</h4>
                <p>{data?.meals?.find((m) => m.type === "DI")?.ratePerNight || "-"}</p>
              </div>
              <div className='min-w-[14.875rem]'></div>
            </div>
            <div className='flex gap-5 justify-between'>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Breakfast Total:</h4>
                <p>{data?.meals?.find((m) => m.type === "BF")?.total || "-"}</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Lunch Total:</h4>
                <p>{data?.meals?.find((m) => m.type === "LU")?.total || "-"}</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Dinner Total:</h4>
                <p>{data?.meals?.find((m) => m.type === "DI")?.total || "-"}</p>
              </div>
              <div className='min-w-[14.875rem]'></div>
            </div>
          </div>

          <div className='flex gap-5 justify-between'>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>Total Room Amount:</h4>
              <p>{totalRoomAmount || "-"}</p>
            </div>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>Total Meal Amount:</h4>
              <p>{totalMealAmount > 0 ? totalMealAmount.toFixed(2) : "-"}</p>
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
