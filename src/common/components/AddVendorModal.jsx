import { CrossIcon } from "@assets/svgs";
import { Button, ModalBody, ModalWrapper } from "@common/components";

export function AddVendorModal({ crossIconClick }) {
  return (
    <ModalWrapper>
      <ModalBody className='relative'>
        <CrossIcon className='absolute top-2 right-2' onClick={crossIconClick} />
        <h1>Add Vendor</h1>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor=''>Name</label>
            <input type='text' name='' id='' placeholder='Enter Name' className='bg-white rounded-md h-12 px-4' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='text-black'>
              Email
            </label>
            <input type='email' name='' id='' placeholder='Enter Email' className='bg-white rounded-md h-12 px-4' />
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
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label for='cars'>Type</label>
            <select name='cars' id='cars' className='bg-white rounded-md h-12 px-4'>
              <option value='volvo'>Ticket</option>
              <option value='saab'>Hotel</option>
            </select>
          </div>
          <div className='flex gap-3 justify-end'>
            <Button className='bg-blue-600 min-w-[3.75rem]' title='Add' />
            <Button className='bg-red-600' title='Cancel' />
          </div>
        </div>
      </ModalBody>
    </ModalWrapper>
  );
}
