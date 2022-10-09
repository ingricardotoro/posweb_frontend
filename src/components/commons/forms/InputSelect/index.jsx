import { Dropdown } from 'primereact/dropdown';
import { Controller } from 'react-hook-form';
import { Capitalize } from '../../../../lib/utils/Capitalize';

const InputSelect = ({
	control,
	name,
	label,
	placeholder,
	options,
	errors
}) => {
	const error = errors[name];
	const errorMessage = error && error.message;

	return (
		<Controller
			control={control}
			name={name}
			render={({
				field: { name, value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<label
						className='block tracking-wide text-xs font-bold p-1'
						htmlFor={name}
					>
						{!label ? Capitalize(name) : Capitalize(label)}
					</label>
					<Dropdown
						id={name}
						value={value}
						options={options}
						onChange={e => onChange(e.value)}
						onBlur={onBlur}
						optionLabel={'name'}
						placeholder={placeholder}
						className={error ? 'p-invalid w-full' : 'w-full'}
					/>
					{error && <small className='p-error block p-2'>{errorMessage}</small>}
				</>
			)}
		/>
	);
};

export default InputSelect;
