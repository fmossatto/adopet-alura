import styles from './MenuTop.module.css';
import { Link } from 'react-router-dom';
import { faHouse, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AvatarSmall from '../AvatarSmall/AvatarSmall';

const MenuTop = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.menuActions}>
                <li className={styles.itemOne}>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHouse} />
                    </Link>
                </li>
                <li className={styles.itemTwo}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </li>
            </ul>
            <ul className={styles.menuUser}>
                <li>
                    <AvatarSmall />
                </li>
            </ul>
        </nav>
    );
};

export default MenuTop;
