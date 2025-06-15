import { AddEditVendorModal, Button, DeleteModal, Header, VendorTable } from "@common/components";
import { useHome } from "@pages/home";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function Home() {
  const { data, isFetching, onClickTitle } = useHome();
  const [vendor, setVendor] = useState([]);
  const [editVendorData, setEditVendorData] = useState(null);
  const [openVendorModal, setOpenVendorModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteVendorId, setDeleteVendorId] = useState(null);

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
    setEditVendorData(null);
    setOpenVendorModal(false);
  };

  const dataAdded = () => {
    setEditVendorData(null);
    setOpenVendorModal(false);
    fetchData();
  };

  const handleCloseDeleteModal = () => {
    setDeleteVendorId(null);
    setOpenDeleteModal(false);
  };

  const handleUpdateClick = (vendorItem) => {
    setEditVendorData(vendorItem);
    setOpenVendorModal(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteVendorId(id);
    setOpenDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`http://54.164.99.34//api/vendors/${deleteVendorId}/delete/`);
      toast.success("Vendor deleted successfully!");
      fetchData(); // Refresh vendor list
      setOpenDeleteModal(false);
      setDeleteVendorId(null);
    } catch (err) {
      toast.error("Failed to delete vendor. Please try again.");
      console.error("Error deleting vendor", err);
    }
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
        <VendorTable vendor={vendor} onUpdate={handleUpdateClick} handleDelete={handleDeleteClick} />
      </div>
      {openVendorModal && (
        <AddEditVendorModal
          crossIconClick={handleCloseVendorModal}
          dataAdded={dataAdded}
          initialData={editVendorData}
        />
      )}
      {openDeleteModal && deleteVendorId && (
        <DeleteModal confirmDelete={handleConfirmDelete} crossIconClick={handleCloseDeleteModal} />
      )}
    </div>
  );
}
