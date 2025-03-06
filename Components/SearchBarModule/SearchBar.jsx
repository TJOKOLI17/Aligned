import {React, useState} from 'react'
import ActivityCard from '../ActivityCardModule/ActivityCard';
import styles from "./SearchBar.module.css"
import searchIcon from '../../src/assets/searchbar.png'
function SearchBar(props) {
    // user enters input data
    // search should return all ActivityCards with a title that starts with the query

    let activityCards = ["Fencing", "Jokes", "Play"]; // need to retrieve cards from database or perhaps this would contain all of the titles of a database
    const [results, setResults] = useState([]);
    const [input, setInput] = useState("");
    
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleSearch = (e) => {
        const query = input;
        console.log(`Search made about: ${query}`)
        let response = activityCards.filter((card) => {
            card.startsWith(query);
            console.log("Card,", card);
        })
        setResults(response);
        
        console.log(results)
    }

  return (
    <div className={styles.searchBarDiv}>
        <input className={styles.searchInput}
            placeholder='Search...'
            onChange={handleInputChange}
            value={input}
            type={"text"}/>
        <button className={styles.searchBtn} onClick={(e) => {handleSearch(e)}}>
            <img src={searchIcon}></img>
        </button>
        <ul>
            {results.map((card, index) => (
                {card}
            ))
        }
        </ul>
    </div>
  )
}

export default SearchBar;