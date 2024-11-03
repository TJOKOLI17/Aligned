import {React, useState} from 'react'
import styles from "./SignUp.module.css"
import { useNavigate } from 'react-router-dom'
import InputForm from '../../../Components/InputFormModule/InputForm'
import EventInputForm from '../../../Components/EventInputFormModule/EventInputForm.jsx'
import EventButton from '../../../Components/EventButtonModule/EventButton.jsx'
import ActiveButton from '../../../Components/ActiveButtonModule/ActiveButton'
import logo from '../../assets/Aligned_logo.png'


function SignUp() {
  // const UsersCollectionRef = collection(db, "backendData")
  
  // const CreateUser = async () => {
  //   await addDoc(UsersCollectionRef, { Name: name, age: age })
  //   window.location.reload()
  // }
  
  document.title = "Sign Up"
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update the email state with the new value
};

const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Update the password state with the new value
};

  const goToSignIn = () => {
    navigate('/sign-in'); // Assuming your login route is "/login"
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
        setIsSigningIn(true);
        try {
            // await doSignInWithEmailAndPassword(email, password);
            setTimeout(() => {navigate('/Home');}, 2000)
            // navigate('/Home');
            // Redirect or update state as needed
        } catch (error) {
            console.error("Sign-up failed:", error);
        } finally {
            setIsSigningIn(false); // Reset signing in state
        }
    }
  }

    return (
      <>
        <div className={styles.signUpDiv}>
          <div className={styles.signUpBox}>
            <div className={styles.form}>
            <EventInputForm label = "Email:" onChange={(e) => {handleEmailChange(e)}} value={email}>{email}</EventInputForm ><br/> 
            <EventInputForm label = "Password:" onChange={(e) => {handlePasswordChange(e)}} value ={password}>{password}</EventInputForm><br/><br/>
              <EventButton title="Confirm" onClick={(e) => {onSubmit(e)}}></EventButton>
            </div>
            <div className={styles.logo}>
              <img className={styles.img} src={logo}/>
            </div>
          </div>
          <div className={styles.already}>
              Already have an account? <ActiveButton title="Log In" onClick={goToSignIn}></ActiveButton>
          </div>
        </div>
      </>
    )
}

export default SignUp