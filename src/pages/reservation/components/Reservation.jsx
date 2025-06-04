import { AddReservationModal, Button, Header, ReservationTable } from "@common/components";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function Reservation() {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [openReservationModal, setOpenReservationModal] = useState(false);
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
      return response.data.hotels;
    },
    staleTime: 1000 * 60 * 5,
    enabled: vendorQuery.isSuccess, // ensures it runs after vendors are loaded
  });
  const handleSuccess = () => {
    setOpenReservationModal(false);
    queryClient.invalidateQueries(["hotels", selectedVendor]);
  };

  return (
    <div>
      <Header />
      <div className='flex flex-col gap-5 py-4 px-8'>
        <div className='flex justify-between items-center'>
          <h2>Reservation</h2>
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
