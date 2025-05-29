export function User({ id, key, name, email, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div key={key} className='flex justify-between w-[70%] m-[0.3125rem] items-center'>
      <span className='w-[18.75rem]'>{name}</span>
      <span className='w-[18.75rem]'>{email}</span>
      <div className='flex gap-1'>
        <button className='py-2 px-4 border border-gray-400 min-w-[80px]'>Edit</button>
        <button onClick={handleDelete} className='py-2 px-4 min-w-[80px] text-white bg-red-500'>
          Delete
        </button>
      </div>
    </div>
  );
}
