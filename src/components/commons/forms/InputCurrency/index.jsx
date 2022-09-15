import { InputText } from 'primereact/inputtext';
import { Controller } from 'react-hook-form';
import { Capitalize } from '../../../../lib/utils/Capitalize';

const InputCurrency = ({
	control,
	name,
	placeholder,
	currency = 'L.',
	errors
}) => {
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
				<div className='p-inputgroup'>
					<label htmlFor={name}>{Capitalize(name)}</label>
					<span className='p-inputgroup-addon'>{currency}</span>
					<InputText
						id={name}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
						placeholder={placeholder}
						className={error ? 'p-invalid block' : ''}
					/>
					{error && <small className='p-error block'>{errorMessage}</small>}
				</div>
			)}
		/>
	);
};

export default InputCurrency;
