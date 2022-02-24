import React from 'react';
import { useLocation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularMenu from '../../components/CircularMenu';
import Routes from '../../routing/Routes';

export default function App() {
  const { pathname } = useLocation();
  const isLogin = pathname.includes('auth/login');
  return (
    <>
      {!isLogin && <CircularMenu />}
      <Routes />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
