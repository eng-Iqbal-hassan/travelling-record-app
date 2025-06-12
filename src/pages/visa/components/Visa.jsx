import { Button, Header, VisaModal, VisaTable } from "@common/components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

export function Visa() {
  const [openVisaModal, setOpenVisaModal] = useState(false);
  const visaQuery = useQuery({
    queryKey: ["visa"],
    queryFn: async () => {
      const response = await axios.get("http://54.164.99.34/api/visa/");
      console.log("visa data", response.data);
      return Object.values(response.data);
    },
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-5 py-4 px-8'>
        <div className='flex justify-between items-center'>
          <h2>Visa</h2>
          <Button className='bg-[#000080]' title='Add Visa' onClick={() => setOpenVisaModal(true)} />
        </div>
        {visaQuery.data && <VisaTable data={visaQuery.data} />}
      </div>
      {openVisaModal && <VisaModal crossIconClick={() => setOpenVisaModal(false)} />}
    </div>
  );
}
