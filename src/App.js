
import { useState } from 'react';
import './App.css';
import Cta from './components/CTA/Cta';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Manage from './components/mange/Manage';
import Navbar from './components/Navbar/Navbar';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className={open?"App open":"App"}>
        <Navbar open={open} setOpen={setOpen}/>
        <Hero/>
        <Manage/>
        <Testimonials/>
        <Cta/>
        <Footer/>
    </div>
  );
}

export default App;
