import { MultiSelect } from 'primereact/multiselect';
import { Controller } from 'react-hook-form';
import { Capitalize } from '../../../../lib/utils/Capitalize';

const SelectMulti = ({ control, name, placeholder, options, errors }) => {
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
					<label htmlFor={name}>{Capitalize(name)}</label>
					<MultiSelect
						id={name}
						value={value}
						options={options}
						onChange={onChange}
						onBlur={onBlur}
						placeholder={placeholder}
						display='chip'
						optionLabel={'name'}
						className={error ? 'p-invalid block' : ''}
					/>
					{error && <small className='p-error block'>{errorMessage}</small>}
				</>
			)}
		/>
	);
};

export default SelectMulti;
