import React, { useState } from 'react';
import './Virtual-labs.css';

const b1 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1740943251/b1_ellruo.jpg';


const i1 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741007684/i1_lc1hzx.jpg';
const i2 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741007684/i2_ebv3iw.jpg';
const i3 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741007685/i3_pifuwc.jpg';
const i4 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741007684/i4_fd1qi4.png';
const i5 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741007684/i5_gufddd.png';
const i6 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741007683/i6_dt1fmw.png';
const i7 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741007683/i7_xdtpiw.png';
const i8 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741007683/i9_xleid4.jpg';
const i9 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741007683/i9_xleid4.jpg';
const i10 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741007683/i10_recwdq.png';
const i11 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1741007683/i12_tdigpo.jpg';

const Virtuallabs = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabContent = {
    overview: {
      title: "Overview",
      content: "Virtual Labs, an Ministry of Education project under NMEICT, offers free remote laboratory learning experiences. Workshops and nodal centers support institute partnerships within the Virtual Labs consortium. The project, led by IIT Delhi and involving eleven institutes, provides over 190 Virtual Labs and 1600+ web-enabled experiments across various domains using open-source technologies. These simulations are accessible online without any additional infrastructure or fees."
    },
    goals: {
      title: "Goals and Philosophy",
      content: (
        <div>
          <h3>Goals</h3>
          <ul>
            <li>To offer a remote learning experience with simulated experiments in diverse areas of Science and Engineering.</li>
            <li>To engage students by sparking their curiosity, allowing them to learn fundamental and complex concepts through remote experimentation.</li>
            <li>To present a complete Learning Management System around the Virtual Labs, where students and teachers can utilize various tools for learning, including supplemental web-resources, video-lectures, animated demonstrations, and self-evaluation.</li>
          </ul>

          <h3>Philosophy</h3>
          <ul>
            <li>Bridging the gap for colleges that lack lab facilities: Provide online labs as a substitute for hands-on lab work in engineering colleges that do not have the necessary equipment.</li>
            <li>Enhancing existing labs with online resources: Expand the capabilities of existing labs with online labs to complement and augment the learning experience of engineering students.</li>
            <li>Empowering educators through specialized workshops: Offer workshops on-site or online to enhance the skill set and proficiency of educators in the effective use of online labs in engineering education.</li>
          </ul>
        </div>
      )
    },
    institutes: {
      title: "Participating Institutes",
      content: (
        <div className="institutes-grid">
          <div className="institute-card">
            <img src={i1} alt="Amrita Vishwa Vidyapeetham" />
            <h3>AMRITA VISHWA VIDYAPEETHAM</h3>
          </div>
          <div className="institute-card">
            <img src={i2} alt="COE Pune" />
            <h3>COE PUNE</h3>
          </div>
          <div className="institute-card">
            <img src={i3} alt="Dayalbagh Educational Institute" />
            <h3>DAYALBAGH EDUCATIONAL INSTITUTE</h3>
          </div>
          <div className="institute-card">
            <img src={i4} alt="IIT Bombay" />
            <h3>IIT BOMBAY</h3>
          </div>
          <div className="institute-card">
            <img src={i5} alt="IIT Delhi" />
            <h3>IIT DELHI</h3>
          </div>
          <div className="institute-card">
            <img src={i6} alt="IIT Guwahati" />
            <h3>IIT GUWAHATI</h3>
          </div>
          <div className="institute-card">
            <img src={i7} alt="IIT Kanpur" />
            <h3>IIT KANPUR</h3>
          </div>
          <div className="institute-card">
            <img src={i8} alt="IIT Kharagpur" />
            <h3>IIT KHARAGPUR</h3>
          </div>
          <div className="institute-card">
            <img src={i9} alt="IIT Roorkee" />
            <h3>IIT ROORKEE</h3>
          </div>
          <div className="institute-card">
            <img src={i10} alt="IIIT Hyderabad" />
            <h3>IIIT HYDERABAD</h3>
          </div>
          <div className="institute-card">
            <img src={i11} alt="NIT Karnataka" />
            <h3>NIT KARNATAKA</h3>
          </div>

        </div>
      )
    },
    testimonials: {
      title: "Testimonials",
      content: (
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p>"Virtual Labs has revolutionized my learning experience. The simulations are incredibly detailed and helped me understand complex concepts that were difficult to grasp through textbooks alone."</p>
            <h4>- Dr. Sarah Chen</h4>
            <p className="designation">Professor, Chemical Engineering</p>
          </div>
          <div className="testimonial-card">
            <p>"As a student from a small college with limited lab facilities, Virtual Labs has been a game-changer. I can now perform experiments and learn at my own pace from anywhere."</p>
            <h4>- Rahul Sharma</h4>
            <p className="designation">B.Tech Student</p>
          </div>
          <div className="testimonial-card">
            <p>"The platform's user-friendly interface and comprehensive learning materials make it an invaluable resource for both teachers and students. It's truly bridging the educational gap."</p>
            <h4>- Dr. Michael Rodriguez</h4>
            <p className="designation">Department Head, Electronics</p>
          </div>
          <div className="testimonial-card">
            <p>"Virtual Labs has enabled us to continue practical learning even during the pandemic. The quality of simulations and the support provided are exceptional."</p>
            <h4>- Prof. Priya Patel</h4>
            <p className="designation">Associate Professor, Physics</p>
          </div>
        </div>
      )
    },
    faq: {
      title: "FAQ",
      content: "Find answers to commonly asked questions about Virtual Labs."
    }
  };

  return (
    <div className="virtual-labs-container">
      <h1 className="virtual-labs-heading">Virtual Labs</h1>

      {/* Navigation Tabs */}
      <div className="tabs-container">
        <button
          className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`tab ${activeTab === 'goals' ? 'active' : ''}`}
          onClick={() => setActiveTab('goals')}
        >
          Goals and Philosophy
        </button>
        <button
          className={`tab ${activeTab === 'institutes' ? 'active' : ''}`}
          onClick={() => setActiveTab('institutes')}
        >
          Participating Institutes
        </button>
        <button
          className={`tab ${activeTab === 'testimonials' ? 'active' : ''}`}
          onClick={() => setActiveTab('testimonials')}
        >
          Testimonials
        </button>
        <button
          className={`tab ${activeTab === 'faq' ? 'active' : ''}`}
          onClick={() => setActiveTab('faq')}
        >
          FAQ
        </button>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h2>{tabContent[activeTab].title}</h2>
        <div className="content">
          {tabContent[activeTab].content}
        </div>
      </div>

      {/* Stakeholders Section */}
      <div className="stakeholders-section">
        <h2>Stakeholders</h2>
        <div className="stakeholder-cards">
          {['Students', 'Faculty', 'Subject Matter Experts', 'Developers', 'Nodal Centre Community', 'Participating Institutes', 'Interns', 'Ministry of Education', 'Accreditation Bodies', 'Service Providers', 'Universities', 'Researchers'].map((stakeholder) => (
            <div key={stakeholder} className="stakeholder-card">
              <img src={b1} alt={stakeholder} className="stakeholder-image" />
              <h3>{stakeholder}</h3>
            </div>
          ))}
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

export default Virtuallabs;