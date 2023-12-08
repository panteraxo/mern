import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
/*  const user = null;  */
/* const user ={id:1,role: 'regular'}*/
const{user}= useAuth();
if (!user) return <Navigate to="/login" />;
  return children;
};

export default PrivateRoute;