import { Navigate } from "react-router-dom";
import { getCookies } from "../../utils/cookie";

const UserReroute = (props) => {
  console.log("user reroute", getCookies().client_token);
  const { component: Component, ...rest } = props;
  const cookies = getCookies();

  if (cookies.client_token) {
    return <Navigate to="/dashboard" />;
  }
  return <Component {...rest} />;
};

export default UserReroute;
