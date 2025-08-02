import { Navigate } from 'react-router'

const RestrictedRoutes = ({ children, redirectTo }) => {
	const isLoggedIn = true
	return isLoggedIn ? <Navigate to={redirectTo} /> : children
}

export default RestrictedRoutes
