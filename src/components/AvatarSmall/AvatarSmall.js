import styles from './AvatarSmall.module.css';

import { Link } from 'react-router-dom';
import userAvatar from '../../img/UserAvatarSmall.svg';

const AvatarSmall = () => {
    return (
        <div className={styles.avatar}>
            <Link to="/perfil">
                <img src={userAvatar} />
            </Link>
        </div>
    );
};

export default AvatarSmall;
