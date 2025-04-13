import { Button, Header, TicketTable } from "@common/components";
import { TicketModal } from "@common/components/TicketModal";
import { useState } from "react";

export function Tickets() {
  const [openTicketModal, setOpenTicketModal] = useState(false);
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-8 py-4 px-8'>
        <div className='flex justify-between items-center'>
          <h2>Ticket</h2>
          <Button className='bg-[#000080]' title='Add Ticket' onClick={() => setOpenTicketModal(true)} />
        </div>
        <TicketTable />
      </div>
      {openTicketModal && <TicketModal crossIconClick={() => setOpenTicketModal(false)} />}
    </div>
  );
}
