export function ReservationStepper({ step, successLoading }) {
  return (
    <div className='flex gap-2 mb-4'>
      <div className='flex-1 flex flex-col gap-2'>
        <div className='w-full h-1 rounded-full bg-[#E0E0E0]'>
          <div className={`h-1 rounded-full bg-blue-600 ${step > 1 ? "w-full" : step === 1 ? "w-4" : "w-0"}`}></div>
        </div>
        <div className='flex gap-2'>
          <input type='radio' name='' id='' disabled className='h-fit mt-2' checked={step > 1} />
          <div>
            <h3 className='text-xl font-medium text-[#212121]'>Detail</h3>
            <p>Step 1</p>
          </div>
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-2'>
        <div className='w-full h-1 rounded-full bg-[#E0E0E0]'>
          <div className={`h-1 rounded-full bg-blue-600 ${step > 2 ? "w-full" : step === 2 ? "w-4" : "w-0"}`}></div>
        </div>
        <div className='flex gap-2'>
          <input type='radio' checked={step > 2} disabled className='h-fit mt-2' />
          <div>
            <h3 className='text-xl font-medium text-[#212121]'>Room</h3>
            <p>Step 2</p>
          </div>
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-2'>
        <div className='w-full h-1 rounded-full bg-[#E0E0E0]'>
          <div className={`h-1 rounded-full bg-blue-600 ${step > 3 ? "w-full" : step === 3 ? "w-4" : "w-0"}`}></div>
        </div>
        <div className='flex gap-2'>
          <input type='radio' checked={step > 3} disabled className='h-fit mt-2' />
          <div>
            <h3 className='text-xl font-medium text-[#212121]'>Meal</h3>
            <p>Step 3</p>
          </div>
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-2'>
        <div className='w-full h-1 rounded-full bg-[#E0E0E0]'>
          <div
            className={`h-1 rounded-full bg-blue-600 ${successLoading ? "w-full" : step === 4 ? "w-4" : "w-0"}`}
          ></div>
        </div>
        <div className='flex gap-2'>
          <input type='radio' checked={successLoading} disabled className='h-fit mt-2' />
          <div>
            <h3 className='text-xl font-medium text-[#212121]'>Payment</h3>
            <p>Step 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
