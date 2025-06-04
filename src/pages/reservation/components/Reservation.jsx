import { AddReservationModal, Button, Header, ReservationTable } from "@common/components";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function Reservation() {
  const [openReservationModal, setOpenReservationModal] = useState(false);
  const queryClient = useQueryClient();
  const hotelsQuery = useQuery({
    queryKey: ["hotels"],
    queryFn: async () => {
      const response = await axios.get("http://54.164.99.34//api/hotels/all/");
      return response.data.hotels;
    },
    staleTime: 1000 * 60 * 5,
  });
  const handleSuccess = () => {
    setOpenReservationModal(false);
    queryClient.invalidateQueries(["hotels"]);
  };
  const vendorQuery = useQuery({
    queryKey: ["vendors"],
    queryFn: async () => {
      const response = await axios.get("http://54.164.99.34//api/vendors/?type=HOT");
      return response.data.vendors;
    },
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div>
      <Header />
      <div className='flex flex-col gap-5 py-4 px-8'>
        <div className='flex justify-between items-center'>
          <h2>Reservation</h2>
          <Button className='bg-[#000080]' title='Add Reservation' onClick={() => setOpenReservationModal(true)} />
        </div>
        {hotelsQuery.data && <ReservationTable data={hotelsQuery.data} />}
      </div>
      {openReservationModal && (
        <AddReservationModal
          crossIconClick={() => setOpenReservationModal(false)}
          success={handleSuccess}
          vendors={vendorQuery.data}
        />
      )}
    </div>
  );
}
