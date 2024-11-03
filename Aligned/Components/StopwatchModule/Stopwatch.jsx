import React, {useState, useEffect, useRef} from 'react'
import styles from "./Stopwatch.module.css"

function Stopwatch(props){
    const toMilliseconds = (timeStr) => {
        const [hrs, mins, secs] = timeStr.split(':').map(Number);
        return (hrs * 3600 + mins * 60 + secs) * 1000; // Convert to milliseconds
    };
    console.log(props.timeInProgress);
    const initialElapsedTime = toMilliseconds(props.timeInProgress || "00:00:00");
    let timeInProgress = props.timeInProgress;
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(initialElapsedTime);


    const intervalIDRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalIDRef.current = setInterval(() => {
                setElapsedTime(t => t = Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIDRef.current);
        }
    }, [isRunning]);

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