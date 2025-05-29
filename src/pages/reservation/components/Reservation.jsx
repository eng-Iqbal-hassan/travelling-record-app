import { AddReservationModal, Button, Header, ReservationTable } from "@common/components";
import { useState } from "react";

export function Reservation() {
  const [openReservationModal, setOpenReservationModal] = useState(false);
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-5 py-4 px-8'>
        <div className='flex justify-between items-center'>
          <h2>Reservation</h2>
          <Button className='bg-[#000080]' title='Add Reservation' onClick={() => setOpenReservationModal(true)} />
        </div>
        <ReservationTable />
      </div>
      {openReservationModal && (
        <AddReservationModal
          crossIconClick={() => setOpenReservationModal(false)}
          submitted={() => setOpenReservationModal(false)}
        />
      )}
    </div>
  );
}
