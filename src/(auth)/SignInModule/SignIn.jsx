import {React, useState} from 'react'
import styles from "./SignIn.module.css"
import { useNavigate } from 'react-router-dom'
import EventInputForm from '../../../Components/EventInputFormModule/EventInputForm.jsx'
import ActiveButton from '../../../Components/ActiveButtonModule/ActiveButton'
import EventButton from '../../../Components/EventButtonModule/EventButton.jsx'
import logo from '../../assets/Aligned_logo.png'
import { doSignInWithEmailAndPassword } from '../../firebase/auth'




function SignIn() {
  document.title = "Sign In"
  const navigate = useNavigate();

  // const { userLoggedIn } = useAuth()
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
            console.error("Sign-in failed:", error);
        } finally {
            setIsSigningIn(false); // Reset signing in state
        }
    }
  }



  const goToSignUp = () => {
    navigate('/sign-up');
    console.log("page changed!")
  };

  return (
    <>
      <div className={styles.signInDiv}>
        <div className={styles.signInBox}>
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
            Don't have an account? <ActiveButton title="Sign Up" onClick={goToSignUp}></ActiveButton>
        </div>
      </div>
    </>
  )
}

export default SignIn