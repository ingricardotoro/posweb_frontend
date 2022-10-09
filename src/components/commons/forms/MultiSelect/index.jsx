import { MultiSelect } from 'primereact/multiselect';
import { Controller } from 'react-hook-form';
import { Capitalize } from '../../../../lib/utils/Capitalize';

const SelectMulti = ({
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
					<MultiSelect
						id={name}
						value={value}
						options={options}
						onChange={onChange}
						onBlur={onBlur}
						placeholder={placeholder}
						display='chip'
						optionLabel={'name'}
						className={error ? 'p-invalid w-full' : 'w-full'}
					/>
					{error && <small className='p-error block p-2'>{errorMessage}</small>}
				</>
			)}
		/>
	);
};

export default SelectMulti;
