import { Link } from 'react-router-dom';
import styles from './PrimaryButton.module.css';

const PrimaryButton = ({ display, route = '' }) => {
    return (
        <Link to={route} className={styles.button}>
            {display}
        </Link>
    );
};

export default PrimaryButton;
