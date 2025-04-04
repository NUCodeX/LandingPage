import React from 'react';
import "./App.css";
import Navigationbar from './components/navbar';
import flag from "./media/flag.jpg";
import HorizontalScrollCards from './components/newscard';
import logo from "./media/polipedia (2).png";
import logotext from "./media/pilipinas.png";
import Footer from './components/footer';

const LandingPage = () => {
  return (
    <div className="app-container">
      <Navigationbar logo={logo}/>
      
      <section 
        className="hero-section d-flex align-items-center"
        style={{ 
          backgroundImage: `url(${flag})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          position: 'relative'
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="hero-overlay"></div>
        
        {/* Modified container to align content to the left */}
        <div className="container-fluid text-white position-relative z-index-1 px-3 px-sm-4 px-md-5">
          <div className="row">
            <div className="col-12 col-lg-8 col-xl-6">
              <div className="hero-content" style={{ maxWidth: '600px' }}>
                <h1 className="display-3 fw-bold mb-3">
                  <span className='text-primary-emphasis'>Pili</span><span className="text-danger">Pinas</span>
                </h1>
                <h2 className="display-5 mb-4">Para sa Bukas</h2>
                
                <div className="hero-divider mb-4" style={{ 
                  maxWidth: '100%', 
                  width: '500px', 
                  height: '4px', 
                  backgroundColor: 'yellow' 
                }}></div>
                
                <p className="lead mt-5 mb-5">
                  Matalinong pag-pili para sa mas magandang Pilipinas,
                  <br className="d-none d-md-block" />
                  isang hakbang tungo sa mas maliwanag na kinabukasan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HorizontalScrollCards></HorizontalScrollCards>
      <Footer logo={logotext}></Footer>
    </div>
  );
};

export default LandingPage;