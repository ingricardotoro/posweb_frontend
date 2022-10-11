import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/auth';

const useAuthenticatedUser = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const authenticatedUser = useSelector(state => state.auth.authenticatedUser);

	const handleLogout = () => dispatch(logout({ navigate }));

	return {
		authenticatedUser,
		handleLogout
	};
};

export default useAuthenticatedUser;
