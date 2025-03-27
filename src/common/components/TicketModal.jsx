import { CrossIcon } from "@assets/svgs";
import { Button, ModalBody, ModalWrapper } from "@common/components";

export function TicketModal({ crossIconClick }) {
  return (
    <ModalWrapper>
      <ModalBody className='relative'>
        <CrossIcon className='absolute top-2 right-2' onClick={crossIconClick} />
        <h1>Add Ticket Detail</h1>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4 pb-4 border-b border-solid border-gray-300'>
            <div className='flex flex-col gap-2'>
              <label for='vendor'>To</label>
              <select name='vendor' id='vendor' className='bg-white rounded-md h-12 px-4'>
                <option value='' disabled hidden>
                  Select an option
                </option>
                <option value='vendor1'>Vendor 1</option>
                <option value='vendor2'>Vendor 2</option>
              </select>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor=''>Name</label>
              <input type='date' name='' id='' placeholder='dd/mm/yyyy' className='bg-white rounded-md h-12 px-4' />
            </div>
          </div>
          <div className='flex flex-col gap-6 pb-4 border-b border-solid border-gray-300'>
            <h2>Tickets</h2>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-3 items-center'>
                <label htmlFor=''>Child:</label>
                <input
                  type='number'
                  name=''
                  id=''
                  className='bg-white rounded-md h-12 px-4 w-full'
                  placeholder='count'
                />
                <input
                  type='number'
                  name=''
                  id=''
                  className='bg-white rounded-md h-12 px-4 w-full'
                  placeholder='count'
                />
              </div>
              <div className='flex gap-3 items-center'>
                <label htmlFor=''>Total:</label>
                <input
                  type='number'
                  name=''
                  id=''
                  className='bg-gray-200 rounded-md h-12 px-4 w-[15.1875rem]'
                  placeholder='count'
                />
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-3 items-center'>
                <label htmlFor=''>Child:</label>
                <input
                  type='number'
                  name=''
                  id=''
                  className='bg-white rounded-md h-12 px-4 w-full'
                  placeholder='count'
                />
                <input
                  type='number'
                  name=''
                  id=''
                  className='bg-white rounded-md h-12 px-4 w-full'
                  placeholder='count'
                />
              </div>
              <div className='flex gap-3 items-center'>
                <label htmlFor=''>Total:</label>
                <input
                  type='number'
                  name=''
                  id=''
                  className='bg-gray-200 rounded-md h-12 px-4 w-[15.1875rem]'
                  placeholder='count'
                />
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-3 items-center'>
                <label htmlFor=''>Child:</label>
                <input
                  type='number'
                  name=''
                  id=''
                  className='bg-white rounded-md h-12 px-4 w-full'
                  placeholder='count'
                />
                <input
                  type='number'
                  name=''
                  id=''
                  className='bg-white rounded-md h-12 px-4 w-full'
                  placeholder='count'
                />
              </div>
              <div className='flex gap-3 items-center'>
                <label htmlFor=''>Total:</label>
                <input
                  type='number'
                  name=''
                  id=''
                  className='bg-gray-200 rounded-md h-12 px-4 w-[15.1875rem]'
                  placeholder='count'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label htmlFor=''>Description</label>
              <textarea
                name=''
                id=''
                className='bg-white rounded-md min-h-[6.25rem] max-h-[6.25rem] p-4'
                placeholder='Enter description'
              ></textarea>
            </div>
            <div className='flex flex-col gap-2'>
              <label for='vendor'>To</label>
              <select name='vendor' id='vendor' className='bg-white rounded-md h-12 px-4'>
                <option value='' disabled hidden>
                  Select payment method
                </option>
                <option value='vendor1'>Credit</option>
                <option value='vendor2'>Debit</option>
              </select>
            </div>
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
