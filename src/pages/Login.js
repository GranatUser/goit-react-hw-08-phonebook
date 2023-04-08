import { useEffect } from 'react';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/user/selectors';
import { useNavigate } from 'react-router-dom';

 function Login() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!isLoggedIn) return;
    
    navigate('/contacts');
  },[ isLoggedIn,navigate])
  return (
    <LoginForm/>
  );
}
export default Login;