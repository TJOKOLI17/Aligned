import {React, useState} from 'react'
import styles from "./Project.module.css"
import { useNavigate } from 'react-router-dom'
import EventInputForm from '../../../../Components/EventInputFormModule/EventInputForm.jsx'
import ActiveButton from '../../../../Components/ActiveButtonModule/ActiveButton.jsx'
import EventButton from '../../../../Components/EventButtonModule/EventButton.jsx'
import logo from '../../assets/Aligned_logo.png'

function Project() {
    document.title = "Project Page"
    const navigate = useNavigate();

    return(
        // <div className="w3-sidebar w3-light-grey w3-bar-block" style="width:25%">
        //     <h3 className="w3-bar-item">Menu</h3>
        //     <a href="#" className="w3-bar-item w3-button">Link 1</a>
        //     <a href="#" className="w3-bar-item w3-button">Link 2</a>
        //     <a href="#" className="w3-bar-item w3-button">Link 3</a>
        // </div>

        // <div className={styles.sidebar}>
        //     <a className={styles.active} href="#home">Home</a>
        //     <a href="#news">News</a>
        //     <a href="#contact">Contact</a>
        //     <a href="#about">About</a>
        // </div>
        <></>
        
    )
}

export default Project