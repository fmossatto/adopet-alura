import { useEffect } from 'react';
import ActionPrimaryButton from '../../components/ActionPrimaryButton/ActionPrimaryButton';
import MenuTop from '../../components/MenuTop/MenuTop';
import styles from './SendMessage.module.css';

const SendMessage = () => {
    //Mudando a cor do background quando entrar na página...
    useEffect(() => {
        document.body.style.backgroundColor = '#FFFFFF';
    }, []);

    return (
        <section className={styles.container}>
            <MenuTop />
            <p className={styles.paragraph}>
                Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:
            </p>
            <form>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" placeholder="Insira seu nome completo" />
                <label htmlFor="phone">Telefone</label>
                <input type="tel" id="phone" placeholder="Insira seu telefone e/ou whatsapp" />
                <label htmlFor="animalName">Nome do animal</label>
                <input
                    type="text"
                    id="animalName"
                    placeholder="Por qual animal você se interessou?"
                />
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" placeholder="Escreva sua mensagem"></textarea>
                <ActionPrimaryButton display="Enviar" />
            </form>
        </section>
    );
};

export default SendMessage;
