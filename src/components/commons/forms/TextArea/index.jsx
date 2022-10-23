import { InputTextarea } from 'primereact/inputtextarea';
import { Controller } from 'react-hook-form';
import { Capitalize } from '../../../../lib/utils/Capitalize';

const TextArea = ({
	control,
	name,
	label,
	rows = 5,
	cols = 30,
	errors,
	placeholder
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
					<InputTextarea
						id={name}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
						cols={cols}
						rows={rows}
						placeholder={placeholder}
						className={error ? 'p-invalid block' : 'block'}
					/>
					{error && <small className='p-error block p-2'>{errorMessage}</small>}
				</>
			)}
		/>
	);
};

export default TextArea;
