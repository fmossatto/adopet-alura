import styles from './LogoMenuTop.module.css';
import logoWhiteSmall from '../../img/LogoWhiteSmall.svg';

import { Link } from 'react-router-dom';

const LogoMenuTop = () => {
    return (
        <div className={styles.linkContainer}>
            <Link to="/">
                <img src={logoWhiteSmall} />
            </Link>
        </div>
    );
};

export default LogoMenuTop;
