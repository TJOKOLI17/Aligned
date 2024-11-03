import {React, useState, useEffect} from 'react'
import Stopwatch from '../../../Components/StopWatchModule/Stopwatch.jsx'
import { useNavigate, useLocation } from 'react-router-dom'
import { apiKey } from '../../key.js'
import styles from "./Project.module.css"
import ActiveButton from '../../../Components/ActiveButtonModule/ActiveButton.jsx'
import InputForm from '../../../Components/InputFormModule/InputForm.jsx'
import Notes from '../../../Components/NotesModule/Notes.jsx'

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

    const handleStatusUpdate = async (newStatus, e) => {
        let statusBtns = document.querySelectorAll(`.${styles.statusBtn}`);
        statusBtns.forEach(btn => {
            btn.classList.remove(styles.currentStatus);
        });

        if(e){
            const statusBtn = e.currentTarget;
            statusBtn.classList.add(styles.currentStatus)
            setStatus(newStatus)
            await updateData(newStatus)
        }else{
            switch (newStatus) {
                case 100:
                    statusBtns[0].classList.add(styles.currentStatus)
                    break;

                case 75:
                    statusBtns[1].classList.add(styles.currentStatus)
                    break;

                case 50:
                    statusBtns[2].classList.add(styles.currentStatus)
                    break;

                case 25:
                    statusBtns[3].classList.add(styles.currentStatus)
                    break;

                case 0:
                    statusBtns[4].classList.add(styles.currentStatus)
                    break;
                default:
                    break;
            }
        }
    }

    
    const updateData = async (newStatus) => {
        try {
            await fetch(`${apiKey}/${projectData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...projectData, progress: newStatus}),
            });
            console.log("Status update successful")
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete =  async () => {
        await deleteProject();
    }
    const deleteProject = async () => {
        try {
            await fetch(`${apiKey}/${projectData.id}`, {
                method: 'DELETE',
            });
            navigate('/Home');
        } catch (error) {
            throw new Error(error)
        }
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
    handleStatusUpdate(projectData.progress, null)

    



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
                <Notes/>
            </div>
            <div>
                {/* <ActiveButton title="Save"></ActiveButton> */}
                <button className={styles.deleteBtn} onClick={handleDelete}>Delete</button>
            </div>
        </div>
        

        </> 
    )
}

export default Project