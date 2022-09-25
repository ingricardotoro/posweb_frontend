import { Link } from 'react-router-dom';
import pageNotFound from '../../assets/images/404.png';

const Misssing = () => {
	return (
		<article className='bg-gray-100 h-screen flex items-center justify-center mx-4'>
			<div className='mt-24 flex flex-col items-center'>
				<img
					className='w-2/3 h-2/3 object-cover'
					src={pageNotFound}
					alt='404'
				/>
				<section className='tracking-widest mt-4 text-center'>
					<h2 className='text-gray-500 text-6xl block'>404</h2>
					<span className='text-gray-500 text-xl'>
						Lo sentimos, ¡No pudimos encontrar lo que buscas!
					</span>
				</section>
				<div className='mt-6'>
					<Link
						to='/'
						className='text-gray-500 text-center font-mono text-xl bg-gray-200 p-3 rounded-md hd:shadow-md'
					>
						Regresar
					</Link>
				</div>
			</div>
		</article>
	);
};

export default Misssing;
