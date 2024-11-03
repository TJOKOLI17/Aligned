import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ActivityCard.module.css'

function ActivityCard(props) {


  const navigate = useNavigate();
  const goToProjectPage = () => {
    navigate('/Project'); // Assuming your login route is "/login"
  };

  return (
    <div className={styles.cardContainer} id={props.id}>
        <div className={styles.thumbnailDiv}>
            <img src={props.thumbnail} onClick={() => {goToProjectPage()}}></img>
        </div>
        <div className={styles.activityText}>
            <p className={styles.innerText}>{props.title}</p>
            <p className={styles.innerText}>{props.subtitle}</p>
        </div>
    </div>
  )
}

export default ActivityCard