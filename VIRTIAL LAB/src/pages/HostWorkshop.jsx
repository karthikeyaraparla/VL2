import React, { useState } from 'react';
import './Iwanto.css';

const HostWorkshop = () => {
    const [activeTab, setActiveTab] = useState('Gallery');

    const renderContent = () => {
        switch (activeTab) {
            case 'Gallery':
                return <div className="content-section">This is the Gallery section.</div>;
            case 'Workshops':
                return (
                    <div className="content-section">
                        <div className="main-content">
                            <p>This is the Workshops section.</p>
                        </div>
                        <div className="sidebar-right">
                            <h2 className="sidebar-heading">Overview and Motivation</h2>
                            <p className="sidebar-text">This section provides an overview and motivation for hosting workshops.</p>
                            <h2 className="sidebar-heading">Audience</h2>
                            <p className="sidebar-text">This section describes the target audience for the workshops.</p>
                            <h2 className="sidebar-heading">Workshop Requirements</h2>
                            <ul className="sidebar-list">
                                <li>Requirements for Online Workshop</li>
                                <li>Documents to be submitted for Online Workshop</li>
                                <li>Requirements for Onsite Version</li>
                                <li>Documents to be submitted for Onsite Workshop</li>
                            </ul>
                        </div>
                    </div>
                );
            case 'Nodal Centers':
                return <div className="content-section">This is the Nodal Centers section.</div>;
            case 'FAQ':
                return <div className="content-section">This is the FAQ section.</div>;
            case 'Testimonials':
                return <div className="content-section">This is the Testimonials section.</div>;
            default:
                return null;
        }
    };

    return (
        <div className="iwanto-container">
            <h1 className="iwanto-heading">Host Workshop</h1>
            <div className="tabs-container">
                <button className={`tab ${activeTab === 'Gallery' ? 'active' : ''}`} onClick={() => setActiveTab('Gallery')}>Gallery</button>
                <button className={`tab ${activeTab === 'Workshops' ? 'active' : ''}`} onClick={() => setActiveTab('Workshops')}>Workshops</button>
                <button className={`tab ${activeTab === 'Nodal Centers' ? 'active' : ''}`} onClick={() => setActiveTab('Nodal Centers')}>Nodal Centers</button>
                <button className={`tab ${activeTab === 'FAQ' ? 'active' : ''}`} onClick={() => setActiveTab('FAQ')}>FAQ</button>
                <button className={`tab ${activeTab === 'Testimonials' ? 'active' : ''}`} onClick={() => setActiveTab('Testimonials')}>Testimonials</button>
            </div>
            {renderContent()}
        </div>
    );
};

export default HostWorkshop;