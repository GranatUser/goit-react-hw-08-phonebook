//import { useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { UserMenuStyled } from './UserMenu.styled';
import { requestLogout } from '../../redux/user/operations';
import { selectUserEmail} from '../../redux/user/selectors';
import { toast } from 'react-toastify';
export const UserMenu = () => {
  const email = useSelector(selectUserEmail);

  const dispatch = useDispatch();
  const handleLogout=async()=>{
    try{
      await dispatch(requestLogout()).unwrap();
      toast.success(`You have successfully logged out!`)
  }
  catch(e){
          toast.error(`Ooops.....Something went wrong`);
      }
      
  }
  return (
    <UserMenuStyled >
      <p>Welcome, <span>{email}</span></p>
      <button onClick={handleLogout} type="button">
        Logout
      </button>
    </UserMenuStyled>
  );
};
