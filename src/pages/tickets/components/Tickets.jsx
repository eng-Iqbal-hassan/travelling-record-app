import { Button, Header, TicketTable } from "@common/components";
import { TicketModal } from "@common/components/TicketModal";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function Tickets() {
  const [openTicketModal, setOpenTicketModal] = useState(false);
  const queryClient = useQueryClient();
  const ticketsQuery = useQuery({
    queryKey: ["tickets"],
    queryFn: async () => {
      const response = await axios.get("http://54.164.99.34//api/ticket/v1/");
      console.log(response.data);
      return response.data.tickets;
    },
  });
  const handleSuccess = () => {
    setOpenTicketModal(false);
    queryClient.invalidateQueries(["tickets"]);
  };
  const vendorQuery = useQuery({
    queryKey: ["vendors"],
    queryFn: async () => {
      const response = await axios.get("http://54.164.99.34//api/vendors/");
      return response.data.vendors;
    },
  });
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-5 py-4 px-8'>
        <div className='flex justify-between items-center'>
          <h2>Ticket</h2>
          <Button className='bg-[#000080]' title='Add Ticket' onClick={() => setOpenTicketModal(true)} />
        </div>
        {ticketsQuery.error && <p>Error Loading Tickets.</p>}
        {ticketsQuery.data && <TicketTable data={ticketsQuery.data} />}
      </div>
      {openTicketModal && (
        <TicketModal
          crossIconClick={() => setOpenTicketModal(false)}
          success={handleSuccess}
          vendors={vendorQuery.data}
        />
      )}
    </div>
  );
}
