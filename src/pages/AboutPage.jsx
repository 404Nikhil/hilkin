import React, { useEffect, useState } from 'react';
import about from '../../mds/aboutme.md?raw';
import Layout from '../Layout';
import '../index.css';

const AboutPage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    document.title = 'hilkin • about';
    // Trigger fade-in animation after component mounts
    setFadeIn(true);
  }, []);

  return (
    <div className={`fade-container ${fadeIn ? 'fade-in' : ''}`}>
      <Layout content={about} />
    </div>
  );
};

export default AboutPage;
