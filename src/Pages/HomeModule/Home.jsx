import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'
import SearchBar from '../../../Components/SearchBarModule/SearchBar.jsx'
import EventImageButton from '../../../Components/EventImageButtonModule/EventImageButton.jsx'
import addIcon from '../../assets/add-btn-icon.png'
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import ActivityCard from '../../../Components/ActivityCardModule/ActivityCard.jsx'
import logo from '../../assets/Aligned_logo.png'


function Home() {
  document.title = "Home"
  const apiKey = `http://127.0.0.1:8000/`;
  const [activityCards, setActivityCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const goToCreatePage = () => {
    navigate('/Create');
  }


  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(apiKey); // Replace with your API endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Assuming the API returns an array of cards with `id`, `title`, and `subtitle`
            setActivityCards(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // Set loading to false after fetching data
        }
    };

    fetchData();
}, []); // Empty dependency array means this runs once on mount


return (
  <>
      <SearchBar/><br/>
      <div className={styles.activityCardDiv}>
        {activityCards.map(card => (

                <ActivityCard
                    id={card.id}
                    thumbnail={logo}
                    title={card.name}
                    subtitle={card.description}
                />
            ))}
          <EventImageButton icon={addIcon} onClick={goToCreatePage}/>
      </div>
      

  </>
)
}

export default Home