import { AddUser, User } from "@common/components";
import { useEffect, useState } from "react";

export function Crud() {
  // 1. Getting the data from API
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  };
  console.log(users);
  // Ok by this complete setup i have get the data from and API in my console.
  // Now I have to make a User component which holds the complete stuff about a single row and then we map this component over the complete array and then we will get the whole data in the UI.

  // Adding the data in API

  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => console.log(err));
  };

  // so in this function which name and email will come up will be used and make the addition in existing data
  // so in AddUser component we have written the AddUser function whose prop is this onAdd function and this function value is set over there which are the input fields.
  // and we have call this onAdd function inside the curly braces so the value of the prop over there and function over here are the same and the data is added and we update the setState of the user which in turn update the UI when the data is added.

  // Ok we finally make the data and use according to our own requirement

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) return;
        else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='py-4'>
      <h1 className='text-center'>Crud using json placeholder</h1>
      <div className='flex flex-col items-center gap-3'>
        <AddUser onAdd={onAdd} />
        {users.map((user, index) => (
          <User key={index} id={user.id} name={user.name} email={user.email} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
