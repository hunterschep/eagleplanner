import React from 'react';
import '../stylesheets/about.css'; // Make sure to import the CSS file

const About = () => {
    return (
        <div className="aboutContainer">
            <div className="card">
                <i className="icon">📘</i> 
                <h3>plan</h3>
                <p>see college, major, and minor course requirements to easily plan your 4 year degree.</p>
            </div>
            <div className="card">
                <i className="icon">🚀</i> 
                <h3>scale</h3>
                <p>adapt and add new courses and programs to your plan</p>
            </div>
            <div className="card">
                <i className="icon">💼</i>
                <h3>save</h3>
                <p>export plans as images to better prepare for registration and advising</p>
            </div>
        </div>
    );
}

export default About;
