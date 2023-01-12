
import { Route, Redirect } from 'react-router-dom'
const ProtectedRoute = props => {
    const getStatus = localStorage.getItem("status")
    if (getStatus === null) {
        return <Redirect to="/login" />
    }
    return <Route {...props} />
}

export default ProtectedRoute