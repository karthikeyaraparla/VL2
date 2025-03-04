import React, { useState } from 'react';
import './Vlead.css';

const b1 = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1740943251/b1_ellruo.jpg';

const Vlead = () => {
  const [activeTab, setActiveTab] = useState('motivation');

  const tabContent = {
    motivation: {
      title: "Motivation",
      content: "VLEAD is driven by the motivation to enhance the quality of education through innovative learning solutions. Our mission is to provide accessible and effective educational resources to students and educators worldwide."
    },
    initiatives: {
      title: "Initiatives",
      content: (
        <div>
          <h3>Current Initiatives</h3>
          <ul>
            <li>Initiative A: Description of Initiative A.</li>
            <li>Initiative B: Description of Initiative B.</li>
            <li>Initiative C: Description of Initiative C.</li>
          </ul>
        </div>
      )
    },
    timeline: {
      title: "Timeline",
      content: (
        <div className="timeline-section">
          <h3>Project Timeline</h3>
          <p>Details about the project timeline and milestones.</p>
        </div>
      )
    },
    currentTeam: {
      title: "Current Team",
      content: (
        <div className="team-grid">
          <div className="team-card">
            <img src={b1} alt="Team Member 1" />
            <h3>Team Member 1</h3>
            <p>Role: Project Manager</p>
          </div>
          <div className="team-card">
            <img src={b1} alt="Team Member 2" />
            <h3>Team Member 2</h3>
            <p>Role: Developer</p>
          </div>
          <div className="team-card">
            <img src={b1} alt="Team Member 3" />
            <h3>Team Member 3</h3>
            <p>Role: Designer</p>
          </div>
        </div>
      )
    },
    pastTeam: {
      title: "Past Team",
      content: (
        <div className="team-grid">
          <div className="team-card">
            <img src={b1} alt="Past Team Member 1" />
            <h3>Past Team Member 1</h3>
            <p>Role: Former Project Manager</p>
          </div>
          <div className="team-card">
            <img src={b1} alt="Past Team Member 2" />
            <h3>Past Team Member 2</h3>
            <p>Role: Former Developer</p>
          </div>
          <div className="team-card">
            <img src={b1} alt="Past Team Member 3" />
            <h3>Past Team Member 3</h3>
            <p>Role: Former Designer</p>
          </div>
        </div>
      )
    },
    testimonials: {
      title: "Testimonials",
      content: (
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p>"VLEAD has revolutionized my learning experience. The initiatives are incredibly detailed and helped me understand complex concepts that were difficult to grasp through textbooks alone."</p>
            <h4>- Dr. Sarah Chen</h4>
            <p className="designation">Professor, Chemical Engineering</p>
          </div>
          <div className="testimonial-card">
            <p>"As a student from a small college with limited lab facilities, VLEAD has been a game-changer. I can now perform experiments and learn at my own pace from anywhere."</p>
            <h4>- Rahul Sharma</h4>
            <p className="designation">B.Tech Student</p>
          </div>
          <div className="testimonial-card">
            <p>"The platform's user-friendly interface and comprehensive learning materials make it an invaluable resource for both teachers and students. It's truly bridging the educational gap."</p>
            <h4>- Dr. Michael Rodriguez</h4>
            <p className="designation">Department Head, Electronics</p>
          </div>
          <div className="testimonial-card">
            <p>"VLEAD has enabled us to continue practical learning even during the pandemic. The quality of simulations and the support provided are exceptional."</p>
            <h4>- Prof. Priya Patel</h4>
            <p className="designation">Associate Professor, Physics</p>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="vlead-container">
      <h1 className="vlead-heading">VLEAD</h1>

      {/* Navigation Tabs */}
      <div className="tabs-container">
        <button
          className={`tab ${activeTab === 'motivation' ? 'active' : ''}`}
          onClick={() => setActiveTab('motivation')}
        >
          Motivation
        </button>
        <button
          className={`tab ${activeTab === 'initiatives' ? 'active' : ''}`}
          onClick={() => setActiveTab('initiatives')}
        >
          Initiatives
        </button>
        <button
          className={`tab ${activeTab === 'timeline' ? 'active' : ''}`}
          onClick={() => setActiveTab('timeline')}
        >
          Timeline
        </button>
        <button
          className={`tab ${activeTab === 'currentTeam' ? 'active' : ''}`}
          onClick={() => setActiveTab('currentTeam')}
        >
          Current Team
        </button>
        <button
          className={`tab ${activeTab === 'pastTeam' ? 'active' : ''}`}
          onClick={() => setActiveTab('pastTeam')}
        >
          Past Team
        </button>
        <button
          className={`tab ${activeTab === 'testimonials' ? 'active' : ''}`}
          onClick={() => setActiveTab('testimonials')}
        >
          Testimonials
        </button>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h2>{tabContent[activeTab].title}</h2>
        <div className="content">
          {tabContent[activeTab].content}
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
              Email: support@vlead.ac.in
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
        <p>© 2024 VLEAD. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Vlead;
