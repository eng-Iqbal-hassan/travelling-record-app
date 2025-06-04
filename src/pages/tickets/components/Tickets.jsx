import { Button, Header, TicketTable } from "@common/components";
import { TicketModal } from "@common/components/TicketModal";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import Select from "react-select";

export function Tickets() {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [openTicketModal, setOpenTicketModal] = useState(false);
  const queryClient = useQueryClient();
  const ticketsQuery = useQuery({
    queryKey: ["tickets"],
    queryFn: async () => {
      const response = await axios.get("http://54.164.99.34//api/ticket/v1/");
      console.log(response.data);
      return response.data.tickets;
    },
    staleTime: 1000 * 60 * 5,
  });
  const handleSuccess = () => {
    setOpenTicketModal(false);
    queryClient.invalidateQueries(["tickets"]);
    toast.success("Ticket created successfully!");
  };
  const vendorQuery = useQuery({
    queryKey: ["vendors"],
    queryFn: async () => {
      const response = await axios.get("http://54.164.99.34//api/vendors");
      return response.data.vendors;
    },
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-5 py-4 px-8'>
        <div className='flex justify-between items-center'>
          <h2>Ticket</h2>
          <div className='flex gap-2'>
            <Button className='bg-[#000080]' title='Add Ticket' onClick={() => setOpenTicketModal(true)} />

            <select
              name='vendors'
              id='vendors'
              className='border border-[#00000080] w-[15rem] rounded-md'
              value={selectedVendor}
              onChange={(e) => setSelectedVendor(e.target.value)}
            >
              <option value='' disabled>
                Select an option
              </option>
              {vendorQuery.isSuccess &&
                vendorQuery?.data.map((vendor) => (
                  <option key={vendor.id} value={vendor.id}>
                    {vendor.name}
                  </option>
                ))}
            </select>
          </div>
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
