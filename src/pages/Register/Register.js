import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StyleLeft from '../../components/backgroundComponents/StyleLeft';
import styles from './Register.module.css';
//import StylePaws from '../../components/backgroundComponents/StylePaws';
import ActionPrimaryButton from '../../components/ActionPrimaryButton/ActionPrimaryButton';
import LogoMenuTop from '../../components/LogoMenuTop/LogoMenuTop';
import { useForm } from 'react-hook-form';

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

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
        reset();
        window.location.href = '/login';
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Escolha seu melhor email"
                        {...register('email', {
                            required: 'O e-mail é obrigatório!',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Insira um e-mail válido',
                            },
                        })}
                    />
                    {errors.email && <small>{errors.email.message}</small>}

                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Digite seu nome completo"
                        {...register('name', {
                            required: 'O nome é obrigatório',
                            minLength: {
                                value: 3,
                                message: 'O nome precisa ter ao menos 3 caracteres',
                            },
                        })}
                    />
                    {errors.name && <small>{errors.name.message}</small>}

                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Crie uma senha"
                        {...register('password', {
                            required:
                                'A senha é obrigatória e deve contar entre 6 e 15 dígitos e conter pelo menos um número e uma letra',
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,15}$/i,
                                message:
                                    'A senha deve conter ente 6 e 15 caracteres e pelo menos um número e uma letra.',
                            },
                        })}
                    />
                    {errors.password && <small>{errors.password.message}</small>}

                    <label htmlFor="confirmPassword">Confirma sua senha</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Repita a senha criada acima"
                        {...register('confirmPassword', {
                            required: 'A confirmação da senha é obrigatória!',
                            validate: (pass) => {
                                if (watch('password') !== pass) {
                                    return 'As senhas não são iguais.';
                                }
                            },
                        })}
                    />
                    {errors.confirmPassword && <small>{errors.confirmPassword.message}</small>}

                    <ActionPrimaryButton display="Cadastrar" />
                </form>
            </div>

            {/*<StylePaws />*/}
            <StyleLeft />
        </div>
    );
};

export default Register;
