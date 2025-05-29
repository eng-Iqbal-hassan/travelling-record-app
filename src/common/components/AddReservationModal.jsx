import { CrossIcon } from "@assets/svgs";
import { Button, ModalBody, ModalWrapper } from "@common/components";
import { useFormik } from "formik";
import { useEffect } from "react";

export function AddReservationModal({ crossIconClick }) {
  const formik = useFormik({
    initialValues: {
      vendor: "",
      checkedInDate: "",
      checkedOutDate: "",
      hotelName: "",
      reservationNumber: "",
      guestName: "",
      view: "",
      nights: 0,
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
      totalAmount: 0,
      paymentType: "",
    },
    onSubmit: (values) => {
      console.log(values);
      submitted();
    },
  });
  const { values, handleChange, handleSubmit, setFieldValue } = formik;

  useEffect(() => {
    const roomAmount =
      +values.single * +values.singleRate +
      +values.double * +values.doubleRate +
      +values.triple * +values.tripleRate +
      +values.quadratic * +values.quadraticRate;
    const mealAmount =
      +values.breakfast * +values.breakfastRate +
      +values.lunch * +values.lunchRate +
      +values.dinner * +values.dinnerRate;
    const totalAmount = roomAmount + mealAmount;

    setFieldValue("roomAmount", roomAmount);
    setFieldValue("mealAmount", mealAmount);
    setFieldValue("totalAmount", totalAmount);
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
                  <option value='vendor1'>Vendor 1</option>
                  <option value='vendor2'>Vendor 2</option>
                </select>
              </div>
              <div className='flex gap-2'>
                <div className='flex flex-col gap-2 flex-1'>
                  <label htmlFor=''>Checked In</label>
                  <input
                    type='date'
                    name='checkedInDate'
                    id='checkedInDate'
                    value={values.checkedInDate}
                    onChange={handleChange}
                    placeholder='dd/mm/yyyy'
                    className='bg-white rounded-md h-12 px-4 w-full'
                  />
                </div>
                <div className='flex flex-col gap-2 flex-1'>
                  <label htmlFor=''>Checked Out</label>
                  <input
                    type='date'
                    name='checkedOutDate'
                    id='checkedOutDate'
                    value={values.checkedOutDate}
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
                  name='hotelName'
                  id='hotelName'
                  value={values.hotelName}
                  onChange={handleChange}
                  placeholder='Enter Hotel Name'
                  className='bg-white rounded-md h-12 px-4'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='reservationNumber' className='text-black'>
                  Reservation Number
                </label>
                <input
                  type='text'
                  name='reservationNumber'
                  id='reservationNumber'
                  value={values.reservationNumber}
                  onChange={handleChange}
                  placeholder='Enter Reservation Number'
                  className='bg-white rounded-md h-12 px-4'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='guestName' className='text-black'>
                  Guest Name
                </label>
                <input
                  type='text'
                  name='guestName'
                  id='guestName'
                  value={values.guestName}
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
                <label htmlFor='nights' className='text-black'>
                  NTS
                </label>
                <input
                  type='number'
                  name='nights'
                  id='nights'
                  value={values.nights}
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
                        value={values.handleChange}
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
                <label htmlFor='totalAmount' className='text-black'>
                  Enter Payment Amount
                </label>
                <input
                  type='text'
                  name='totalAmount'
                  id='totalAmount'
                  value={values.totalAmount}
                  disabled
                  placeholder='Enter Amount'
                  className='bg-white rounded-md h-12 px-4'
                />
              </div>
              <div className='flex flex-1 flex-col gap-2'>
                <label for='paymentType'>Payment Type</label>
                <select
                  name='paymentType'
                  id='paymentType'
                  value={values.paymentType}
                  onChange={handleChange}
                  className='bg-white rounded-md h-12 px-4'
                >
                  <option value='' disabled hidden>
                    Select Payment Type
                  </option>
                  <option value='vendor1'>Card</option>
                  <option value='vendor2'>Cash</option>
                </select>
              </div>
            </div>
          </div>
          <div className='flex gap-3 justify-end'>
            <Button type='submit' className='bg-blue-600 min-w-[3.75rem]' title='Add' />
            <Button type='button' onClick={crossIconClick} className='bg-red-600' title='Cancel' />
          </div>
        </form>
      </ModalBody>
    </ModalWrapper>
  );
}
