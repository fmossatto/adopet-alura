import styles from './Cards.module.css';
import dunga from '../../img/pets/Dunga.png';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cards = ({ name, image, age, size, features, breed, city }) => {
    const handleSendMessage = () => {
        window.location.href = '/send-message';
    };

    return (
        <div className={styles.cards}>
            <div className={styles.imageContainer}>
                <img src={dunga} />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.infoPet}>
                    <h3>{name}</h3>
                    <ul>
                        <li>{breed}</li>
                        <li>{age}</li>
                        <li>{size}</li>
                        <li>{features}</li>
                    </ul>
                </div>
                <div className={styles.infoOwner}>
                    <p>{city}</p>
                    <p className={styles.sendMessage} onClick={handleSendMessage}>
                        <FontAwesomeIcon icon={faComment} /> Falar com responsável
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cards;
