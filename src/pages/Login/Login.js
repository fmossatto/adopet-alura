import { useEffect } from 'react';
import StyleLeft from '../../components/backgroundComponents/StyleLeft';
import ActionPrimaryButton from '../../components/ActionPrimaryButton/ActionPrimaryButton';
import styles from './Login.module.css';

const Login = () => {
    //Mudando a cor do background quando entrar na página...
    useEffect(() => {
        document.body.style.backgroundColor = '#FFFFFF';
    }, []);

    return (
        <div className={styles.login}>
            <div className={styles.logo}></div>
            <div className={styles.paragraphContainer}>
                <p>Já tem conta? Faça seu login:</p>
            </div>
            <form>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Insira seu email" />
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Insira sua senha" />
                <a href="/" className={styles.forgotPassword}>
                    Esqueci minha senha.
                </a>

                <ActionPrimaryButton display="Entrar" />
            </form>
            {/*<StylePaws />*/}
            <StyleLeft />
        </div>
    );
};

export default Login;
