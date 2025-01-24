import React from 'react';
import img from '../assets/bg-university.jpg';
import img2 from '../assets/blob.png';
import s2 from '../assets/s2.jpg';
import d3 from '../assets/d3.jpg';
import s4 from '../assets/s4.jpg';
import heroImg from '../assets/heroImg.png';
import Navbar from '../components/core/Home/Navbar';
import Footer from '../components/core/Footer';
import Hero from '../components/core/Home/Hero';
import Feature from '../components/core/Home/Feature';
import Testimonial from '../components/core/Home/Testimonial';
import Faq from '../components/core/Home/Faq';
import AboutUs from '../components/core/Home/AboutUs';
import Statistic from '../components/core/Home/Statistic';

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <AboutUs />
      <Statistic />
      <Feature />
      <Faq />
      <Testimonial />

      <Footer />
    </div>
  );
};

export default Home;
