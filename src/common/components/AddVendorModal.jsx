import { CrossIcon } from "@assets/svgs";
import { Button, ModalBody, ModalWrapper } from "@common/components";
import { useState } from "react";

export function AddVendorModal({ crossIconClick, dataSubmitted }) {
  // const [form, setForm] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState("");

  // const handleChange = (key) => (e) => {
  //   const value = e.target.value;
  //   setForm({ ...form, [key]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      company,
      number,
      type,
    };

    console.log(data);
    dataSubmitted();
  };

  return (
    <ModalWrapper>
      <ModalBody className='w-[600px]'>
        <CrossIcon className='absolute top-2 right-2' onClick={crossIconClick} />
        <h1>Add Vendor</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor=''>Name</label>
            <input
              type='text'
              name=''
              id=''
              placeholder='Enter Name'
              className='bg-white rounded-md h-12 px-4'
              onChange={(e) => setName(e.target.value)}
              // onChange={handleChange("name")}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='text-black'>
              Email
            </label>
            <input
              type='email'
              name=''
              id=''
              // value={form?.email}
              placeholder='Enter Email'
              className='bg-white rounded-md h-12 px-4'
              onChange={(e) => setEmail(e.target.value)}
              // onChange={handleChange("email")}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='text-black'>
              Company Name
            </label>
            <input
              type='text'
              name=''
              id=''
              placeholder='Enter Company Name'
              className='bg-white rounded-md h-12 px-4'
              onChange={(e) => setCompany(e.target.value)}
              // onChange={handleChange("company")}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='text-black'>
              Mobile Number
            </label>
            <input
              type='number'
              name=''
              id=''
              placeholder='Enter Mobile Number'
              className='bg-white rounded-md h-12 px-4'
              onChange={(e) => setNumber(e.target.value)}
              // onChange={handleChange("number")}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label for='type'>Type</label>
            <select
              name='type'
              id='type'
              className='bg-white rounded-md h-12 px-4'
              onChange={(e) => setType(e.target.value)}
              // onChange={handleChange("type")}
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
