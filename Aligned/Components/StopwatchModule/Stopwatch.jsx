import React, {useState, useEffect, useRef} from 'react'
import styles from "./Stopwatch.module.css"
import { apiKey } from '../../src/key';

function Stopwatch(props){
    const toMilliseconds = (timeStr) => {
        const [hrs, mins, secs] = timeStr.split(':').map(Number);
        return (hrs * 3600 + mins * 60 + secs) * 1000; // Convert to milliseconds
    };
    // console.log(props.timeInProgress);
    let currProject = props.projectData;

    const initialElapsedTime = toMilliseconds(props.timeInProgress || "00:00:00");
    let timeInProgress = props.timeInProgress;
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(initialElapsedTime);


    const intervalIDRef = useRef(null);
    const startTimeRef = useRef(0);

    // Function to save the current state of the stopwatch
    const saveStopwatchState = async () => {
        try {
            await fetch(`${apiKey}/${props.projectId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...currProject, timer: formatTimeforDb(elapsedTime)}),
            });
        } catch (error) {
            const saveStopwatchState = async () => {
            try {
                await fetch(`${apiKey}/${props.projectId}`, {
                    method: 'PUT',
                });
            } catch (error) {
                console.error('Error saving stopwatch state:', error);
            }
        };
            console.error('Error saving stopwatch state:', error);
        }
    };

    useEffect(() => {
        if (isRunning) {
            startTimeRef.current = Date.now() - elapsedTime; // Start time reference
            intervalIDRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 100); // Change to 100ms or more
        } else {
            // When the stopwatch stops, save the state immediately
            saveStopwatchState();
        }
    
        return () => {
            clearInterval(intervalIDRef.current);
            // Also save the state when the component unmounts
            saveStopwatchState();
        };
    }, [isRunning, elapsedTime]); // Add elapsedTime as a dependency
    

    

    // window.onbeforeunload = (event) => {
    //     const e = event || window.event;
    //     e.preventDefault();
    //     if(e){
    //         e.returnValue = '';
    //     }
    //     return ''
    // }

    


    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(r => r = false);

    }

    function reset(){
        setIsRunning(r => r = false);
        setElapsedTime(t => t = 0);
    }

    function formatTime(){
        let hrs = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, 0);
        let mins = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, 0);
        let secs = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, 0);
        return `${hrs}:${mins}:${secs}`
    }

    function formatTimeforDb(newElapsedTime){
        let hrs = Math.floor(newElapsedTime / (1000 * 60 * 60)).toString().padStart(2, 0);
        let mins = Math.floor(newElapsedTime / (1000 * 60) % 60).toString().padStart(2, 0);
        let secs = Math.floor(newElapsedTime / 1000 % 60).toString().padStart(2, 0);
        return `${hrs}:${mins}:${secs}`
    }

    return(
            <div className={styles.stopwatch}>
                <h1 className={styles.myH1}>Aligned</h1>
                    <div className={styles.display}>
                        {formatTime()}
                    </div>
                    <div className={styles.controls}>
                        <button className={styles.startBtn} onClick={start}>START</button>
                        <button className={styles.stopBtn} onClick={stop}>STOP</button>
                        <button className={styles.resetBtn} onClick={reset}>RESET</button>
                </div>
            </div>
    );
}

export default Stopwatch