import { InputMask } from 'primereact/inputmask';
import { Controller } from 'react-hook-form';
import { Capitalize } from '../../../../lib/utils/Capitalize';

const InputRtn = ({ control, name, placeholder, errors }) => {
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
						className='block tracking-wide text-xs font-bold p-1'
						htmlFor={name}
					>
						{Capitalize(name)}
					</label>
					<InputMask
						mask='9999-9999-999990'
						id={name}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
						placeholder={placeholder}
						className={error ? 'p-invalid block' : ''}
					/>
					{error && <small className='p-error block'>{errorMessage}</small>}
				</>
			)}
		/>
	);
};

export default InputRtn;
