import { Button, Header, TicketTable, TicketModal, TicketDetailModal, Loader } from "@common/components";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export function Tickets() {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [openTicketModal, setOpenTicketModal] = useState(false);
  const [openTicketDetailModal, setOpenTicketDetailModal] = useState(false);
  const [ticketDetail, setTicketDetail] = useState(null);
  const queryClient = useQueryClient();
  const vendorQuery = useQuery({
    queryKey: ["vendors"],
    queryFn: async () => {
      const response = await axios.get("http://54.164.99.34//api/vendors");
      return response.data.vendors;
    },
    staleTime: 1000 * 60 * 5,
  });
  const ticketsQuery = useQuery({
    queryKey: ["tickets", selectedVendor],
    queryFn: async () => {
      const url = selectedVendor
        ? `http://54.164.99.34/api/vendors/tickets/${selectedVendor}/`
        : `http://54.164.99.34//api/ticket/v1/`;
      const response = await axios.get(url);
      console.log(response.data);
      return response.data.tickets;
    },
    staleTime: 1000 * 60 * 5,
  });
  const handleSuccess = () => {
    setOpenTicketModal(false);
    queryClient.invalidateQueries(["tickets", selectedVendor]);
    toast.success("Ticket created successfully!");
  };
  const handleError = () => {
    setOpenTicketModal(false);
    toast.error("Something Went Wrong. Check your internet connect and try again!");
  };
  const sendEmailMutation = useMutation({
    mutationFn: async (ticketId) => {
      const response = await axios.post("http://54.164.99.34//api/ticket/v1/send-ticket-email/", {
        ticket_id: ticketId,
      });
      return response.data;
    },
    onSuccess: (_, ticketId) => {
      toast.success(`Email sent successfully for this Ticket`);
    },
    onError: (error) => {
      console.error("Email sending failed:", error);
      toast.error("Failed to send email.");
    },
  });
  const handleDetailBtnClick = (row) => {
    setTicketDetail(row);
    setOpenTicketDetailModal(true);
  };
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-5 py-4 px-8'>
        <div className='flex justify-between items-center'>
          <h2>
            Tickets
            {selectedVendor && vendorQuery?.data
              ? ` (${vendorQuery.data.find((v) => String(v.id) === String(selectedVendor))?.name || ""})`
              : " (All)"}
          </h2>
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
              <option value=''>All</option>
              {vendorQuery.isSuccess &&
                vendorQuery?.data.map((vendor) => (
                  <option key={vendor.id} value={vendor.id}>
                    {vendor.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        {ticketsQuery.isLoading ? (
          <Loader />
        ) : ticketsQuery.error ? (
          <p>Error Loading Tickets.</p>
        ) : (
          <TicketTable
            data={ticketsQuery.data}
            detailBtnClick={handleDetailBtnClick}
            onSendEmail={sendEmailMutation.mutate}
          />
        )}
      </div>
      {openTicketModal && (
        <TicketModal
          crossIconClick={() => setOpenTicketModal(false)}
          success={handleSuccess}
          error={handleError}
          vendors={vendorQuery.data}
          selectedVendor={selectedVendor}
        />
      )}
      {openTicketDetailModal && (
        <TicketDetailModal data={ticketDetail} crossIconClick={() => setOpenTicketDetailModal(false)} />
      )}
    </div>
  );
}
