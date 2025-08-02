import { Navigate } from 'react-router'

const PrivateRouters = ({ children, redirectTo }) => {
	const isLoggedIn = true
	return isLoggedIn ? children : <Navigate to={redirectTo} />
}

export default PrivateRouters
