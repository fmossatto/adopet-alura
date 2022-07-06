import { useEffect } from 'react';
import StyleLeft from '../../components/backgroundComponents/StyleLeft';
import styles from './Register.module.css';
//import StylePaws from '../../components/backgroundComponents/StylePaws';
import ActionPrimaryButton from '../../components/ActionPrimaryButton/ActionPrimaryButton';

const Register = () => {
    //Mudando a cor do background quando entrar na página...
    useEffect(() => {
        document.body.style.backgroundColor = '#FFFFFF';
    }, []);

    return (
        <div className={styles.register}>
            <div className={styles.logo}></div>
            <div className={styles.paragraphContainer}>
                <p>Ainda não tem cadastro?</p>
                <p>Então, antes de buscar seu melhor amigo, precisamos de alguns dados.</p>
            </div>
            <form>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Escolha seu melhor email" />
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" placeholder="Digite seu nome completo" />
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Crie uma senha" />
                <label htmlFor="confirmPassword">Confirma sua senha</label>
                <input
                    type="password"
                    id="conformPassword"
                    placeholder="Repita a senha criada acima"
                />
                <ActionPrimaryButton display="Cadastrar" />
            </form>
            {/*<StylePaws />*/}
            <StyleLeft />
        </div>
    );
};

export default Register;
