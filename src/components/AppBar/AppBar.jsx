import {AppBarStyled} from './AppBar.styled';
import { Navigation } from '../Navigation/Navigation';
import {UserMenu} from '../UserMenu/UserMenu';
import {AuthNav } from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/user/selectors';
import { useSelector } from 'react-redux';

export const AppBar = () => {
    const isLoggedIn =useSelector(selectIsLoggedIn);

    return (
      <AppBarStyled>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBarStyled>
    );
  };