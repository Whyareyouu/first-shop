import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import { RegisterFormProps } from './RegisterForm.props';
import styles from './RegisterForm.module.css';
import { IRegisterForm } from '../../interfaces/iRegisterForm.interface';
import { ChecboxInput } from '../ChecboxInput/ChecboxInput';

export const RegisterForm = ({
	className,
	...props
}: RegisterFormProps): JSX.Element => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data: IRegisterForm) => {
		console.log(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form} {...props}>
			<div className={styles.userInfo}>
				<Input
					placeholder='First name'
					{...register('FirstName', { required: true })}
					className={styles.firstName}
				/>
				<Input
					placeholder='Second name'
					{...register('SecondName', { required: true })}
					className={styles.secondName}
				/>
			</div>
			<Input
				placeholder='Username'
				{...register('username', { required: true })}
				className={styles.username}
			/>
			<Input
				placeholder='Email'
				{...register('Email', { required: true })}
				className={styles.email}
			/>
			<Input
				placeholder='Password'
				type='password'
				{...register('password', { required: true })}
				className={styles.password}
			/>
			<ChecboxInput {...register('signedin')} className={styles.signedin} />
			<button className={styles.submit}>Create account</button>
		</form>
	);
};
