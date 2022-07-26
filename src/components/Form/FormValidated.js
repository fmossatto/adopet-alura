import { useForm } from 'react-hook-form';
import ActionPrimaryButton from '../ActionPrimaryButton/ActionPrimaryButton';

const FormValidated = ({ onSubmit, fields }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.includes('email') && (
                <>
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
                </>
            )}

            {fields.includes('name') && (
                <>
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
                </>
            )}

            {fields.includes('password') && (
                <>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Crie uma senha"
                        {...register('password', {
                            required:
                                'A senha é obrigatória e deve conter entre 6 e 15 dígitos e conter pelo menos um número e uma letra',
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,15}$/i,
                                message:
                                    'A senha deve conter ente 6 e 15 caracteres e pelo menos um número e uma letra.',
                            },
                        })}
                    />
                    {errors.password && <small>{errors.password.message}</small>}
                </>
            )}

            {fields.includes('confirmPassword') && (
                <>
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
                </>
            )}

            <ActionPrimaryButton display="Cadastrar" />
        </form>
    );
};

export default FormValidated;
