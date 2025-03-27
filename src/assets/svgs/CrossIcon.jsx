export function CrossIcon({ className, onClick }) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
      <path d='M12 4L4 12' stroke='#000' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M4 4L12 12' stroke='#000' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}
