import Axios from '../api/Axios';
import useAuth from './auth/useAuth';

const useRefreshToken = () => {
	const { setAuth } = useAuth();

	const refresh = async () => {
		const response = await Axios.get('auth/refresh', {
			withCredentials: true
		});
		setAuth(prev => {
			console.log(JSON.stringify(prev));
			console.log(response.data.accessToken);
			return { ...prev, accessToken: response.data.accessToken };
		});
		return response.data.accessToken;
	};
	return refresh;
};

export default useRefreshToken;
