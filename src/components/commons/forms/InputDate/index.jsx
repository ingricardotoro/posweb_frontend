import { addLocale, locale } from 'primereact/api';
import { Calendar } from 'primereact/calendar';
import { Controller } from 'react-hook-form';
import { Capitalize } from '../../../../lib/utils/Capitalize';

const InputDate = ({ control, name, placeholder, errors }) => {
	const error = errors[name];
	const errorMessage = error && error.message;

	addLocale('es', {
		firstDayOfWeek: 1,
		dayNames: [
			'domingo',
			'lunes',
			'martes',
			'miércoles',
			'jueves',
			'viernes',
			'sábado'
		],
		dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
		dayNamesMin: ['D', 'L', 'M', 'Mi', 'J', 'V', 'S'],
		monthNames: [
			'Enero',
			'Febrero',
			'Marzo',
			'Abril',
			'Mayo',
			'Junio',
			'Julio',
			'Agosto',
			'Septiembre',
			'Octubre',
			'Noviembre',
			'Diciembre'
		],
		monthNamesShort: [
			'Ene',
			'Feb',
			'Mar',
			'Abr',
			'May',
			'Jun',
			'Jul',
			'Ago',
			'Sep',
			'Oct',
			'Nov',
			'Dic'
		],
		today: 'Hoy',
		clear: 'Limpiar'
	});
	locale('es');

	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { value, onChange }, fieldState: { error } }) => (
				<>
					<label htmlFor={name}>{Capitalize(name)}</label>
					<Calendar
						id={name}
						value={value}
						onChange={onChange}
						placeholder={placeholder}
						className={error ? 'border-red-700 block' : ''}
					/>
					{error && <small className='p-error block'>{errorMessage}</small>}
				</>
			)}
		/>
	);
};

export default InputDate;
