import React from 'react'
import styles from "./EventButton.module.css"

function EventButton(props) {
  const handleOnClick = (fn, e) => {
    fn(e);
  }
  return (
    <button className={styles.eventBtn} onClick={(e) => {handleOnClick(props.onClick, e)}}>
      {props.title}
    </button>
  )
}

export default EventButton