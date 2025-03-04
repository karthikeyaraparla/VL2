import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const b1 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1740943251/b1_ellruo.jpg';
const b2 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1740943253/b2_exustw.jpg';
const b3 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1740943252/b3_pjvs8y.jpg';
const b4 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1740944941/b4_xpgesu.jpg';
const b5 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1740944943/b5_tyiiro.jpg';
const b6 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1740944971/b6_horrtu.jpg';

const cardData = [
  {
    title: "Computer Science & Engg",
    image: "https://res.cloudinary.com/ds18h1q0k/image/upload/v1740932977/cse_thva1e.jpg",
    description: "Explore algorithms, programming, and computer systems"
  },
  {
    title: "Mechanical",
    image: "https://res.cloudinary.com/ds18h1q0k/image/upload/v1740932974/WhatsApp_Image_2025-03-02_at_21.51.08_27f47ddb_mzua5x.jpg",
    description: "Study dynamics, thermodynamics, and machine design"
  },
  {
    title: "Chemical Engineering",
    image: "https://res.cloudinary.com/ds18h1q0k/image/upload/v1740932974/chemical_gvnagn.jpg",
    description: "Learn about processes, reactions, and material science"
  },
  {
    title: "Electronics and Comm. Engg",
    image: "https://res.cloudinary.com/ds18h1q0k/image/upload/v1740932974/electronics_and_comm_e6tkxd.jpg",
    description: "Discover circuits, signals, and electronic systems"
  },
  {
    title: "Biotechnology",
    image: "https://res.cloudinary.com/ds18h1q0k/image/upload/v1740932977/biotech_wajyc8.jpg",
    description: "Explore genetics, biochemistry, and bioprocessing"
  },
  {
    title: "Electrical Engineering",
    image: "https://res.cloudinary.com/ds18h1q0k/image/upload/v1740932975/electrical_eng_yn14qn.jpg",
    description: "Explore genetics, biochemistry, and bioprocessing"
  },
  {
    title: "Chemical Sciences",
    image: "https://res.cloudinary.com/ds18h1q0k/image/upload/v1740932975/chemcial_science_w76nrr.jpg",
    description: "Explore genetics, biochemistry, and bioprocessing"
  },
  {
    title: "Physical Sciences",
    image: "https://res.cloudinary.com/ds18h1q0k/image/upload/v1740932976/physical_nm8fpy.jpg",
    description: "Explore genetics, biochemistry, and bioprocessing"
  },
  {
    title: "Civil Engineering",
    image: "https://res.cloudinary.com/ds18h1q0k/image/upload/v1740932976/civil_hmag4j.jpg",
    description: "Explore genetics, biochemistry, and bioprocessing"
  },
];

const Home = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Lenis smooth scroll setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -20 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP setup
    gsap.registerPlugin(Draggable);

    // Calculate the total width of all cards
    const cards = sliderRef.current.children;
    const cardWidth = cards[0].offsetWidth;
    const totalWidth = cardWidth * cards.length;
    
    // Clone cards for infinite effect
    const cardsToClone = Array.from(cards).slice(0, 5);
    cardsToClone.forEach(card => {
      const clone = card.cloneNode(true);
      sliderRef.current.appendChild(clone);
    });

    // Initialize Draggable
    Draggable.create(sliderRef.current, {
      type: "x",
      inertia: true,
      bounds: {
        minX: -totalWidth + containerRef.current.offsetWidth,
        maxX: 0
      },
      edgeResistance: 0.65,
      onDrag: function() {
        // Check if we need to loop
        if (this.x <= -totalWidth/2) {
          this.x += totalWidth/2;
        } else if (this.x >= 0) {
          this.x -= totalWidth/2;
        }
      }
    });

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="home-container">
        <div id="cursor"></div>
      <div className="spline">
        <spline-viewer url="https://prod.spline.design/4UjWcx5AakVFB4YG/scene.splinecode"></spline-viewer>
      </div>
      <div class="parent">
        <div class="watermark">
            <button>
                L E T ' S&nbsp;&nbsp;&nbsp;&nbsp; S T A R T
            </button>
        </div>
    </div>

      <div className="headline">
        <h1>Let's Explore, Experiment and Discover !</h1>
      </div>

      <div className="para">
        <p>The Virtual Labs Engineering, Architecture, and Design (VLEAD) Team at IIIT Hyderabad optimizes Virtual Labs operations, including infrastructure management, system administration, user interface design, process coordination, analytics, automation, performance, security enhancements, content authoring tool development, and technology research. Their efforts ensure efficiency and a seamless learning experience.</p>
      </div>
      
      <div className="learning-spheres" ref={containerRef}>
        <h2>Learning Spheres</h2>
        <div className="card-container" ref={sliderRef}>
          {cardData.map((card, index) => (
            <div className="card" key={index}>
              <h3>{card.title}</h3>
              <div className="card-content">
                <img src={card.image} alt={card.title} />
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="activities">
        <h3>
          Our Activies
        </h3>
        <div className="boxs">
          <div className="b1">
            <h4>Development and Hosting</h4>
            <img src={b1} alt="" />
          </div>

          <div className="b1">
            <h4>Outreach</h4>
            <img src={b2} alt="" />
          </div>

          <div className="b1">
            <h4>Research</h4>
            <img src={b3} alt="" />
          </div>
        </div>
      </div>

      <div className="activities">
        <h3>
          Explore Further
        </h3>
        <div className="boxs">
          <div className="b1">
            <h4>Virtual Labs FAQ</h4>
            <img src={b4} alt="" />
          </div>

          <div className="b1">
            <h4>Workshop FAQ</h4>
            <img src={b5} alt="" />
          </div>

          <div className="b1">
            <h4>Analytics</h4>
            <img src={b6} alt="" />
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Address</h4>
            <p>
            Engineering and Architecture Division :
              <br />
              Room No:B5-203, Vindhya C6, VLEAD, IIIT-H,
              <br />
              Gachibowli, Hyderabad - 500032
            </p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>
            General Information : 011-64674687
              <br />
              Development/Outreach : +91-9177792945
              <br />
              Email: support@vlabs.ac.in
            </p>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright">
        <p>© 2024 Virtual Labs IIT Hyderabad. All Rights Reserved.</p>
      </div>
    </div>
    
  );
};

export default Home; 