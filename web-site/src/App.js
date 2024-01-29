import React from 'react';
import './App.css';
// import components

import Header from './components/header/Header'
import Form from './components/form/Form'
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Team from './components/team/Team';
import Review from './components/reviews/Review';
import Footer  from './components/footer/Footer';

// import components
function App() {
  return (
    <div className="App">
      <div className='Container'>
        <Header/>
        <Form/>
        <Services/>
        <Portfolio/>
        <Team/>
        <Review/>
<<<<<<< HEAD
      </div>
      <div className="footer">
        <Footer/>
=======
        <div className='footerComp'>
          <Footer/>
        </div>
        
>>>>>>> 0bc0fdc73c8c78fb836f5991176adc56ec2a2256
      </div>
    </div>
  );
}

export default App;
