import React, { useEffect, useState } from 'react';
import about from '../../mds/aboutme.md?raw';
import Layout from '../Layout';
import '../index.css';


export default function WorkPage() {
    const [fadeIn, setFadeIn] = useState(false);
  
    useEffect(() => {
      document.title = 'hilkin • about';
      setFadeIn(true);
    }, []);
  
    return (
        <div className={`fade-container ${fadeIn ? 'fade-in' : ''}`}>
          <Layout content={about} />
        </div>
      );
}
