import React, { useState } from 'react';
import Meta from "../../image/CERTIFICATE_LANDING_PAGE~GNFRPR5QHT4W.jpeg";
import inprogress from "../../image/inprogress2.jpg";
import { motion } from "framer-motion";

export default function Accomplishments() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [carouselClicked, setCarouselClicked] = useState(false);
  const [reverseAnimation, setReverseAnimation] = useState(false); 

  const items = [
    {
      id: 1,
      title: 'Meta Front-End Developer',
      imageUrl: Meta,
      description1: 'Create a responsive website using HTML to structure content, CSS to handle visual style, and JavaScript to develop interactive experiences.',
      description2: 'Learn to use React in relation to Javascript libraries and frameworks.',
      description3: 'Learn Bootstrap CSS Framework to create webpages and work with GitHub repositories and version control.',
      description4: 'Prepare for a coding interview, learn best approaches to problem-solving, and build portfolio-ready projects you can share during job interviews.',
      buttonLink: 'https://coursera.org/share/aaefec16a6b1db7a4e2ba7dcb862dfe8'
    },
    {
      id: 2,
      title: 'Udemy: React - The Complete Guide 2024 (incl. React Router & Redux)',
      imageUrl: inprogress,
      description1: '**In Progress**',
      buttonLink: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/?kw=reac&src=sac&couponCode=LEADERSALE24B'
    },
  ];

  function nextItem() {
    setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
    setCarouselClicked(true);
    setReverseAnimation(false); 
    setTimeout(() => {
      setCarouselClicked(false);
    }, 2000); 
  }

  function prevItem() {
    setCurrentItemIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setCarouselClicked(true);
    setReverseAnimation(true); 
    setTimeout(() => {
      setCarouselClicked(false);
      setReverseAnimation(false); 
    }, 2000);  
  }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}>
    <section id='accomplishments'>
      <h2>Accomplishments</h2>
      <div className="carousel-container">
        <button className="nav-button prev" onClick={prevItem}>
          &lt; 
        </button>
        <div className={`carousel ${carouselClicked ? 'clicked' : ''} ${reverseAnimation ? 'reverse' : ''}`}>
          <div className="item">
            <img src={items[currentItemIndex].imageUrl} alt="Carousel Item" />
          </div>
          <div className="item-details">
            <h1>{items[currentItemIndex].title}</h1>
            <ul>
              <li>{items[currentItemIndex].description1}</li>
              <li>{items[currentItemIndex].description2}</li>
              <li>{items[currentItemIndex].description3}</li>
              <li>{items[currentItemIndex].description4}</li>
              <button onClick={() => window.open(items[currentItemIndex].buttonLink, '_blank')} >Learn More</button>
            </ul>
          </div>
        </div>
        <button className="nav-button next" onClick={nextItem}>
          &gt; 
        </button>
      </div>
    </section>
    </motion.div>
  );
}
