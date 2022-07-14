import { useEffect } from 'react';
import CenterDogs from '../../components/backgroundComponents/CenterDogs';
import StyleRight from '../../components/backgroundComponents/StyleRight';
import LogoMenuTop from '../../components/LogoMenuTop/LogoMenuTop';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import styles from './Home.module.css';

const Home = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#3772ff';
    }, []);

    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <LogoMenuTop />
                </div>
                <div className={styles.logo}></div>
                <h2>Boas-vindas!</h2>
                <p></p>
                <div className={styles.buttonContainer}>
                    <PrimaryButton display="Já tenho conta" route="/login" />
                    <PrimaryButton display="Quero me cadastrar" route="/register" />
                </div>
            </div>
            <StyleRight />
            <CenterDogs />
        </div>
    );
};

export default Home;
