import { CrossIcon } from "@assets/svgs";
import { Button, ModalBody, ModalWrapper } from "@common/components";

export function AddReservationModal({ crossIconClick }) {
  return (
    <ModalWrapper>
      <ModalBody className='w-[75rem]'>
        <CrossIcon className='absolute top-2 right-2' onClick={crossIconClick} />
        <h1>Add Reservation</h1>
        <form action='' className='flex flex-col gap-4'>
          <div className='flex'>
            <div className='flex flex-col gap-4 border-r border-solid border-gray-300 pr-6 flex-1'>
              <div className='flex flex-col gap-2'>
                <label for='type'>To</label>
                <select name='type' id='type' className='bg-white rounded-md h-12 px-4'>
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
                    name=''
                    id=''
                    placeholder='dd/mm/yyyy'
                    className='bg-white rounded-md h-12 px-4 w-full'
                  />
                </div>
                <div className='flex flex-col gap-2 flex-1'>
                  <label htmlFor=''>Checked Out</label>
                  <input
                    type='date'
                    name=''
                    id=''
                    placeholder='dd/mm/yyyy'
                    className='bg-white rounded-md h-12 px-4 w-full'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor=''>Hotel Name</label>
                <input
                  type='text'
                  name=''
                  id=''
                  placeholder='Enter Hotel Name'
                  className='bg-white rounded-md h-12 px-4'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='' className='text-black'>
                  Reservation Number
                </label>
                <input
                  type='text'
                  name=''
                  id=''
                  placeholder='Enter Reservation Number'
                  className='bg-white rounded-md h-12 px-4'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='' className='text-black'>
                  Guest Name
                </label>
                <input
                  type='text'
                  name=''
                  id=''
                  placeholder='Enter Guest Name'
                  className='bg-white rounded-md h-12 px-4'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='' className='text-black'>
                  View
                </label>
                <input type='number' name='' id='' placeholder='Enter View' className='bg-white rounded-md h-12 px-4' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='' className='text-black'>
                  NTS
                </label>
                <input type='number' name='' id='' placeholder='Enter NTS' className='bg-white rounded-md h-12 px-4' />
              </div>
            </div>
            <div className='flex flex-col gap-4 pl-6 flex-1'>
              <div className='flex flex-col gap-2'>
                <label for='type'>To</label>
                <select name='type' id='type' className='bg-white rounded-md h-12 px-4'>
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
                    name=''
                    id=''
                    placeholder='dd/mm/yyyy'
                    className='bg-white rounded-md h-12 px-4 w-full'
                  />
                </div>
                <div className='flex flex-col gap-2 flex-1'>
                  <label htmlFor=''>Checked Out</label>
                  <input
                    type='date'
                    name=''
                    id=''
                    placeholder='dd/mm/yyyy'
                    className='bg-white rounded-md h-12 px-4 w-full'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor=''>Hotel Name</label>
                <input
                  type='text'
                  name=''
                  id=''
                  placeholder='Enter Hotel Name'
                  className='bg-white rounded-md h-12 px-4'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='' className='text-black'>
                  Reservation Number
                </label>
                <input
                  type='text'
                  name=''
                  id=''
                  placeholder='Enter Reservation Number'
                  className='bg-white rounded-md h-12 px-4'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='' className='text-black'>
                  Guest Name
                </label>
                <input
                  type='text'
                  name=''
                  id=''
                  placeholder='Enter Guest Name'
                  className='bg-white rounded-md h-12 px-4'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='' className='text-black'>
                  View
                </label>
                <input type='number' name='' id='' placeholder='Enter View' className='bg-white rounded-md h-12 px-4' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='' className='text-black'>
                  NTS
                </label>
                <input type='number' name='' id='' placeholder='Enter NTS' className='bg-white rounded-md h-12 px-4' />
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
