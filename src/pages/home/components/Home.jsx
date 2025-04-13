import { AddVendorModal, Button, Header, VendorTable } from "@common/components";
import { useHome } from "@pages/home";
import { useState } from "react";

export function Home() {
  const { data, isFetching, onClickTitle } = useHome();
  const [openVendorModal, setOpenVendorModal] = useState(false);

  const handleCloseVendorModal = () => {
    setOpenVendorModal(false);
  };

  return isFetching ? (
    <div> Loading...</div>
  ) : (
    <div>
      <Header />
      <div>
        <h2>Vendor</h2>
        <Button className='bg-[#000080]' title='Add Vendor' onClick={() => setOpenVendorModal(true)} />
      </div>
      <VendorTable />
      {openVendorModal && (
        <AddVendorModal crossIconClick={handleCloseVendorModal} dataSubmitted={handleCloseVendorModal} />
      )}
    </div>
  );
}
