import { AddVendorModal, Header } from "@common/components";
import { TicketModal } from "@common/components/TicketModal";
import { useHome } from "@pages/home";
import { useState } from "react";

export function Home() {
  const { data, isFetching, onClickTitle } = useHome();
  const [openVendorModal, setOpenVendorModal] = useState(false);
  const [openTicketModal, setOpenTicketModal] = useState(false);

  return isFetching ? (
    <div> Loading...</div>
  ) : (
    <div>
      <Header addVendorClick={() => setOpenVendorModal(true)} AddTicketClick={() => setOpenTicketModal(true)} />
      {openVendorModal && <AddVendorModal crossIconClick={() => setOpenVendorModal(false)} />}
      {openTicketModal && <TicketModal crossIconClick={() => setOpenTicketModal(false)} />}
    </div>
  );
}
