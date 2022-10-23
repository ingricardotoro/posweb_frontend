import { Password } from 'primereact/password';
import { Controller } from 'react-hook-form';
import { Capitalize } from '../../../../lib/utils/Capitalize';
import './password.css';

const InputPassword = ({ control, name, label, placeholder, errors }) => {
	const error = errors[name];
	const errorMessage = error && error.message;

	return (
		<Controller
			control={control}
			name={name}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<label
						htmlFor={name}
						className='tracking-wide text-xs font-bold'
					>
						{!label ? Capitalize(name) : Capitalize(label) }
					</label>
					<Password
						id={name}
						value={value}
						placeholder={placeholder}
						onChange={onChange}
						onBlur={onBlur}
						className={
							error
								? 'p-password p-invalid block w-full p-2'
								: 'p-password block w-full p-2'
						}
						toggleMask
					/>
					{error && <small className='p-error block p-2'>{errorMessage}</small>}
				</>
			)}
		/>
	);
};

export default InputPassword;
