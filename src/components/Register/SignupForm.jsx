import React , {useState} from 'react'
import styles from "./Form.module.css"
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    // initial values
    const [formValues ,setFormValues] =useState({
        check:false,
        name:"",
        username:"",
        email:"",
        mobile:""
    });

    // error handling using states if not filled 
    const [nameError ,setNameError] = useState(false);
    const [userError ,setUserError] = useState(false);
    const [mailError ,setMailError] = useState(false);
    const [mobileError ,setMobileError] = useState(false);
    const [signUpError ,setSignUpError] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e)=>{
        setFormValues({...formValues , [e.target.name]: e.target.value});

    }
    const handleChange1 = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.checked });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
    
      let valid = true;
    
      //name
      if (!formValues.name || !formValues.name.trim().length > 0) {
        setNameError(true);
        valid = false;
      } else {
        setNameError(false);
      }
    
      //username
      if (!formValues.username || !formValues.username.trim().length > 0) {
        setUserError(true);
        valid = false;
      } else {
        setUserError(false);
      }
    
      //email
      if (!formValues.email || !formValues.email.trim().length > 0) {
        setMailError(true);
        valid = false;
      } else {
        setMailError(false);
      }
    
      //mobile
      if (!formValues.mobile || !formValues.mobile.trim().length > 0) {
        setMobileError(true);
        valid = false;
      } else {
        setMobileError(false);
      }
    
      //check
      if (!formValues.check) {
        setSignUpError(true);
        valid = false;
      } else {
        setSignUpError(false);
      }
    
      if (valid) {
        window.localStorage.setItem("userData", JSON.stringify(formValues));
        navigate("/genre");
      }
    };
    

      



  return (
    <div className={styles.body}>
    <div className={styles.form}>
      <p className={styles.super} style={{ marginBottom: 0 }}>Super App</p>
      <p className={styles.para} style={{ marginTop: 0 }}>Create your new account</p>

      <form onSubmit={(e) => handleSubmit(e)}>
      <input 
        onChange={(e)=>handleChange(e)}
        type='text'
        name="name"
        placeholder='Name'
      ></input>
      {
        nameError ? (<p className={styles.error}>Please fill correctly</p>) :(<></>)
      }

      <input 
      onChange={(e)=>handleChange(e)}
        type='text'
        name="username"
        placeholder='Username'
      ></input>

      {
        userError ? (<p className={styles.error}>Please fill correctly</p>) :(<></>)
      }
      <input 
         onChange={(e)=>handleChange(e)}
        type='email'
        name="email"
        placeholder='Email'
      ></input>
      {
        mailError? (<p className={styles.error}>Please fill correctly</p>) :(<></>)
      }


      <input 
         onChange={(e)=>handleChange(e)}
        type='number'
        name="mobile"
        placeholder='Mobile'
      ></input>
      {
        mobileError ? (<p className={styles.error}>Please fill correctly</p>) :(<></>)
      }
      <label>
        <input
             onChange={(e)=>handleChange1(e)}
            type='checkbox'
            name='check'
            className={styles.check}
        />
        Share my registration data with Superapp
      </label>
      {
        signUpError? (<p className={styles.error}>Please fill correctly</p>) :(<></>)
      }

      <button type='submit'>
        SIGN UP
      </button>

      <footer className={styles.footer}>
        <p>By clicking on Sign up. you agree to Superapp
        <span style={{color :"green"}}> Terms and Conditions of Use</span>
        </p>

        <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp 
        <span style={{color :"green"}}>Privacy Policy</span>
            
        </p>

      </footer>

      </form>
      </div>
    </div>
  )


  }

export default SignupForm;
