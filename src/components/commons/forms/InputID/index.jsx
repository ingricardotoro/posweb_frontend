import { InputMask } from 'primereact/inputmask';
import { Controller } from 'react-hook-form';
import { Capitalize } from '../../../../lib/utils/Capitalize';

const InputID = ({ control, name, label, placeholder, errors }) => {
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
						{!label ? Capitalize(name) : Capitalize(label)}
					</label>
					<InputMask
						mask='9999-9999-99999'
						id={name}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
						placeholder={placeholder}
						className={
							error ? 'p-invalid block w-full p-2' : 'block w-full p-2 my-2'
						}
					/>
					{error && <small className='p-error block p-2'>{errorMessage}</small>}
				</>
			)}
		/>
	);
};

export default InputID;
