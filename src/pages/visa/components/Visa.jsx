import { Button, Header, VisaModal, VisaTable } from "@common/components";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

export function Visa() {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [openVisaModal, setOpenVisaModal] = useState(false);
  const queryClient = useQueryClient();
  const vendorQuery = useQuery({
    queryKey: ["vendors"],
    queryFn: async () => {
      const response = await axios.get("http://54.164.99.34//api/vendors");
      return response.data.vendors;
    },
    staleTime: 1000 * 60 * 5,
  });
  const visaQuery = useQuery({
    queryKey: ["visa", selectedVendor],
    queryFn: async () => {
      const url = selectedVendor ? `http://54.164.99.34/api/visa/${selectedVendor}/` : `http://54.164.99.34/api/visa/`;
      const response = await axios.get(url);
      console.log(response.data);
      return Object.values(response.data);
    },
    staleTime: 1000 * 60 * 5,
    enabled: vendorQuery.isSuccess,
  });
  const handleSuccess = () => {
    setOpenVisaModal(false);
    queryClient.invalidateQueries(["visa", selectedVendor]);
  };
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-5 py-4 px-8'>
        <div className='flex justify-between items-center'>
          <h2>Visa</h2>
          <div className='flex gap-2'>
            <Button className='bg-[#000080]' title='Add Visa' onClick={() => setOpenVisaModal(true)} />
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
        {visaQuery.data && <VisaTable data={visaQuery.data} />}
      </div>
      {openVisaModal && (
        <VisaModal success={handleSuccess} vendors={vendorQuery.data} crossIconClick={() => setOpenVisaModal(false)} />
      )}
    </div>
  );
}
