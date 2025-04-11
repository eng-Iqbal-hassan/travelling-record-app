import { AddReservationModal, Button, Header } from "@common/components";
import { useState } from "react";

export function Reservation() {
  const [openReservationModal, setOpenReservationModal] = useState(false);
  return (
    <div>
      <Header />
      <div>
        <h2>Reservation</h2>
        <Button className='bg-[#000080]' title='Add Reservation' onClick={() => setOpenReservationModal(true)} />
      </div>
      {openReservationModal && <AddReservationModal crossIconClick={() => setOpenReservationModal(false)} />}
    </div>
  );
}
