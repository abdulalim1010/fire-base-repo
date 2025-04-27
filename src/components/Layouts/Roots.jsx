import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router';

const Roots = () => {
  return (
    <div>
    <Header/> 
<Outlet/>
    </div>
  );
};

export default Roots;