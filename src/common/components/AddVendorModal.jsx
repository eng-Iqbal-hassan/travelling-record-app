import { CrossIcon } from "@assets/svgs";
import { Button, ModalBody, ModalWrapper } from "@common/components";
import { useFormik } from "formik";

export function AddVendorModal({ crossIconClick, dataSubmitted }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      companyName: "",
      phoneNumber: "",
      type: "",
    },
    onSubmit: (values) => {
      console.log(values);
      submitted();
    },
  });
  const { values, handleChange, handleSubmit } = formik;

  return (
    <ModalWrapper>
      <ModalBody className='w-[600px]'>
        <CrossIcon className='absolute top-2 right-2' onClick={crossIconClick} />
        <h1>Add Vendor</h1>
        <form className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor=''>Name</label>
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
            <label htmlFor='' className='text-black'>
              Email
            </label>
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
            <label htmlFor='' className='text-black'>
              company Name
            </label>
            <input
              type='text'
              name='companyName'
              placeholder='Enter company Name'
              className='bg-white rounded-md h-12 px-4'
              value={values.companyName}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='text-black'>
              Mobile Number
            </label>
            <input
              type='number'
              name='phoneNumber
'
              placeholder='Enter Mobile Number'
              className='bg-white rounded-md h-12 px-4'
              value={values.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label for='type'>Type</label>
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
              <option value='ticket'>Ticket</option>
              <option value='ticket'>Hotel</option>
            </select>
          </div>
          <div className='flex gap-3 justify-end'>
            <Button type='submit' className='bg-blue-600 min-w-[3.75rem]' title='Add' />
            <Button className='bg-red-600' title='Cancel' />
          </div>
        </form>
      </ModalBody>
    </ModalWrapper>
  );
}
