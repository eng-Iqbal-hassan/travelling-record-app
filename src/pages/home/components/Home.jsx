import { AddVendorModal, Header } from "@common/components";
import { useHome } from "@pages/home";
import { useState } from "react";

export function Home() {
  const { data, isFetching, onClickTitle } = useHome();
  const [openVendorModal, setOpenVendorModal] = useState(false);

  return isFetching ? (
    <div> Loading...</div>
  ) : (
    <div>
      <Header addVendorClick={() => setOpenVendorModal(true)} />
      {openVendorModal && <AddVendorModal crossIconClick={() => setOpenVendorModal(false)} />}
    </div>
  );
}
