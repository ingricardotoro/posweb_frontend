import { InputTextarea } from 'primereact/inputtextarea';
import { Controller } from 'react-hook-form';
import { Capitalize } from '../../../../lib/utils/Capitalize';

const TextArea = ({ control, name, rows = 5, cols = 30, errors }) => {
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
					<InputTextarea
						id={name}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
						cols={cols}
						rows={rows}
						placeholder={placeholder}
						className={error ? 'p-invalid block' : ''}
					/>
					{error && <small className='p-error block'>{errorMessage}</small>}
				</>
			)}
		/>
	);
};

export default TextArea;
