import React from 'react'
import styles from "./ActiveButton.module.css"

function ActiveButton(props) {

  const handleOnClick = (fn) => {
    fn();
  }
  return (
    <button className={styles.activeBtn} onClick={() => {handleOnClick(props.onClick)}}>
      {props.title}
    </button>
  )
}

export default ActiveButton