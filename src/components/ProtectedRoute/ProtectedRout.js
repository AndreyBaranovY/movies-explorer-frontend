import { Route, Redirect } from 'react-router-dom';
import { PATH_ROUTES } from '../../utils/pathRouts';

const ProtectedRoute = (props) => {
  const { loggedIn, children, ...rest } = props;
  return loggedIn ? <Route {...rest}>{children}</Route> : <Redirect to={PATH_ROUTES.MAIN} />;
}

export default ProtectedRoute;
