import React from 'react'
import styles from "./SignUp.module.css"
import { useNavigate } from 'react-router-dom'
import InputForm from '../../../Components/InputFormModule/InputForm'
import ActiveButton from '../../../Components/ActiveButtonModule/ActiveButton'
import logo from '../../assets/Aligned_logo.png'


function SignUp() {
  const UsersCollectionRef = collection(db, "backendData")
  
  const CreateUser = async () => {
    await addDoc(UsersCollectionRef, { Name: name, age: age })
    window.location.reload()
  }
  
  document.title = "Sign Up"
  const navigate = useNavigate();
  const goToSignIn = () => {
    navigate('/sign-in'); // Assuming your login route is "/login"
  };

    return (
      <>
        <div className={styles.signUpDiv}>
          <div className={styles.signUpBox}>
            <div className={styles.form}>
              <InputForm label = "Email:"></InputForm><br/>
              <InputForm label = "Password:"></InputForm><br/><br/>
              <ActiveButton title="Confirm"></ActiveButton>
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