import React from "react";
import { Button, ModalBody, ModalWrapper } from ".";
import { CrossIcon } from "@assets/svgs";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function VisaModal({ crossIconClick, error, success, vendors = [], selectedVendor }) {
  const mutation = useMutation({
    mutationFn: async (payload) => {
      await axios.post("http://54.164.99.34/api/visa/", payload);
    },
    onSuccess: () => {
      success();
    },
    onError: () => {
      error();
    },
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      passport_number: "",
      voucher_number: "",
      vendor_id: selectedVendor || "",
      pkr_amount: "",
      payment_type: "",
    },
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });
  const { values, handleChange, handleSubmit, setValues } = formik;
  return (
    <ModalWrapper>
      <ModalBody className='w-[600px]'>
        <CrossIcon className='absolute top-2 right-2' onClick={crossIconClick} />
        <h1>Add Visa</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label for='vendor'>Vendor Name</label>
            <select
              name='vendor_id'
              id='vendor_id'
              value={values.vendor_id}
              onChange={handleChange}
              className='bg-white rounded-md h-12 px-4'
              disabled={Boolean(selectedVendor)}
            >
              <option value='' disabled hidden>
                Select a vendor
              </option>
              {vendors.map((vendor) => (
                <option key={vendor.id} value={vendor.id}>
                  {vendor.name}
                </option>
              ))}
            </select>
          </div>
          <div className='flex flex-col gap-2'>
            <label for='name'>Visa Holder</label>
            <input
              type='text'
              name='name'
              placeholder='Enter Name'
              className='bg-white rounded-md h-12 px-4'
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label for='passport_number'>passport Number</label>
            <input
              type='text'
              name='passport_number'
              placeholder='Enter passport Number'
              className='bg-white rounded-md h-12 px-4'
              value={values.passport_number}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label for='voucher_number'>voucher Number</label>
            <input
              type='text'
              name='voucher_number'
              placeholder='Enter Voucher Number'
              className='bg-white rounded-md h-12 px-4'
              value={values.voucher_number}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label for='pkr_amount'>Amount(pkr)</label>
            <input
              type='number'
              name='pkr_amount'
              placeholder='Enter Amount'
              className='bg-white rounded-md h-12 px-4'
              value={values.pkr_amount}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-1 flex-col gap-2'>
            <label for='payment_type'>payment Type</label>
            <select
              name='payment_type'
              id='payment_type'
              value={values.payment_type}
              onChange={handleChange}
              className='bg-white rounded-md h-12 px-4'
            >
              <option value='' disabled hidden>
                Select payment Type
              </option>
              <option value='credit'>Credit</option>
              <option value='debit'>Debit</option>
            </select>
          </div>
          <div className='flex gap-3 justify-end'>
            <Button
              type='submit'
              className='bg-blue-600 min-w-[3.75rem]'
              title={mutation.isLoading ? "Submitting..." : "Submit"}
            />
            <Button onClick={crossIconClick} type='button' className='bg-red-600' title='Cancel' />
          </div>
        </form>
      </ModalBody>
    </ModalWrapper>
  );
}
