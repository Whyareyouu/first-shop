import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import { RegisterFormProps } from './RegisterForm.props';
import styles from './RegisterForm.module.css';
import { IRegisterForm } from '../../interfaces/iRegisterForm.interface';
import { ChecboxInput } from '../ChecboxInput/ChecboxInput';
import axios from 'axios';
import cn from 'classnames';

export const RegisterForm = ({
	className,
	...props
}: RegisterFormProps): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegisterForm>({ mode: 'onBlur' });
	const onSubmit = async (formData: IRegisterForm) => {
		try {
			const data = await axios.post<IRegisterForm>('/api/users', {
				...formData,
			});
		} catch {
			console.log('Error');
		}
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form} {...props}>
			<div className={styles.userInfo}>
				<div className={styles.user}>
					<Input
						placeholder='First name'
						{...register('firstName', {
							required: { value: true, message: 'This field is required' },
						})}
						className={styles.firstName}
					/>
					<span
						className={cn(styles.disabled, {
							[styles.error]: errors.firstName,
						})}>
						{errors.firstName?.message}
					</span>
				</div>
				<div className={styles.user}>
					<Input
						placeholder='Second name'
						{...register('secondName', {
							required: { value: true, message: 'This field is required' },
						})}
						className={styles.secondName}
					/>
					<span
						className={cn(styles.disabled, {
							[styles.error]: errors.secondName,
						})}>
						{errors.secondName?.message}
					</span>
				</div>
			</div>
			<div>
				<Input
					placeholder='Username'
					{...register('username', {
						required: { value: true, message: 'This field is required' },
					})}
					className={styles.username}
				/>
				<span
					className={cn(styles.disabled, {
						[styles.error]: errors.username,
					})}>
					{errors.username?.message}
				</span>
			</div>
			<div>
				<Input
					placeholder='Email'
					{...register('email', {
						required: { value: true, message: 'This field is required' },
						pattern: {
							value: /^\S+@\S+\.\S+$/g,
							message: 'Invalid email address',
						},
					})}
					className={styles.email}
					type='email'
				/>
				<span
					className={cn(styles.disabled, {
						[styles.error]: errors.email,
					})}>
					{errors.email?.message}
				</span>
			</div>
			<div>
				<Input
					placeholder='Password'
					type='password'
					{...register('password', {
						required: { value: true, message: 'This field is required' },
						pattern: {
							value: /[A-Z]+/g,
							message: 'The password must contain letters',
						},
						minLength: {
							value: 8,
							message: 'The password must be at least 8 characters long',
						},
						maxLength: {
							value: 30,
							message: 'The password must be no more than 30 characters',
						},
					})}
					className={styles.password}
				/>
				<span
					className={cn(styles.disabled, {
						[styles.error]: errors.password,
					})}>
					{errors.password?.message}
				</span>
			</div>
			<ChecboxInput {...register('signedin')} className={styles.signedin} />
			<button className={styles.submit}>Create account</button>
		</form>
	);
};
