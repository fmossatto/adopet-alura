import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StyleLeft from '../../components/backgroundComponents/StyleLeft';
import FormValidated from '../../components/Form/FormValidated';
import styles from './Login.module.css';
import LogoMenuTop from '../../components/LogoMenuTop/LogoMenuTop';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { reset } = useForm();

    //Mudando a cor do background quando entrar na página...
    useEffect(() => {
        document.body.style.backgroundColor = '#FFFFFF';
    }, []);

    const onSubmit = async (data) => {
        let req = {
            email: data.email,
            password: data.password,
        };

        let res = await fetchApi(req);
        console.log(res);
        //reset();
        //window.location.href = '/login';
    };

    const fetchApi = async (req) => {
        return await fetch('http://localhost:3001/users/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(req),
        }).then((res) => res.json());
    };

    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <LogoMenuTop />
                </div>
                <div className={styles.logo}>
                    <Link to="/"></Link>
                </div>
                <div className={styles.paragraphContainer}>
                    <p>Já tem conta? Faça seu login:</p>
                </div>
                <FormValidated onSubmit={onSubmit} fields={['email', 'password']} />
            </div>
            <StyleLeft />
        </div>
    );
};

export default Login;
