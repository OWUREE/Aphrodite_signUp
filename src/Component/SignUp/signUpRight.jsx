import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {FaRegEyeSlash} from 'react-icons/fa';
import styles from './signUp.module.css';



const SignupForm = () => {

    // Initialize a boolean state as false (i.e. shouldn't show password)
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
      };
    
    
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
        fullName: Yup.string()
          .min(10, 'Must be 10 characters or more')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
        .required('Please Enter your password, enter a strong password for your own good!'),
        
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Enter password confirmation'),
      }),
        onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
    },
  });
  return (
      <div className = {styles.signupForm}>
          <div className = {styles.flex_items}>
           <h3 className = {styles.create_account}>
        Create account
           </h3>
           <h4 className = {styles.sign_in}>
        Sign in
           </h4>
      </div>
      <form className = {styles.forms} onSubmit={formik.handleSubmit}>
      <label className = {styles.label} htmlFor="fullName">Full Name</label> <br />
      <input
        className = {styles.input}
        id="fullName"
        name="fullName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.fullName}
      /> <br />
      {formik.touched.fullName && formik.errors.fullName ? (
         <div>{formik.errors.fullName}</div>
       ) : null}

      <label className = {styles.label} htmlFor="email">Email Address</label> <br />
      <input
        className ={styles.input}
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      /> <br />
      {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
       
      <label className = {styles.label} htmlFor="password">Password <span className = "char">(Enter atleast 8 characters)</span>
      </label> <br />

       <input
        className = {styles.input}
        id="password"
        minLength = "8"
        name="password"
        type={passwordShown ? "text" : "password"}
        onChange={formik.handleChange}
        value={formik.values.password}
      />
          <FaRegEyeSlash onClick={togglePassword}  size={24}/>
       <br />
      {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}

      <label className = {styles.label} htmlFor="confirmPassword">Confirm Password</label>
      <input
        className = {styles.input}
        id="confirmPassword"
        name="confirmPassword"
        type={passwordShown ? "text" : "password"}
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />
      
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
         <div>{formik.errors.confirmPassword}</div>
       ) : null}

      <button type="submit"
      className ={styles.submit}>Create new account</button>
      </form>
      <p className ={styles.par}>
      By signing up, I agree to the QNET 
      <span className = {styles.span}> Terms of use</span> and <span className = {styles.span}>Privacy Policy</span>
       </p>
      </div>
    
  );

};
export default SignupForm;