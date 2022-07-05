import styles from './MenuTop.module.css';
import { Link } from 'react-router-dom';
import { faHouse, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuTop = () => {
    return (
        <ul className={styles.nav}>
            <li className={styles.itemOne}>
                <Link to="/">
                    <FontAwesomeIcon icon={faHouse} />
                </Link>
            </li>
            <li className={styles.itemTwo}>
                <FontAwesomeIcon icon={faEnvelope} />
            </li>
        </ul>
    );
};

export default MenuTop;
