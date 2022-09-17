import { InputText } from 'primereact/inputtext';
import { Controller } from 'react-hook-form';
import { Capitalize } from '../../../../lib/utils/Capitalize';

const Input = ({ control, name, placeholder, errors }) => {
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
						className='block tracking-wide text-xs font-bold p-1'
					>
						{Capitalize(name)}
					</label>
					<InputText
						id={name}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
						placeholder={placeholder}
						className={
							error ? 'p-invalid block w-full p-2' : 'block w-full p-2 my-2'
						}
					/>
					{error && <small className='p-error block'>{errorMessage}</small>}
				</>
			)}
		/>
	);
};

export default Input;
