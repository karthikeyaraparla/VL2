import React from 'react';
import './Iwanto.css';

const ExploreResearch = () => {
    return (
        <div className="iwanto-container">
            <h1 className="iwanto-heading">Explore Research</h1>
            <div className="iwanto-content">
                <div className="sidebar-left">
                    <h2 className="sidebar-heading">Research</h2>
                    <ul className="sidebar-list">
                        <li>Open Problems</li>
                        <li>Publications</li>
                        <li>Talks</li>
                    </ul>
                </div>
                <div className="main-content">
                    <p>This is the Explore Research page.</p>
                </div>
            </div>
        </div>
    );
};

export default ExploreResearch;