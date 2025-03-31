export function ModalBody({ children, className }) {
  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-50 p-5 rounded-lg z-10 h-fit max-h-[80vh] p-6 overflow-y-auto scrollbar-none ${className}`}
    >
      {children}
    </div>
  );
}
