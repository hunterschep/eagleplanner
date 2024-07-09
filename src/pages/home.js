import React from 'react';
import About from '../components/about';
import '../stylesheets/home.css'; // Ensure this is correctly linked

const Main = () => {
  return (
    <main className="mainContainer">
      <section className="box box1">
        <h1>eagle planner</h1>
        <p>@ Boston College</p>
      </section>
      <div>
        <p href="/plan" className='button'>Try It</p>
      </div>
      <section className="box box4">
        <About />
      </section>
      <section className="box box4">
        <img src="/demo.png" alt="demo" className="desktopImage" />
        <img src="/demo-mobile.png" alt="demo mobile" className="mobileImage" />
      </section>
    </main>
  );
};

export default Main;
