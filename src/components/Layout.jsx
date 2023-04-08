import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar  />
      <Suspense fallback={ <CircularProgress style={{margin:"10px auto 10px auto",width:'50px',display:'block'}} />}>
        <Outlet />
      </Suspense>
    </div>
  );
};