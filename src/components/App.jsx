import React,{lazy} from "react";
import { Route, Routes } from 'react-router-dom';
import { AppStyled } from '../App.Styled';
import { Layout } from './Layout';
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/user/selectors";
import { useEffect } from "react";
import { requestRefresh } from "redux/user/operations";
import { ToastContainer} from 'react-toastify';

const ContactsPage = lazy(() => import('../pages/Contacts'));
const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));


export function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(isLoggedIn||!token) return;
      const refresh = async()=>{
        await dispatch(requestRefresh());
      }
      refresh();
  },[dispatch,isLoggedIn]);
  return (
    <AppStyled>
       <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RegisterPage />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage />
          }
        />
        <Route
          path="/contacts"
          element= {<ContactsPage/>}
        />
      </Route>
    </Routes>
    <ToastContainer/>
    </AppStyled>

  );

} 
