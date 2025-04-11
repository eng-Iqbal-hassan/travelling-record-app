import { AddReservationModal, AddVendorModal, Button, Header, TicketTable } from "@common/components";
import { TicketModal } from "@common/components/TicketModal";
import { useHome } from "@pages/home";
import { useState } from "react";

export function Home() {
  const { data, isFetching, onClickTitle } = useHome();
  const [openVendorModal, setOpenVendorModal] = useState(false);
  const [openReservationModal, setOpenReservationModal] = useState(false);
  const [openTicketModal, setOpenTicketModal] = useState(false);

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
      <TicketTable />
      {openVendorModal && (
        <AddVendorModal crossIconClick={handleCloseVendorModal} dataSubmitted={handleCloseVendorModal} />
      )}
    </div>
  );
}
