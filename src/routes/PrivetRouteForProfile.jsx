import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loding from "../pages/Loding";

const PrivetRouteForProfile = ({children}) => {
    const {user,loding} = useContext(AuthContext)
    if(loding){
        return <Loding></Loding>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to='/'></Navigate>
    );
};

export default PrivetRouteForProfile;