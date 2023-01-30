import styles from './ChecboxInput.module.css';
import cn from 'classnames';
import { ChecboxInputProps } from './ChecboxInput.props';
import { ForwardedRef, forwardRef } from 'react';
export const ChecboxInput = forwardRef(
	(
		{ className, ...props }: ChecboxInputProps,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<div className={styles.checkbox}>
				<span className={styles.signedin}>Stay signed in</span>
				<input
					className={cn(styles.input, className)}
					ref={ref}
					{...props}
					type='checkbox'
				/>
			</div>
		);
	}
);
ChecboxInput.displayName = 'ChecboxInput';
