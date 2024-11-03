import React from 'react'
import styles from "./EventImageButton.module.css"

function EventImageButton(props) {
  const handleOnClick = (fn, e) => {
    if(fn && e){
      fn(e);
    }
  }
  return (
    <button className={styles.eventImageBtn} onClick={(e) => {handleOnClick(props.onClick, e)}}>
      <img src={props.icon}/>
    </button>
  )
}

export default EventImageButton