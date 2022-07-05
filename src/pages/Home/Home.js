import { useEffect } from 'react';
import CenterDogs from '../../components/backgroundComponents/CenterDogs';
import StyleRight from '../../components/backgroundComponents/StyleRight';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import styles from './Home.module.css';

const Home = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#3772ff';
    }, []);

    return (
        <div className={styles.home}>
            <div className={styles.logo}></div>
            <h2>Boas-vindas!</h2>
            <p>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
            <div className={styles.buttonContainer}>
                <PrimaryButton display="Já tenho conta" route="/" />
                <PrimaryButton display="Quero me cadastrar" route="/register" />
            </div>
            <StyleRight />
            <CenterDogs />
        </div>
    );
};

export default Home;
