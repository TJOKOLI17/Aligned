import React from 'react'
import styles from "./InputForm.module.css"

function InputForm(props) {
  return (
    <>
        <label className={styles.formLabel} htmlFor="form-input">{props.label}</label><br/>
        <input className={styles.formInput} name="form-input"  placeholder="Enter..."
        onChange={props.onChange} // Call the onChange prop when the input changes
        value={props.value} // Bind the input value to the state variable
        type={props.type || "text"}/>
    </>
    
  )
}

export default InputForm