import { CrossIcon } from "@assets/svgs";
import { Button, ModalBody, ModalWrapper } from "@common/components";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";

export function AddReservationModal({ crossIconClick, error, success, vendors = [] }) {
  const credit = "credit";
  const debit = "debit";
  const mutation = useMutation({
    mutationFn: async (payload) => {
      await axios.post("http://54.164.99.34//api/hotels/", payload);
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
      vendor: "",
      checked_in: "",
      checked_out: "",
      name: "",
      reservation_no: "",
      guest_name: "",
      view: "",
      nts: 0,
      single: 0,
      double: 0,
      triple: 0,
      quadratic: 0,
      singleRate: 0,
      doubleRate: 0,
      tripleRate: 0,
      quadraticRate: 0,
      roomAmount: 0,
      breakfast: 0,
      lunch: 0,
      dinner: 0,
      breakfastRate: 0,
      lunchRate: 0,
      dinnerRate: 0,
      mealAmount: 0,
      pkr_amount: 0,
      payment_type: "",
    },
    onSubmit: (values) => {
      const {
        vendor,
        checked_in,
        checked_out,
        name,
        reservation_no,
        guest_name,
        nts,
        single,
        double,
        triple,
        quadratic,
        singleRate,
        doubleRate,
        tripleRate,
        quadraticRate,
        breakfast,
        lunch,
        dinner,
        breakfastRate,
        lunchRate,
        dinnerRate,
        pkr_amount,
        payment_type,
      } = values;
      const roomsArray = [
        { type: 1, count: single, rate_per_night: singleRate },
        { type: 2, count: double, rate_per_night: doubleRate },
        { type: 3, count: triple, rate_per_night: tripleRate },
        { type: 4, count: quadratic, rate_per_night: quadraticRate },
      ].filter((room) => room.count > 0);

      const mealsArray = [
        { type: "BF", count: breakfast, rate_per_night: breakfastRate },
        { type: "LU", count: lunch, rate_per_night: lunchRate },
        { type: "DI", count: dinner, rate_per_night: dinnerRate },
      ].filter((meal) => meal.count > 0);

      const payload = {
        vendor: vendor,
        checked_in,
        checked_out,
        dollar_price: 120,
        guest_name,
        meals: mealsArray,
        name,
        nts,
        pkr_amount,
        reservation_no,
        riyal_price: 90,
        rooms: roomsArray,
        temp_reservation_no: reservation_no,
        payment_type: payment_type,
      };
      mutation.mutate(payload);
      console.log(payload);
    },
  });
  const { values, handleChange, handleSubmit, setFieldValue } = formik;

  useEffect(() => {
    const roomAmount =
      +values.single * +values.singleRate * +values.nts +
      +values.double * +values.doubleRate * +values.nts +
      +values.triple * +values.tripleRate * +values.nts +
      +values.quadratic * +values.quadraticRate * +values.nts;
    const mealAmount =
      +values.breakfast * +values.breakfastRate * +values.nts +
      +values.lunch * +values.lunchRate * +values.nts +
      +values.dinner * +values.dinnerRate * +values.nts;
    const pkr_amount = roomAmount + mealAmount;

    setFieldValue("roomAmount", roomAmount);
    setFieldValue("mealAmount", mealAmount);
    setFieldValue("pkr_amount", pkr_amount);
  }, [
    values.single,
    values.singleRate,
    values.double,
    values.doubleRate,
    values.triple,
    values.tripleRate,
    values.quadratic,
    values.quadraticRate,
    values.breakfast,
    values.breakfastRate,
    values.lunch,
    values.lunchRate,
    values.dinner,
    values.dinnerRate,
    values.nts,
  ]);

  return (
    <ModalWrapper>
      <ModalBody className='w-[75rem]'>
        <CrossIcon className='absolute top-2 right-2' onClick={crossIconClick} />
        <h1>Add Reservation</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className='flex'>
            <div className='flex flex-col gap-4 border-r border-solid border-gray-300 pr-6 flex-1'>
              <div className='flex flex-col gap-2'>
                <label for='vendor'>To</label>
                <select
                  name='vendor'
                  id='vendor'
                  value={values.vendor}
                  onChange={handleChange}
                  className='bg-white rounded-md h-12 px-4'
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
              <div className='flex gap-2'>
                <div className='flex flex-col gap-2 flex-1'>
                  <label htmlFor=''>Checked In</label>
                  <input
                    type='date'
                    name='checked_in'
                    id='checked_in'
                    value={values.checked_in}
                    onChange={handleChange}
                    placeholder='dd/mm/yyyy'
                    className='bg-white rounded-md h-12 px-4 w-full'
                  />
                </div>
                <div className='flex flex-col gap-2 flex-1'>
                  <label htmlFor=''>Checked Out</label>
                  <input
                    type='date'
                    name='checked_out'
                    id='checked_out'
                    value={values.checked_out}
                    onChange={handleChange}
                    placeholder='dd/mm/yyyy'
                    className='bg-white rounded-md h-12 px-4 w-full'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor=''>Hotel Name</label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={values.name}
                  onChange={handleChange}
                  placeholder='Enter Hotel Name'
                  className='bg-white rounded-md h-12 px-4'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='reservation_no' className='text-black'>
                  Reservation Number
                </label>
                <input
                  type='text'
                  name='reservation_no'
                  id='reservation_no'
                  value={values.reservation_no}
                  onChange={handleChange}
                  placeholder='Enter Reservation Number'
                  className='bg-white rounded-md h-12 px-4'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='guest_name' className='text-black'>
                  Guest Name
                </label>
                <input
                  type='text'
                  name='guest_name'
                  id='guest_name'
                  value={values.guest_name}
                  onChange={handleChange}
                  placeholder='Enter Guest Name'
                  className='bg-white rounded-md h-12 px-4'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='view' className='text-black'>
                  View
                </label>
                <input
                  type='text'
                  name='view'
                  id='view'
                  value={values.view}
                  onChange={handleChange}
                  placeholder='Enter View'
                  className='bg-white rounded-md h-12 px-4'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='nts' className='text-black'>
                  NTS
                </label>
                <input
                  type='number'
                  name='nts'
                  id='nts'
                  value={values.nts}
                  onChange={handleChange}
                  placeholder='Enter NTS'
                  className='bg-white rounded-md h-12 px-4'
                />
              </div>
            </div>
            <div className='flex flex-col gap-4 pl-6 flex-1'>
              <div className='flex gap-8 items-center'>
                <h2 className='min-w-[2.625rem]'>Room</h2>
                <div className='flex flex-col gap-4'>
                  <div className='flex gap-2'>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor='single'>SGL</label>
                      <input
                        type='number'
                        name='single'
                        id='single'
                        value={values.single}
                        onChange={handleChange}
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor='double'>DBL</label>
                      <input
                        type='number'
                        name='double'
                        id='double'
                        value={values.double}
                        onChange={handleChange}
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor='triple'>TRL</label>
                      <input
                        type='number'
                        name='triple'
                        id='triple'
                        value={values.triple}
                        onChange={handleChange}
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor='quadratic'>QUAD</label>
                      <input
                        type='number'
                        name='quadratic'
                        id='quadratic'
                        value={values.quadratic}
                        onChange={handleChange}
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor='singleRate'>SGL Rate</label>
                      <input
                        type='number'
                        name='singleRate'
                        id='singleRate'
                        value={values.singleRate}
                        onChange={handleChange}
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor='doubleRate'>DBL Rate</label>
                      <input
                        type='number'
                        name='doubleRate'
                        id='doubleRate'
                        value={values.doubleRate}
                        onChange={handleChange}
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor='tripleRate'>TRL Rate</label>
                      <input
                        type='number'
                        name='tripleRate'
                        id='tripleRate'
                        value={values.tripleRate}
                        onChange={handleChange}
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor='quadraticRate'>QUAD Rate</label>
                      <input
                        type='number'
                        name='quadraticRate'
                        id='quadraticRate'
                        value={values.quadraticRate}
                        onChange={handleChange}
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex gap-8 items-center'>
                <h2 className='min-w-[2.625rem]'>Meal</h2>
                <div className='flex flex-col gap-4'>
                  <div className='flex gap-2'>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor='breakfast'>BF</label>
                      <input
                        type='number'
                        name='breakfast'
                        id='breakfast'
                        value={values.breakfast}
                        onChange={handleChange}
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor='lunch'>LU</label>
                      <input
                        type='number'
                        name='lunch'
                        id='lunch'
                        value={values.lunch}
                        onChange={handleChange}
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor='dinner'>DN</label>
                      <input
                        type='number'
                        name='dinner'
                        id='dinner'
                        value={values.dinner}
                        onChange={handleChange}
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor='breakfastRate'>BF Rate</label>
                      <input
                        type='number'
                        name='breakfastRate'
                        id='breakfastRate'
                        value={values.breakfastRate}
                        onChange={handleChange}
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor='lunchRate'>LU Rate</label>
                      <input
                        type='number'
                        name='lunchRate'
                        id='lunchRate'
                        value={values.lunchRate}
                        onChange={handleChange}
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor='dinnerRate'>DN Rate</label>
                      <input
                        type='number'
                        name='dinnerRate'
                        id='dinnerRate'
                        value={values.dinnerRate}
                        onChange={handleChange}
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex gap-2'>
                <div className='flex flex-1 flex-col gap-2'>
                  <label htmlFor='roomAmount' className='text-black'>
                    Total Room Amount
                  </label>
                  <input
                    type='number'
                    name='roomAmount'
                    id='roomAmount'
                    value={values.roomAmount}
                    disabled
                    placeholder='Enter Amount'
                    className='bg-white rounded-md h-12 px-4'
                  />
                </div>
                <div className='flex flex-1 flex-col gap-2'>
                  <label htmlFor='mealAmount' className='text-black'>
                    Total Meal Amount
                  </label>
                  <input
                    type='number'
                    name='mealAmount'
                    id='mealAmount'
                    value={values.mealAmount}
                    disabled
                    placeholder='Enter Amount'
                    className='bg-white rounded-md h-12 px-4'
                  />
                </div>
              </div>
              <div className='flex flex-1 flex-col gap-2'>
                <label htmlFor='pkr_amount' className='text-black'>
                  Enter Payment Amount
                </label>
                <input
                  type='text'
                  name='pkr_amount'
                  id='pkr_amount'
                  value={values.pkr_amount}
                  disabled
                  placeholder='Enter Amount'
                  className='bg-white rounded-md h-12 px-4'
                />
              </div>
              <div className='flex flex-1 flex-col gap-2'>
                <label for='payment_type'>Payment Type</label>
                <select
                  name='payment_type'
                  id='payment_type'
                  value={values.payment_type}
                  onChange={handleChange}
                  className='bg-white rounded-md h-12 px-4'
                >
                  <option value='' disabled hidden>
                    Select Payment Type
                  </option>
                  <option value={credit}>Credit</option>
                  <option value={debit}>Debit</option>
                </select>
              </div>
            </div>
          </div>
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
