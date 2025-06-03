import React from "react";
import { Button, ModalBody, ModalWrapper } from ".";
import { CrossIcon } from "@assets/svgs";
import { useFormik } from "formik";

export function VisaModal({ crossIconClick }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      passport: "",
      voucher: "",
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
            <label>Name</label>
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
            <label>Passport Number</label>
            <input
              type='number'
              name='passport'
              placeholder='Enter Passport Number'
              className='bg-white rounded-md h-12 px-4'
              value={values.passport}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Voucher Number</label>
            <input
              type='number'
              name='voucher'
              placeholder='Enter Voucher Number'
              className='bg-white rounded-md h-12 px-4'
              value={values.voucher}
              onChange={handleChange}
            />
          </div>
          <div className='flex gap-3 justify-end'>
            <Button type='submit' className='bg-blue-600 min-w-[3.75rem]' title='Add' />
            <Button onClick={crossIconClick} type='button' className='bg-red-600' title='Cancel' />
          </div>
        </form>
      </ModalBody>
    </ModalWrapper>
  );
}
