import { useEffect } from 'react';
import ActionPrimaryButton from '../../components/ActionPrimaryButton/ActionPrimaryButton';
import MenuTop from '../../components/MenuTop/MenuTop';
import styles from './Perfil.module.css';

import userPhoto from '../../img/userPhoto.png';

const Perfil = () => {
    //Mudando a cor do background quando entrar na página...
    useEffect(() => {
        document.body.style.backgroundColor = '#FFFFFF';
    }, []);

    return (
        <section className={styles.container}>
            <MenuTop />
            <p className={styles.paragraph}>
                Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.
            </p>

            <div className={styles.formContainer}>
                <div className={styles.imageContainer}>
                    <p>Perfil</p>
                    <label>Foto</label>
                    <img src={userPhoto} />
                    <span>Clique na foto para editar</span>
                </div>
                <form>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" placeholder="Insira seu nome completo" />
                    <label htmlFor="phone">Telefone</label>
                    <input type="tel" id="phone" placeholder="Insira seu telefone e/ou whatsapp" />
                    <label htmlFor="city">Cidade</label>
                    <input type="text" id="city" placeholder="Insira sua cidade" />
                    <label htmlFor="about">Sobre</label>
                    <textarea id="about" placeholder="Escreva sobre você"></textarea>
                    <ActionPrimaryButton display="Salvar" />
                </form>
            </div>
        </section>
    );
};

export default Perfil;
