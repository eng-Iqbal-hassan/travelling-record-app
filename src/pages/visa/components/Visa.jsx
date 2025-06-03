import { Button, Header, VisaModal, VisaTable } from "@common/components";
import React, { useState } from "react";

export function Visa() {
  const [openVisaModal, setOpenVisaModal] = useState(false);
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-5 py-4 px-8'>
        <div className='flex justify-between items-center'>
          <h2>Visa</h2>
          <Button className='bg-[#000080]' title='Add Visa' onClick={() => setOpenVisaModal(true)} />
        </div>
        <VisaTable />
      </div>
      {openVisaModal && <VisaModal crossIconClick={() => setOpenVisaModal(false)} />}
    </div>
  );
}
