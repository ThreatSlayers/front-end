import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-base-dark text-white">
      <Header />
      <main className="container mx-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
