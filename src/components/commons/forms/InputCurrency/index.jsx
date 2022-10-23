import { InputText } from 'primereact/inputtext';
import { Controller } from 'react-hook-form';
import { Capitalize } from '../../../../lib/utils/Capitalize';

const InputCurrency = ({
	control,
	name,
	label,
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
				<>
					<label
						htmlFor={name}
						className='block tracking-wide text-xs font-bold p-1'
					>
						{!label ? Capitalize(name) : Capitalize(label)}
					</label>
					<div className='p-inputgroup'>
						<span className='p-inputgroup-addon'>{currency}</span>
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
					</div>
					{error && <small className='p-error block p-2'>{errorMessage}</small>}
				</>
			)}
		/>
	);
};

export default InputCurrency;
