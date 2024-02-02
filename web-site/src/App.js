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
// import img
import whatsapp from './assets/img/wh.png'
// import img

function App() {
  return (
    <div className="App">
      <a className='whatsapp-link' href="https://wa.me/77774345295"><img className="whatsapp-icon" src={whatsapp} alt="" /></a>
      
      <div className='Container'>
        <Header/>
      
        
      </div>
      <Form/>
      <div className='Container'>
      <Services/>
      <Portfolio/>
        
        <Team/>
        <Review/>
      </div>
      <div className="footer">
          <Footer/>
      </div>
    </div>
  );
}

export default App;
