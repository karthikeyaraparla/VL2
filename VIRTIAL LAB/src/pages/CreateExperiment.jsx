import React from 'react';
import './Iwanto.css';

const CreateExperiment = () => {
    return (
        <div className="iwanto-container">
            <h1 className="iwanto-heading">Create Experiment</h1>
            <div className="iwanto-content">
                <div className="sidebar">
                    <h2 className="sidebar-heading">On-Boarding and Hosting</h2>
                    <ul className="sidebar-list">
                        <li>Onboarding Process</li>
                        <li>Development Process</li>
                        <li>Hosting Process</li>
                        <li>Lab & Experiment Lifecycle</li>
                        <li>Bug Management Process</li>
                        <li>Troubleshooting Guide</li>
                        <li>Best Practices</li>
                    </ul>
                    <h2 className="sidebar-heading">Developer Tools</h2>
                    <ul className="sidebar-list">
                        <li>VS Code Authoring Environment</li>
                        <li>Code Assessment Tools</li>
                        <li>Create Experiment Online</li>
                        <li>Develop Online</li>
                    </ul>
                    <h2 className="sidebar-heading">Progressive Web Application</h2>
                    <ul className="sidebar-list">
                        <li>User Guide</li>
                        <li>Content Creator Guide</li>
                    </ul>
                    <h2 className="sidebar-heading">See Also</h2>
                    <ul className="sidebar-list">
                        <li>Virtual Box Installation</li>
                        <li>VLEAD Tech Blogs</li>
                    </ul>
                </div>
                <div className="main-content">
                    <p>This is the Create Experiment page.</p>
                </div>
            </div>
        </div>
    );
};

export default CreateExperiment;