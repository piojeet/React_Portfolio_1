
import React from 'react';
import Header from './component/header/header';
import Nav from './component/nav/nav';
import About from './component/about/about';
import Expriens from './component/expriens/expriens';
import Services from './component/services/services';
import Portfolio from './component/porfolio/porfolio';
import Testimonial from './component/testimonial/testimonial';
import Contact from './component/contact/contact';
import Footer from './component/footer/footer';

function App() {
  return (
    <>
    <Header />
      <Nav />
      <About />
      <Expriens />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      </>
  );
}

export default App;
