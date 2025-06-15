export function ReservationStepper() {
  return (
    <div className='flex gap-2'>
      <div className='flex-1 flex flex-col gap-2'>
        <div className='w-full h-1 rounded-full bg-[#E0E0E0]'></div>
        <div className='flex gap-2'>
          <input type='radio' name='' id='' disabled className='h-fit mt-2' />
          <div>
            <h3 className='text-xl font-medium text-[#212121]'>Detail</h3>
            <p>Step 1</p>
          </div>
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-2'>
        <div className='w-full h-1 rounded-full bg-[#E0E0E0]'></div>
        <div className='flex gap-2'>
          <input type='radio' name='' id='' disabled className='h-fit mt-2' />
          <div>
            <h3 className='text-xl font-medium text-[#212121]'>Room</h3>
            <p>Step 2</p>
          </div>
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-2'>
        <div className='w-full h-1 rounded-full bg-[#E0E0E0]'></div>
        <div className='flex gap-2'>
          <input type='radio' name='' id='' disabled className='h-fit mt-2' />
          <div>
            <h3 className='text-xl font-medium text-[#212121]'>Meal</h3>
            <p>Step 3</p>
          </div>
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-2'>
        <div className='w-full h-1 rounded-full bg-[#E0E0E0]'></div>
        <div className='flex gap-2'>
          <input type='radio' name='' id='' disabled className='h-fit mt-2' />
          <div>
            <h3 className='text-xl font-medium text-[#212121]'>Payment</h3>
            <p>Step 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
