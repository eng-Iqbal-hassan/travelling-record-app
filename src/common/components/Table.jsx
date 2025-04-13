export function Table({ children }) {
  return (
    <table className='w-full border-collapse rounded-lg border border-solid border-gray-300 rounded-xl rounded-table'>
      {children}
    </table>
  );
}
