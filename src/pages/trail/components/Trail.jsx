import { Header, Loader, TrailTable } from "@common/components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

export function Trail() {
  const [selectedVendor, setSelectedVendor] = useState("");
  const vendorQuery = useQuery({
    queryKey: ["vendors"],
    queryFn: async () => {
      const response = await axios.get("http://54.164.99.34//api/vendors");
      return response.data.vendors;
    },
    staleTime: 1000 * 60 * 5,
  });
  const trailQuery = useQuery({
    queryKey: ["visa", selectedVendor],
    queryFn: async () => {
      if (!selectedVendor) return [];
      const url = `http://54.164.99.34/api/vendors/${selectedVendor}/transactions/`;
      const response = await axios.get(url);
      console.log(response.data);
      return Object.values(response.data);
    },
    enabled: !!selectedVendor,
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div>
      <Header />
      <div className="className='flex flex-col gap-5 py-4 px-8">
        <div className='flex justify-between items-center mb-5'>
          <h2>
            Trail
            {selectedVendor && vendorQuery?.data
              ? ` (${vendorQuery.data.find((v) => String(v.id) === String(selectedVendor))?.name || ""})`
              : ""}
          </h2>
          <select
            name='vendors'
            id='vendors'
            className='border border-[#00000080] w-[15rem] rounded-md h-10'
            value={selectedVendor}
            onChange={(e) => setSelectedVendor(e.target.value)}
          >
            <option value='' disabled>
              Select an option
            </option>
            <option value=''>None</option>
            {vendorQuery.isSuccess &&
              vendorQuery?.data.map((vendor) => (
                <option key={vendor.id} value={vendor.id}>
                  {vendor.name}
                </option>
              ))}
          </select>
        </div>
        {!selectedVendor ? (
          <div className='h-[75vh] w-full flex items-center justify-center text-2xl font-semibold'>
            Select a Vendor to get his/her trail
          </div>
        ) : trailQuery.isLoading ? (
          <Loader />
        ) : trailQuery.error ? (
          <p>Error Loading Tickets.</p>
        ) : (
          <TrailTable data={trailQuery.data} />
        )}
      </div>
    </div>
  );
}
