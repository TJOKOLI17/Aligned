import {React, useState, useEffect} from 'react'
import Stopwatch from '../../../Components/StopWatchModule/Stopwatch.jsx'
import { useNavigate, useLocation } from 'react-router-dom'
import { apiKey } from '../../key.js'
import styles from "./Project.module.css"
import ActiveButton from '../../../Components/ActiveButtonModule/ActiveButton.jsx'
import InputForm from '../../../Components/InputFormModule/InputForm.jsx'

function Project() {
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState(null);
    const [status, setStatus] = useState(0);
    const statusBar = [0, 25, 50, 75, 100];


    const location = useLocation();
    const { id } = location.state || {};
    // if(!id){
    //     console.log(`No id recieved`)
    // }else{
    //     console.log(id)
    // }

    const handleStatusUpdate = (newStatus, e) => {
        document.querySelectorAll(`.${styles.statusBtn}`).forEach(btn => {
            btn.classList.remove(styles.currentStatus);
        });

        const statusBtn = e.currentTarget;
        statusBtn.classList.add(styles.currentStatus)
        setStatus(newStatus)
    }


    useEffect(() => {
        if (!id) {
            console.log(`No id received`);
            return; // Exit early if no ID is present
        }

        // console.log(id); // Log the ID when present

        const getProject = async () => {
            try {
                const response = await fetch(`${apiKey}/${id}`);
                if (!response.ok) {
                    throw new Error("Error in fetching project");
                }
                const data = await response.json();
                // console.log(data); // Assuming data.timer is what you want to log
                // if(projectData != null){
                    setProjectData(data); // Save project data in state
                // }
            } catch (error) {
                window.alert(error);
            }
        };

        getProject(); // Call the function to fetch project data
    }, [id]);

    if (!projectData) {
        return <div>Loading...</div>; // Optional: Show a loading state or a message
    }
    // console.log(projectData.timer)
    document.title = `${projectData.name}`



    return(
        <>
        <div className={styles.page}>
            <div className={styles.sidebar}>
                <h2 className={styles.projectTitle}>{projectData.name}</h2>
                <div className={styles.statusBar}>
                    <button className={styles.statusBtn} onClick={(e) => {handleStatusUpdate(100, e)}}> <strong>😁</strong></button>
                    <button className={styles.statusBtn} onClick={(e) => {handleStatusUpdate(75, e)}}> <strong>🙂</strong></button>
                    <button className={styles.statusBtn} onClick={(e) => {handleStatusUpdate(50, e)}}> <strong>😐</strong></button>
                    <button className={styles.statusBtn} onClick={(e) => {handleStatusUpdate(25, e)}}> <strong>☹️</strong></button>
                    <button className={styles.statusBtn} onClick={(e) => {handleStatusUpdate(0, e)}}> <strong>💀</strong></button>
                </div>
            </div>
            <div className={styles.projectInfo}>
                <Stopwatch 
                timeInProgress={projectData.timer}
                projectId={id}
                projectData={projectData}/>
                <div className={styles.projectNotes}>
                    <InputForm></InputForm>
                    Notes to come
                </div>
            </div>
            <div>
                <ActiveButton title="Save"></ActiveButton>
            </div>
        </div>
        

        </> 
    )
}

export default Project