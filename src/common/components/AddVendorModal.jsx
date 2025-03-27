import { CrossIcon } from "@assets/svgs";
import { ModalBody, ModalWrapper } from "@common/components";

export function AddVendorModal({ crossIconClick }) {
  return (
    <ModalWrapper>
      <ModalBody className='relative'>
        <CrossIcon className='absolute top-2 right-2' onClick={crossIconClick} />
        <h1>This is modal</h1>
      </ModalBody>
    </ModalWrapper>
  );
}
