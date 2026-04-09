import React from 'react';
import Homepage from '../components/pages/Homepage/Homepage';
import { Outlet } from 'react-router';
import NavBar from '../components/shared/NavBar/NavBar';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet/>
    </>
  );
};

export default MainLayout;
