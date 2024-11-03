import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Create.module.css'
import { apiKey } from '../../key'
import EventInputForm from '../../../Components/EventInputFormModule/EventInputForm'
import ActiveButton from '../../../Components/ActiveButtonModule/ActiveButton'
import logo from '../../assets/Aligned_logo.png'

function Create() {
    document.title = "Create"
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleProjectNameChange = (e) => {
        setProjectName(e.target.value); // Update the email state with the new value
    };
  
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value); // Update the password state with the new value
    };

    const handleSubmit = async () => {

        try{
            const response = await fetch(`${apiKey}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: projectName,
                    project_notes: "",
                    timer: "00:00:00",
                    progress: 0,
                    description: description,
                })
            })
            navigate('/Home');
        }catch(error){
            console.log(error)
        }
    }


    return (
        <>
            <div className={styles.signUpDiv}>
                <div className={styles.signUpBox}>
                <div className={styles.form}>
                <EventInputForm label = "Project Name:" onChange={(e) => {handleProjectNameChange(e)}} value={projectName}>{projectName}</EventInputForm ><br/> 
                <EventInputForm label = "Description:" onChange={(e) => {handleDescriptionChange(e)}} value ={description}>{description}</EventInputForm><br/><br/>
                    <ActiveButton title="Confirm" onClick={handleSubmit}></ActiveButton>
                </div>
                <div className={styles.logo}>
                    <img className={styles.img} src={logo}/>
                </div>
                </div>
            </div>
        </>
    )
}

export default Create