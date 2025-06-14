import { ModalBody, ModalWrapper } from "@common/components";
import { CrossIcon } from "@assets/svgs";

export function TicketDetailModal({ crossIconClick, data }) {
  return (
    <ModalWrapper>
      <ModalBody className='w-[90vw]'>
        <CrossIcon className='absolute top-2 right-2' onClick={crossIconClick} />
        <h1>Reservation Detail</h1>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4 pb-4 border-b border-[#ccc]'>
            <h2>Tickets</h2>
            <div className='flex gap-5 justify-between'>
              <div className='flex gap-1.5 items-center min-w-[14.875rem]'>
                <h4 className='text-lg font-bold'>Rate Per Ticket:</h4>
                <p>10</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[14.875rem]'>
                <h4 className='text-lg font-bold'>Rate Per Ticket:</h4>
                <p>20</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[14.875rem]'>
                <h4 className='text-lg font-bold'>Rate Per Ticket:</h4>
                <p>30</p>
              </div>
              <div className='min-w-[14.875rem]'></div>
            </div>
            <div className='flex gap-5 justify-between'>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Child Total:</h4>
                <p>10</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Adult Total:</h4>
                <p>40</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Old Total:</h4>
                <p>60</p>
              </div>
              <div className='min-w-[14.875rem]'></div>
            </div>
            <div className='flex gap-5 justify-between'>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Child:</h4>
                <p>1</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Adult:</h4>
                <p>2</p>
              </div>
              <div className='flex gap-1.5 items-center min-w-[238px]'>
                <h4 className='text-lg font-bold'>Old:</h4>
                <p>3</p>
              </div>
              <div className='min-w-[14.875rem]'></div>
            </div>
          </div>
          <div className='flex gap-5 justify-between pb-4 border-b border-[#ccc]'>
            <div className='flex flex-col gap-1.5'>
              <h4 className='text-lg font-bold'>Description:</h4>
              <p>{data.description || "-"}</p>
            </div>
          </div>
          <div className='flex gap-5 justify-between'>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>Vendor Name:</h4>
              {/* <p>{data.vendor || "-"}</p> */}
              <p>Ali Hassan</p>
            </div>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>Date:</h4>
              <p>{data.date || "-"}</p>
            </div>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>Total Amount:</h4>
              <p>{data.debit !== "0.00" ? data.debit : data.credit !== "0.00" ? data.credit : "-"}</p>
            </div>
            <div className='flex gap-1.5 items-center min-w-[238px]'>
              <h4 className='text-lg font-bold'>Payment Method:</h4>
              <p>{data.debit !== "0.00" ? "Debit" : data.credit !== "0.00" ? "Credit" : "-"}</p>
            </div>
          </div>
        </div>
      </ModalBody>
    </ModalWrapper>
  );
}
