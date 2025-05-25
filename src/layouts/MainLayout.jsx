import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className='max-w-10/12 mx-auto poppins'>
      <header>
        <Header></Header>
      </header>
      <section className='min-h-screen shadow-2xl'>
        <Outlet></Outlet>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;