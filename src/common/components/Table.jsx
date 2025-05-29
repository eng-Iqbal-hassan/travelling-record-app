export function Table({ children }) {
  return (
    <div className='table-wrapper'>
      <table className='w-full border-collapse rounded-lg rounded-xl rounded-table'>{children}</table>
    </div>
  );
}
