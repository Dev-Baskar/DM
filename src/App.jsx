import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Approach from './components/Approach';
import Testimonial from './components/Testimonial'; // ✅ 1. Import the new component

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Approach />
      <Testimonial /> {/* ✅ 2. Add it here */}
    </div>
  );
}

export default App;