import React from "react";

export function AddUser({ onAdd }) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
  };
  return (
    <form onSubmit={handleOnSubmit} className='flex items-center gap-4'>
      <h3>Add User</h3>
      <input
        type='text'
        name='name'
        placeholder='name'
        className='w-[25rem] h-[2.625rem] border border-gray-400 px-3'
      />
      <input
        type='email'
        name='email'
        placeholder='email'
        className='w-[25rem] h-[2.625rem] border border-gray-400 px-3'
      />
      <button onSubmit={handleOnSubmit} className='min-w-[5rem] h-[2.625rem] border border-gray-400'>
        Add
      </button>
    </form>
  );
}
