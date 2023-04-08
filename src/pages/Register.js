import { useEffect } from "react";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/user/selectors";
import { useSelector } from "react-redux";

function Register() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!isLoggedIn) return;
    
    navigate('/contacts');
  },[ isLoggedIn,navigate])
  return (
    <RegisterForm/>
  );
}
export default Register;