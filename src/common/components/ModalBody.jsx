export function ModalBody({ children }) {
  return (
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg z-10 w-[600px] h-[70vh] p-6'>
      {children}
    </div>
  );
}
