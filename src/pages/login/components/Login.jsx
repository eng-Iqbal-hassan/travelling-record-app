import React from "react";
import { useFormik } from "formik";
// useFormik is a custom hook for managing state and handling events.
import { signInSchema } from "../../../schemas";
// There is no need to write the file name because react takes index.js as default file, if file name does not mentioned. Thats why we name that file as index.js
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

export function Login() {
  // for form handling -> we use formik
  // for form validation -> we use yup library

  //   const formik = useFormik({
  //     // initialValue: initialValue
  //     // in js object if both property and value is same then we write just once
  //     initialValue,
  //     onSubmit: (values) => {
  //       console.log(values);
  //     },
  //   });
  //   console.log(formik);

  // this formik has to many things(function) in it so we have destructure it to get some out of it.
  // These functions are predefined functions so we need not to define any of them as these are all predefine functions thats why formik is so popular in form handling.

  // const navigate = useNavigate();

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema: signInSchema,
    onSubmit: async (values, actions) => {
      try {
        const response = await axios.post("http://54.164.99.34/api/token/", {
          email: values.email,
          password: values.password,
        });
        const { access, refresh } = response.data;

        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);
        console.log("Login successful");
        actions.resetForm();
        // navigate(ROUTES.HOME, { replace: true });
        window.location.href = "/app/";
      } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed: " + (error.response.data.detail || "Invalid credentials"));
        // if (error.response) {
        //   alert("Login failed: " + (error.response.data.detail || "Invalid credentials"));
        // } else {
        //   alert("Login failed: Please check your connection or try again.");
        // }
      }
    },
  });
  console.log("errors", errors);
  //   console.log(formik);
  // This form handling is done and there is no need to use states and onChange there is no need to  setState and the value of the state variable in some other object on submit of the function, just use the simple formik and our form is handled in so much simple way.

  // install the yup library -> it will validate our form and return error and with the help of formik we will display our error.

  // Create the validation schema -> Validation schema is basically conditions that we check for form validations.

  return (
    <div class='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6'>
      <div class='sm:mx-auto sm:w-full sm:max-w-md'>
        <img class='mx-auto h-10 w-auto' src='https://www.svgrepo.com/show/301692/login.svg' alt='Workflow' />
        <h2 class='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>Sign in to your account</h2>
      </div>

      <div class='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div class='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form onSubmit={handleSubmit}>
            <div>
              <label for='email' class='block text-sm font-medium leading-5  text-gray-700'>
                Email address
              </label>
              <div class='mt-1 relative rounded-md shadow-sm'>
                <input
                  id='email'
                  name='email'
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder='user@example.com'
                  type='email'
                  required=''
                  class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                />
                <div class='hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                  <svg class='h-5 w-5 text-red-500' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fill-rule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </div>
              </div>
              <div className='error-container'>
                {errors.email && touched.email && <p className='form-error'>{errors.email}</p>}
              </div>
            </div>

            <div class='mt-6'>
              <label for='password' class='block text-sm font-medium leading-5 text-gray-700'>
                Password
              </label>
              <div class='mt-1 rounded-md shadow-sm'>
                <input
                  id='password'
                  name='password'
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type='password'
                  class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                />
              </div>
              <div className='error-container'>
                {errors.password && touched.password && <p className='form-error'>{errors.password}</p>}
              </div>
            </div>

            <div class='mt-6'>
              <span class='block w-full rounded-md shadow-sm'>
                <button
                  type='submit'
                  class='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'
                >
                  Sign in
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
