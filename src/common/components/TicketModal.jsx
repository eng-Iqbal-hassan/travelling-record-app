import { CrossIcon } from "@assets/svgs";
import { Button, ModalBody, ModalWrapper } from "@common/components";
import { useEffect } from "react";
import { useFormik } from "formik";
import { date } from "yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function TicketModal({ crossIconClick, success, vendors = [] }) {
  const mutation = useMutation({
    mutationFn: async (payload) => {
      await axios.post("http://54.164.99.34//api/ticket/v1/", payload);
    },
    onSuccess: () => {
      success();
    },
  });
  const formik = useFormik({
    initialValues: {
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
      amount: 0,
      description: "",
      payment_type: "",
    },
    onSubmit: (values) => {
      const { vendor, date, amount, description, payment_type } = values;
      const payload = {
        amount,
        date,
        description,
        dollar_price: 200,
        payment_type,
        riyal_price: 80,
        vendor,
      };
      mutation.mutate(payload);
    },
  });

  const { values, handleChange, setFieldValue, handleSubmit } = formik;

  useEffect(() => {
    const childAmount = +values.childCount * +values.childRate;
    const adultAmount = +values.adultCount * +values.adultRate;
    const oldAmount = +values.oldCount * +values.oldRate;
    const amount = childAmount + adultAmount + oldAmount;

    setFieldValue("childAmount", childAmount);
    setFieldValue("adultAmount", adultAmount);
    setFieldValue("oldAmount", oldAmount);
    setFieldValue("amount", amount);
  }, [values.childCount, values.childRate, values.adultCount, values.adultRate, values.oldCount, values.oldRate]);

  return (
    <ModalWrapper>
      <ModalBody className='w-[37.5rem]'>
        <CrossIcon className='absolute top-2 right-2' onClick={crossIconClick} />
        <h1>Add Ticket Detail</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          {/* VENDOR & DATE */}
          <div className='flex flex-col gap-4 pb-4 border-b border-solid border-gray-300'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='vendor'>To</label>
              <select
                name='vendor'
                className='bg-white rounded-md h-12 px-4'
                value={values.vendor}
                onChange={handleChange}
              >
                <option value='' disabled hidden>
                  Select an option
                </option>
                {vendors.map((vendor) => (
                  <option key={vendor.id} value={vendor.id}>
                    {vendor.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='date'>Date</label>
              <input
                type='date'
                name='date'
                className='bg-white rounded-md h-12 px-4'
                value={values.date}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* TICKETS SECTION */}
          <div className='flex flex-col gap-6 pb-4 border-b border-solid border-gray-300'>
            <h2>Tickets</h2>

            {/* CHILD */}
            <div className='flex flex-col gap-2'>
              <label>Child</label>
              <div className='flex gap-3'>
                <input
                  type='number'
                  name='childCount'
                  placeholder='Count'
                  className='bg-white rounded-md h-12 px-4 w-full'
                  value={values.childCount}
                  onChange={handleChange}
                />
                <input
                  type='number'
                  name='childRate'
                  placeholder='Rate'
                  className='bg-white rounded-md h-12 px-4 w-full'
                  value={values.childRate}
                  onChange={handleChange}
                />
              </div>
              <input
                type='number'
                name='childAmount'
                className='bg-gray-200 rounded-md h-12 px-4 w-[15.1875rem]'
                value={values.childAmount}
                disabled
              />
            </div>

            {/* ADULT */}
            <div className='flex flex-col gap-2'>
              <label>Adult</label>
              <div className='flex gap-3'>
                <input
                  type='number'
                  name='adultCount'
                  placeholder='Count'
                  className='bg-white rounded-md h-12 px-4 w-full'
                  value={values.adultCount}
                  onChange={handleChange}
                />
                <input
                  type='number'
                  name='adultRate'
                  placeholder='Rate'
                  className='bg-white rounded-md h-12 px-4 w-full'
                  value={values.adultRate}
                  onChange={handleChange}
                />
              </div>
              <input
                type='number'
                name='adultAmount'
                className='bg-gray-200 rounded-md h-12 px-4 w-[15.1875rem]'
                value={values.adultAmount}
                disabled
              />
            </div>

            {/* OLD */}
            <div className='flex flex-col gap-2'>
              <label>Old</label>
              <div className='flex gap-3'>
                <input
                  type='number'
                  name='oldCount'
                  placeholder='Count'
                  className='bg-white rounded-md h-12 px-4 w-full'
                  value={values.oldCount}
                  onChange={handleChange}
                />
                <input
                  type='number'
                  name='oldRate'
                  placeholder='Rate'
                  className='bg-white rounded-md h-12 px-4 w-full'
                  value={values.oldRate}
                  onChange={handleChange}
                />
              </div>
              <input
                type='number'
                name='oldAmount'
                className='bg-gray-200 rounded-md h-12 px-4 w-[15.1875rem]'
                value={values.oldAmount}
                disabled
              />
            </div>

            {/* TOTAL */}
            <div className='flex flex-col gap-2'>
              <label>Total</label>
              <input
                type='number'
                name='amount'
                className='bg-gray-200 rounded-md h-12 px-4 w-[15.1875rem]'
                value={values.amount}
                disabled
              />
            </div>
          </div>

          {/* DESCRIPTION & PAYMENT */}
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='description'>Description</label>
              <textarea
                name='description'
                className='bg-white rounded-md min-h-[6.25rem] max-h-[6.25rem] p-4'
                placeholder='Enter description'
                value={values.description}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='payment_type'>Payment Method</label>
              <select
                name='payment_type'
                className='bg-white rounded-md h-12 px-4'
                value={values.payment_type}
                onChange={handleChange}
              >
                <option value='' disabled hidden>
                  Select payment method
                </option>
                <option value='credit'>Credit</option>
                <option value='debit'>Debit</option>
              </select>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className='flex gap-3 justify-end'>
            <Button type='submit' className='bg-blue-600 min-w-[3.75rem]' title='Add' />
            <Button type='button' onClick={crossIconClick} className='bg-red-600' title='Cancel' />
          </div>
        </form>
      </ModalBody>
    </ModalWrapper>
  );
}
