import {React, useState, useEffect} from 'react'
import styles from "./Project.module.css"
import Stopwatch from '../../../Components/StopWatchModule/Stopwatch.jsx'
import { useNavigate, useLocation } from 'react-router-dom'
import { apiKey } from '../../key.js'
// import EventInputForm from '../../../../Components/EventInputFormModule/EventInputForm.jsx'
// import ActiveButton from '../../../../Components/ActiveButtonModule/ActiveButton.jsx'
// import EventButton from '../../../../Components/EventButtonModule/EventButton.jsx'
// import logo from '../../assets/Aligned_logo.png'

function Project() {
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState(null);

    const location = useLocation();
    const { id } = location.state || {};
    if(!id){
        console.log(`No id recieved`)
    }else{
        console.log(id)
    }

    // const getProject = async () => {
    //     try {
    //         const response = await fetch(`${apiKey}/${id}`);
    //         if(!response.ok){
    //             throw new Error("Error in fetching project");
    //         }
    //         const data = await response.json();
    //         console.log(data.timer)
    //         return data
            
    //     } catch (error) {
    //         window.alert(error);
    //     }
    // }

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
        <Stopwatch
            timeInProgress={projectData.timer}
        />

        </> 
    )
}

export default Project