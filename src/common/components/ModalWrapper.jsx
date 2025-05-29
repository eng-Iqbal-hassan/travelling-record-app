export function ModalWrapper({ children }) {
  return <div className='fixed w-[100vw] h-[100vh] bg-[#00000080] z-1 top-0 left-0'>{children}</div>;
}
