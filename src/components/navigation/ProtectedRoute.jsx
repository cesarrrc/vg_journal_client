import { Navigate } from "react-router-dom";
import { getCookies } from "../../utils/cookie";

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;
  const cookies = getCookies();
  console.log(cookies, "cookokkkieisdsfss");

  if (cookies.client_token) {
    return <Component {...rest} />;
  }

  <Navigate to="/login" />;
};

export default ProtectedRoute;
