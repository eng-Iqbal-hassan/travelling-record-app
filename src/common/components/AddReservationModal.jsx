import { CrossIcon } from "@assets/svgs";
import { Button, ModalBody, ModalWrapper } from "@common/components";
import { useFormik } from "formik";
import { values } from "lodash";

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
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { values, handleChange, handleSubmit } = formik;
  return (
    <ModalWrapper>
      <ModalBody className='w-[75rem]'>
        <CrossIcon className='absolute top-2 right-2' onClick={crossIconClick} />
        <h1>Add Reservation</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className='flex'>
            <div className='flex flex-col gap-4 border-r border-solid border-gray-300 pr-6 flex-1'>
              <div className='flex flex-col gap-2'>
                <label for='type'>To</label>
                <select name='vendor' id='vendor' className='bg-white rounded-md h-12 px-4'>
                  <option value={values.vendor} onChange={handleChange} disabled hidden>
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
                      <label htmlFor=''>SGL</label>
                      <input
                        type='number'
                        name=''
                        id=''
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor=''>DBL</label>
                      <input
                        type='number'
                        name=''
                        id=''
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor=''>TRL</label>
                      <input
                        type='number'
                        name=''
                        id=''
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor=''>QUAD</label>
                      <input
                        type='number'
                        name=''
                        id=''
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor=''>SGL Rate</label>
                      <input
                        type='number'
                        name=''
                        id=''
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor=''>DBL Rate</label>
                      <input
                        type='number'
                        name=''
                        id=''
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor=''>TRL Rate</label>
                      <input
                        type='number'
                        name=''
                        id=''
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor=''>QUAD Rate</label>
                      <input
                        type='number'
                        name=''
                        id=''
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
                      <label htmlFor=''>BF</label>
                      <input
                        type='number'
                        name=''
                        id=''
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor=''>LU</label>
                      <input
                        type='number'
                        name=''
                        id=''
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor=''>DN</label>
                      <input
                        type='number'
                        name=''
                        id=''
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor=''>BF Rate</label>
                      <input
                        type='number'
                        name=''
                        id=''
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor=''>LU Rate</label>
                      <input
                        type='number'
                        name=''
                        id=''
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor=''>DN Rate</label>
                      <input
                        type='number'
                        name=''
                        id=''
                        placeholder='Enter'
                        className='bg-white rounded-md h-12 px-4 w-full'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex gap-2'>
                <div className='flex flex-1 flex-col gap-2'>
                  <label htmlFor='' className='text-black'>
                    Total Room Amount
                  </label>
                  <input
                    type='number'
                    name=''
                    id=''
                    placeholder='Enter Amount'
                    className='bg-white rounded-md h-12 px-4'
                  />
                </div>
                <div className='flex flex-1 flex-col gap-2'>
                  <label htmlFor='' className='text-black'>
                    Total Meal Amount
                  </label>
                  <input
                    type='number'
                    name=''
                    id=''
                    placeholder='Enter Amount'
                    className='bg-white rounded-md h-12 px-4'
                  />
                </div>
              </div>
              <div className='flex flex-1 flex-col gap-2'>
                <label htmlFor='' className='text-black'>
                  Enter Payment Amount
                </label>
                <input type='text' name='' id='' placeholder='Enter Amount' className='bg-white rounded-md h-12 px-4' />
              </div>
              <div className='flex flex-1 flex-col gap-2'>
                <label for='type'>Payment Type</label>
                <select name='type' id='type' className='bg-white rounded-md h-12 px-4'>
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
            <Button className='bg-blue-600 min-w-[3.75rem]' title='Add' />
            <Button className='bg-red-600' title='Cancel' />
          </div>
        </form>
      </ModalBody>
    </ModalWrapper>
  );
}
