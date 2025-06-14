import { AddReservationModal, Button, Header, HotelDetailModal, ReservationTable } from "@common/components";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export function Reservation() {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [openReservationModal, setOpenReservationModal] = useState(false);
  const [openReservationDetailModal, setOpenReservationDetailModal] = useState(false);
  const [reservationDetail, setReservationDetail] = useState(null);
  const queryClient = useQueryClient();
  const vendorQuery = useQuery({
    queryKey: ["vendors"],
    queryFn: async () => {
      const response = await axios.get("http://54.164.99.34//api/vendors");
      return response.data.vendors;
    },
    staleTime: 1000 * 60 * 5,
  });
  const hotelsQuery = useQuery({
    queryKey: ["hotels", selectedVendor], // key includes selectedVendor
    queryFn: async () => {
      const url = selectedVendor
        ? `http://54.164.99.34/api/vendors/hotels/${selectedVendor}/`
        : `http://54.164.99.34/api/hotels/all/`;
      const response = await axios.get(url);
      console.log(response.data.hotels);
      return response.data.hotels;
    },
    staleTime: 1000 * 60 * 5,
    enabled: vendorQuery.isSuccess, // ensures it runs after vendors are loaded
  });
  const handleSuccess = () => {
    setOpenReservationModal(false);
    queryClient.invalidateQueries(["hotels", selectedVendor]);
    toast.success("Reservation created successfully!");
  };
  const handleError = () => {
    setOpenReservationModal(false);
    toast.error("Something Went Wrong. Check your internet connect and try again!");
  };

  const sendEmailMutation = useMutation({
    mutationFn: async (hotelId) => {
      const response = await axios.post("http://54.164.99.34//api/hotels/send-hotel-email/", {
        hotel_id: hotelId,
      });
      return response.data;
    },
    onSuccess: (_, hotelId) => {
      toast.success(`Email sent successfully for this Reservation`);
    },
    onError: (error) => {
      console.error("Email sending failed:", error);
      toast.error("Failed to send email.");
    },
  });
  const handleDetailBtnClick = (row) => {
    setReservationDetail(row);
    setOpenReservationDetailModal(true);
  };

  return (
    <div>
      <Header />
      <div className='flex flex-col gap-5 py-4 px-8'>
        <div className='flex justify-between items-center'>
          <h2>
            Reservations{" "}
            {selectedVendor && vendorQuery?.data
              ? ` (${vendorQuery.data.find((v) => String(v.id) === String(selectedVendor))?.name || ""})`
              : " (All)"}
          </h2>
          <div className='flex gap-2'>
            <Button className='bg-[#000080]' title='Add Reservation' onClick={() => setOpenReservationModal(true)} />
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
        {hotelsQuery.data && (
          <ReservationTable
            data={hotelsQuery.data}
            detailBtnClick={handleDetailBtnClick}
            onSendEmail={sendEmailMutation.mutate}
          />
        )}
      </div>
      {openReservationModal && (
        <AddReservationModal
          crossIconClick={() => setOpenReservationModal(false)}
          success={handleSuccess}
          error={handleError}
          vendors={vendorQuery.data}
          selectedVendor={selectedVendor}
        />
      )}
      {openReservationDetailModal && reservationDetail && (
        <HotelDetailModal data={reservationDetail} crossIconClick={() => setOpenReservationDetailModal(false)} />
      )}
    </div>
  );
}
