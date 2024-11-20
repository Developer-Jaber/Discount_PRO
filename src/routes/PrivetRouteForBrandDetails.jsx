import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRouteForBrandDetails = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user){
        return children
    }
    return (
        <Navigate to='/login_register'></Navigate>
    );
};

export default PrivetRouteForBrandDetails;