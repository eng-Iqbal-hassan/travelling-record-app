import * as Yup from "yup";

var passwordRegix = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
);

// We essentially want to label a password as having medium strength if it contains six characters or more and has at least one lowercase and one uppercase alphabetical character or has at least one lowercase and one numeric character or has at least one uppercase and one numeric character.

export const signInSchema = Yup.object({
  email: Yup.string().email("Please enter valid email").required("Please enter your email"),
  password: Yup.string().matches(passwordRegix, "Please enter valid password").required("Please enter your password"),
});

// steps for formik and schema
// (1): Form handling using formik
// (a): make the initialValue object, install the formik, use the useFormik custom hook for form handling, use its predefined function using destructuring and get its value (so simple and so clean)
// (2): Next create the schema for validation using yup library as mentioned in this file
// (3): Import this file in login.jsx file
// (4): Now there is validationSchema name key in useFormik function whose value is given this object we create in this file
// (5): There is errors function in it and add it in destructuring place and add one more div for email error and one for password to display its error
// (6): One error is that when we enter email, then the error for password also shown because its container fulfills its condition, so this bug is resolved using touch function of useFormik hook
// (7): Inside useFormik function -> in onSubmit function actions me thod is added to reset the from.
