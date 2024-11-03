import React, { useState } from 'react';
import styles from './Notes.module.css'; // Optional: CSS module for styling

const Notes = () => {
    const [notes, setNotes] = useState('');

    // Function to handle changes in the textarea
    const handleChange = (e) => {
        setNotes(e.target.value);
    };

    return (
        <div className={styles.notesContainer}>
            <h2>Notes</h2>
            <textarea
                className={styles.notesTextarea}
                value={notes}
                onChange={handleChange}
                placeholder="Write your notes here..."
                rows="10" // Adjust the number of visible rows as needed
                cols="50" // Adjust the number of visible columns as needed
            />
            {/* Optional: Display the current note count */}
            <p>{notes.length} characters</p>
        </div>
    );
};

export default Notes;
