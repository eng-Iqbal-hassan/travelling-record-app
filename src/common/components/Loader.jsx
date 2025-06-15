import { FadeLoader } from "react-spinners";
export function Loader() {
  return (
    <div className='absolute top-1/2 left-1/2'>
      <FadeLoader color='#2563EB' size={100} aria-label='Loading Spinner' data-testid='loader' />
    </div>
  );
}
