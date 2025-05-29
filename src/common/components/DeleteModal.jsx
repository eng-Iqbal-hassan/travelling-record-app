import { CrossIcon } from "@assets/svgs";
import { Button, ModalBody, ModalWrapper } from "@common/components";

export function DeleteModal({ crossIconClick, confirmDelete }) {
  return (
    <ModalWrapper>
      <ModalBody className='w-[300px]'>
        <CrossIcon className='absolute top-2 right-2' onClick={crossIconClick} />
        <p className='text-center'>Are you sure you want to delete this vendor</p>
        <div className='flex gap-3 justify-end mt-4'>
          <Button type='button' className='bg-blue-600 w-full' title='Delete' onClick={confirmDelete} />
          <Button type='button' onClick={crossIconClick} className='bg-red-600 w-full' title='Cancel' />
        </div>
      </ModalBody>
    </ModalWrapper>
  );
}
