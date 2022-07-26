import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StyleLeft from '../../components/backgroundComponents/StyleLeft';
import styles from './Register.module.css';
import FormValidated from '../../components/Form/FormValidated';
import LogoMenuTop from '../../components/LogoMenuTop/LogoMenuTop';
import { useState } from 'react';
import Snack from '../../components/MaterialUI/Snack';

const Register = () => {
    //SnackBar
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('');
    const [message, setMessage] = useState('');

    //Mudando a cor do background quando entrar na página...
    useEffect(() => {
        document.body.style.backgroundColor = '#FFFFFF';
    }, []);

    const onSubmit = async (data) => {
        let req = {
            email: data.email,
            nome: data.name,
            senha: data.password,
        };

        let res = await fetchApi(req);
        //veririca se a resposta do back-end já contem o email cadastrado...
        if (res.message.includes('E-mail já cadastrado')) {
            setMessage('E-mail já cadastrado em nosso sistema.');
            setSeverity('error');
            setOpen(true);
        } else {
            setMessage('Usuário cadastrado com sucesso, redirecionando para a tela de login!');
            setSeverity('success');
            setOpen(true);

            setTimeout(() => {
                window.location.href = '/login';
            }, 3000);
        }
    };

    const fetchApi = async (req) => {
        return await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(req),
        }).then((res) => res.json());
    };

    return (
        <div className={styles.register}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <LogoMenuTop />
                </div>
                <div className={styles.logo}>
                    <Link to="/"></Link>
                </div>
                <div className={styles.paragraphContainer}>
                    <p>Ainda não tem cadastro?</p>
                    <p>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
                </div>

                {/*FORMULÁRIO COM OS CAMPOS VALIDADOS COM O REACT-FORM-HOOK*/}
                <FormValidated
                    onSubmit={onSubmit}
                    fields={['email', 'name', 'password', 'confirmPassword']}
                />
            </div>

            {/*<StylePaws />*/}
            <StyleLeft />

            <Snack
                open={open}
                setOpen={setOpen}
                duration={3000}
                severity={severity}
                message={message}
            />
        </div>
    );
};

export default Register;
