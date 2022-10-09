import { Button } from 'primereact/button';

import { Input, InputPassword } from '../../components/commons/forms';
import useFormLogin from './hook/useForm';

const Login = () => {
	const { control, handleSubmit, onSubmit, errors, errorMessage, isLoading } =
		useFormLogin();

	return (
		<article className='h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0 bg-indigo-600'>
			<header className='max-w-lg mx-auto'>
				<h2 className='text-4xl font-bold text-white text-center'>PosWeb</h2>
				<main className='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl'>
					{errorMessage && errorMessage.error && (
						<section className='bg-red-200 p-5 rounded border-b-2 border-red-300'>
							<span className='font-semibold text-lg text-red-800 capitalize'>
								{errorMessage.message}
							</span>
						</section>
					)}
					<section className='mt-10 flex flex-col'>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='mb-2 p-2 rounded bg-gray-200'>
								<Input
									control={control}
									name='username'
									label='nombre de usuario'
									placeholder='Ingrese su nombre de usuario'
									errors={errors}
								/>
							</div>
							<div className='mb-6 p-2 rounded bg-gray-200'>
								<InputPassword
									control={control}
									name='password'
									label='Contraseña'
									placeholder='Ingresa tu contraseña'
									errors={errors}
								/>
							</div>
							<Button
								type='submit'
								label='Iniciar Sesión'
								loading={isLoading}
								className='bg-indigo-600 border-indigo-600 hover:border-indigo-600'
							/>
						</form>
					</section>
				</main>
			</header>
		</article>
	);
};

export default Login;
