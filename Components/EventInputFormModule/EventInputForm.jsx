import React from 'react'
import styles from "./EventInputForm.module.css"

function InputForm(props) {
    const handleOnChange = (fn, e) => {
        fn(e);
    }

  return (
    <>
        <label className={styles.eventFormLabel} htmlFor="form-input">{props.label}</label><br/>
        <input className={styles.eventFormInput} name="form-input"  placeholder="Enter..."
        onChange={(e) => {handleOnChange(props.onChange, e)}} // Call the onChange prop when the input changes
        value={props.value} // Bind the input value to the state variable
        type={props.type || "text"}/>
    </>
    
  )
}

export default InputForm