import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/frontpage';
import { Services } from './pages/frontpage/Services';
import { SignUp } from './pages/frontpage/SignUp';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'services':
        return <Services />;
      case 'signup':
        return <SignUp onLoginClick={() => setCurrentPage('home')} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {currentPage !== 'signup' && (
        <Navbar 
          currentPage={currentPage} 
          onNavigate={(page) => setCurrentPage(page)} 
        />
      )}
      
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      {currentPage !== 'signup' && <Footer />}
    </div>
  );
}
