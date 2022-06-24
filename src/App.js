import './App.css';
import ArtSection from './Pages/ArtSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
      <ArtSection />
    </div>
  );
}

export default App;
