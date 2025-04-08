import { CrossIcon } from "@assets/svgs";
import { Button, ModalBody, ModalWrapper } from "@common/components";
import { useState } from "react";

export function TicketModal({ crossIconClick }) {
  const [formData, setFormData] = useState({
    vendor: "",
    date: "",
    childCount: 0,
    childRate: 0,
    childAmount: 0,
    adultCount: 0,
    adultRate: 0,
    adultAmount: 0,
    oldCount: 0,
    oldRate: 0,
    oldAmount: 0,
    totalAmount: 0,
    description: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      vendor: formData.vendor,
      date: formData.date,
      childCount: formData.childCount,
      childRate: formData.childRate,
      childAmount: formData.childAmount,
      adultCount: formData.adultCount,
      adultRate: formData.adultRate,
      adultAmount: formData.adultAmount,
      oldCount: formData.oldCount,
      oldRate: formData.oldRate,
      oldAmount: formData.oldAmount,
      totalAmount: formData.totalAmount,
      description: formData.description,
      paymentMethod: formData.paymentMethod,
    };

    console.log(data);
    // dataSubmitted();
  };

  return (
    <ModalWrapper>
      <ModalBody className='w-[37.5rem]'>
        <CrossIcon className='absolute top-2 right-2' onClick={crossIconClick} />
        <h1>Add Ticket Detail</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4 pb-4 border-b border-solid border-gray-300'>
            <div className='flex flex-col gap-2'>
              <label for='vendor'>To</label>
              <select name='vendor' id='vendor' className='bg-white rounded-md h-12 px-4' onChange={handleChange}>
                <option value='' disabled hidden>
                  Select an option
                </option>
                <option value='vendor1'>Vendor 1</option>
                <option value='vendor2'>Vendor 2</option>
              </select>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor=''>Date</label>
              <input
                type='date'
                name='date'
                id=''
                placeholder='dd/mm/yyyy'
                className='bg-white rounded-md h-12 px-4'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='flex flex-col gap-6 pb-4 border-b border-solid border-gray-300'>
            <h2>Tickets</h2>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-3 items-center'>
                <label htmlFor=''>Child:</label>
                <input
                  type='number'
                  name='childCount'
                  id=''
                  className='bg-white rounded-md h-12 px-4 w-full'
                  placeholder='count'
                  onChange={handleChange}
                />
                <input
                  type='number'
                  name='childRate'
                  id=''
                  className='bg-white rounded-md h-12 px-4 w-full'
                  placeholder='rate'
                  onChange={handleChange}
                />
              </div>
              <div className='flex gap-3 items-center'>
                <input
                  type='number'
                  name='childAmount'
                  id=''
                  className='bg-gray-200 rounded-md h-12 px-4 w-[15.1875rem]'
                  placeholder='amount'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-3 items-center'>
                <label htmlFor=''>Adult:</label>
                <input
                  type='number'
                  name='adultCount'
                  id=''
                  className='bg-white rounded-md h-12 px-4 w-full'
                  placeholder='count'
                  onChange={handleChange}
                />
                <input
                  type='number'
                  name='adultRate'
                  id=''
                  className='bg-white rounded-md h-12 px-4 w-full'
                  placeholder='rate'
                  onChange={handleChange}
                />
              </div>
              <div className='flex gap-3 items-center'>
                <input
                  type='number'
                  name='adultAmount'
                  id=''
                  className='bg-gray-200 rounded-md h-12 px-4 w-[15.1875rem]'
                  placeholder='amount'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-3 items-center'>
                <label htmlFor=''>Old:</label>
                <input
                  type='number'
                  name='oldCount'
                  id=''
                  className='bg-white rounded-md h-12 px-4 w-full'
                  placeholder='count'
                  onChange={handleChange}
                />
                <input
                  type='number'
                  name='oldRate'
                  id=''
                  className='bg-white rounded-md h-12 px-4 w-full'
                  placeholder='rate'
                  onChange={handleChange}
                />
              </div>
              <div className='flex gap-3 items-center'>
                <input
                  type='number'
                  name='oldAmount'
                  id=''
                  className='bg-gray-200 rounded-md h-12 px-4 w-[15.1875rem]'
                  placeholder='amount'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <label htmlFor=''>Total:</label>
              <input
                type='number'
                name='totalAmount'
                id=''
                className='bg-gray-200 rounded-md h-12 px-4 w-[15.1875rem]'
                placeholder='amount'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label htmlFor=''>Description</label>
              <textarea
                name='description'
                id=''
                className='bg-white rounded-md min-h-[6.25rem] max-h-[6.25rem] p-4'
                placeholder='Enter description'
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='flex flex-col gap-2'>
              <label for='vendor'>Payment Method</label>
              <select
                name='paymentMethod'
                id='vendor'
                className='bg-white rounded-md h-12 px-4'
                onChange={handleChange}
              >
                <option value='' disabled hidden>
                  Select payment method
                </option>
                <option value='vendor1'>Credit</option>
                <option value='vendor2'>Debit</option>
              </select>
            </div>
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
