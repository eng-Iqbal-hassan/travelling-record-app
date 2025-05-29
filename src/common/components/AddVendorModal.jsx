import { CrossIcon } from "@assets/svgs";
import { Button, ModalBody, ModalWrapper } from "@common/components";
import { useFormik } from "formik";
import axios from "axios";

export function AddVendorModal({ crossIconClick, dataAdded }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      company_name: "",
      phone_number: "",
      type: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await axios.post("http://54.164.99.34//api/vendors/create/", values);
        dataAdded();
        crossIconClick();
      } catch (err) {
        console.error("Error submitting vendor:", err);
      }
    },
  });

  const { values, handleChange, handleSubmit } = formik;

  return (
    <ModalWrapper>
      <ModalBody className='w-[600px]'>
        <CrossIcon className='absolute top-2 right-2' onClick={crossIconClick} />
        <h1>Add Vendor</h1>
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
            <label>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Enter Email'
              className='bg-white rounded-md h-12 px-4'
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Company Name</label>
            <input
              type='text'
              name='company_name'
              placeholder='Enter Company Name'
              className='bg-white rounded-md h-12 px-4'
              value={values.company_name}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Mobile Number</label>
            <input
              type='text'
              name='phone_number'
              placeholder='Enter Mobile Number'
              className='bg-white rounded-md h-12 px-4'
              value={values.phone_number}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='type'>Type</label>
            <select
              name='type'
              id='type'
              className='bg-white rounded-md h-12 px-4'
              value={values.type}
              onChange={handleChange}
            >
              <option value='' disabled hidden>
                Select an option
              </option>
              <option value='TIC'>TIC</option>
              <option value='HOT'>HOT</option>
            </select>
          </div>
          <div className='flex gap-3 justify-end'>
            <Button type='submit' className='bg-blue-600 min-w-[3.75rem]' title='Add' />
            <Button type='submit' className='bg-blue-600 min-w-[3.75rem]' title='Update' />
            <Button type='button' onClick={crossIconClick} className='bg-red-600' title='Cancel' />
          </div>
        </form>
      </ModalBody>
    </ModalWrapper>
  );
}
