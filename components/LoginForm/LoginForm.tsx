import { Input } from '../Input/Input';
import styles from './LoginForm.module.css';
import { useForm } from 'react-hook-form';
import { ILoginForm } from '../../interfaces/ILoginForm.interface';
import { LoginFormProps } from './Loginform.props';
import { ChecboxInput } from '../ChecboxInput/ChecboxInput';
export const LoginForm = ({
	className,
	...props
}: LoginFormProps): JSX.Element => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data: ILoginForm) => {
		console.log(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form} {...props}>
			<Input
				placeholder='Email or username'
				{...register('email', { required: true })}
			/>
			<Input
				placeholder='Password'
				{...register('password', { required: true })}
				type='password'
			/>
			<ChecboxInput {...register('signedin')} />
			<button className={styles.submit}>Submit</button>
		</form>
	);
};
