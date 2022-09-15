import { Checkbox } from 'primereact/checkbox';
import { Controller } from 'react-hook-form';
import { Capitalize } from '../../../../lib/utils/Capitalize';

const InputCheckbox = ({ control, name, placeholder, errors }) => {
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
					<label htmlFor={name} className='p-checkbox-label'>
						{Capitalize(name)}
					</label>
					<Checkbox
						inputId={name}
						checked={value}
						onChange={onChange}
						onBlur={onBlur}
						placeholder={placeholder}
						className={error ? 'p-invalid block' : ''}
					></Checkbox>
					{error && <small className='p-error block'>{errorMessage}</small>}
				</>
			)}
		/>
	);
};

export default InputCheckbox;
