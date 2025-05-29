import { AddVendorModal, Button, Header, VendorTable } from "@common/components";
import { useHome } from "@pages/home";
import axios from "axios";
import { useEffect, useState } from "react";

export function Home() {
  const { data, isFetching, onClickTitle } = useHome();
  const [openVendorModal, setOpenVendorModal] = useState(false);
  const [vendor, setVendor] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://54.164.99.34//api/vendors/");
      const data = response.data.vendors;
      setVendor(data);
    } catch (err) {
      console.error("error fetching data", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCloseVendorModal = () => {
    setOpenVendorModal(false);
    fetchData(); // Refresh vendor list after closing
  };

  return isFetching ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Header />
      <div className='flex flex-col gap-5 py-4 px-8'>
        <div className='flex justify-between items-center'>
          <h2>Vendor</h2>
          <Button className='bg-[#000080]' title='Add Vendor' onClick={() => setOpenVendorModal(true)} />
        </div>
        <VendorTable vendor={vendor} />
      </div>
      {openVendorModal && (
        <AddVendorModal crossIconClick={() => setOpenVendorModal(false)} dataAdded={handleCloseVendorModal} />
      )}
    </div>
  );
}
