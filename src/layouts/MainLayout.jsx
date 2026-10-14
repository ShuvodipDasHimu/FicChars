import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content poppins">
      <header className="sticky top-0 z-40 bg-base-200">
        <Header />
      </header>
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
