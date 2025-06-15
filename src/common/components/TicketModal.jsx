import { CrossIcon } from "@assets/svgs";
import { Button, ModalBody, ModalWrapper } from "@common/components";
import { useEffect } from "react";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function TicketModal({ crossIconClick, success, error, vendors = [], selectedVendor }) {
  const mutation = useMutation({
    mutationFn: async (payload) => {
      await axios.post("http://54.164.99.34//api/ticket/v1/", payload);
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
      vendor: selectedVendor || "",
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
        <h1 className='text-xl font-bold'>Add Ticket Detail</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          {/* VENDOR & DATE */}
          <div className='flex gap-4'>
            <div className='flex flex-col gap-2 w-full'>
              <label htmlFor='vendor'>To</label>
              <select
                name='vendor'
                className='bg-white rounded-md h-12 px-4'
                value={values.vendor}
                onChange={handleChange}
                disabled={Boolean(selectedVendor)}
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
            <div className='flex flex-col gap-2 w-full'>
              <label htmlFor='date'>Date</label>
              <input
                type='date'
                name='date'
                className='max-h-9 bg-white rounded-md h-12 px-4'
                value={values.date}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* TICKETS SECTION */}

          <div>
            <div className='flex gap-2 mb-2'>
              <div className='min-w-10'></div>
              <div className='flex gap-3 w-full'>
                <div className='w-full'>Count</div>
                <div className='w-full'>Rate</div>
                <div className='min-w-[15.1875rem]'>Total</div>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              {/* CHILD */}
              <div className='flex gap-2 items-center'>
                <label className='min-w-10'>Child</label>
                <div className='flex gap-3'>
                  <input
                    type='number'
                    name='childCount'
                    placeholder='Count'
                    className='max-h-9 bg-white rounded-md h-12 px-4 w-full'
                    value={values.childCount}
                    onChange={handleChange}
                  />
                  <input
                    type='number'
                    name='childRate'
                    placeholder='Rate'
                    className='max-h-9 bg-white rounded-md h-12 px-4 w-full'
                    value={values.childRate}
                    onChange={handleChange}
                  />
                  <input
                    type='number'
                    name='childAmount'
                    className='bg-gray-200 rounded-md h-12 px-4 min-w-[15.1875rem] max-h-9'
                    value={values.childAmount}
                    disabled
                  />
                </div>
              </div>

              {/* ADULT */}
              <div className='flex gap-2 items-center'>
                <label className='min-w-10'>Adult</label>
                <div className='flex gap-3'>
                  <input
                    type='number'
                    name='adultCount'
                    placeholder='Count'
                    className='max-h-9 bg-white rounded-md h-12 px-4 w-full'
                    value={values.adultCount}
                    onChange={handleChange}
                  />
                  <input
                    type='number'
                    name='adultRate'
                    placeholder='Rate'
                    className='max-h-9 bg-white rounded-md h-12 px-4 w-full'
                    value={values.adultRate}
                    onChange={handleChange}
                  />
                  <input
                    type='number'
                    name='adultAmount'
                    className='max-h-9 bg-gray-200 rounded-md h-12 px-4 min-w-[15.1875rem]'
                    value={values.adultAmount}
                    disabled
                  />
                </div>
              </div>

              {/* OLD */}
              <div className='flex gap-2 items-center'>
                <label className='min-w-10'>Old</label>
                <div className='flex gap-3'>
                  <input
                    type='number'
                    name='oldCount'
                    placeholder='Count'
                    className='max-h-9 bg-white rounded-md h-12 px-4 w-full'
                    value={values.oldCount}
                    onChange={handleChange}
                  />
                  <input
                    type='number'
                    name='oldRate'
                    placeholder='Rate'
                    className='max-h-9 bg-white rounded-md h-12 px-4 w-full'
                    value={values.oldRate}
                    onChange={handleChange}
                  />
                  <input
                    type='number'
                    name='oldAmount'
                    className='max-h-9 bg-gray-200 rounded-md h-12 px-4 min-w-[15.1875rem]'
                    value={values.oldAmount}
                    disabled
                  />
                </div>
              </div>

              {/* TOTAL */}
              <div className='flex items-center gap-2'>
                <label className='min-w-10'>Total</label>
                <input
                  type='number'
                  name='amount'
                  className='max-h-9 bg-gray-200 rounded-md h-12 px-4 min-w-[15.1875rem]'
                  value={values.amount}
                  disabled
                />
              </div>
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
            <Button
              type='submit'
              className='bg-blue-600 min-w-[3.75rem]'
              title={mutation.isLoading ? "Submitting..." : "Submit"}
            />
            <Button type='button' onClick={crossIconClick} className='bg-red-600' title='Cancel' />
          </div>
        </form>
      </ModalBody>
    </ModalWrapper>
  );
}
