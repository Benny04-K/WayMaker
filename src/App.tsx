import { useState } from 'react';
import { globalStyles } from './styles';
import { Stars, Cursor } from './components/Visual';
import Nav from './components/Nav';
import Footer, { WhatsAppFAB } from './components/Footer';
import Home from './pages/Home';
import Works from './pages/Works';

type Page = 'home' | 'works';

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function App() {
  const [page, setPage] = useState<Page>('home');

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{globalStyles}</style>
      <Stars />
      <div className="grid-overlay" />
      <div className="orb orb1" />
      <div className="orb orb2" />
      <Cursor />

      <Nav currentPage={page} onNavigate={navigate} scrollTo={scrollTo} />

      {page === 'home' && <Home scrollTo={scrollTo} onNavigate={navigate} />}
      {page === 'works' && <Works onNavigate={navigate} scrollTo={scrollTo} />}

      <Footer onNavigate={navigate} scrollTo={scrollTo} />
      <WhatsAppFAB />
    </>
  );
}
