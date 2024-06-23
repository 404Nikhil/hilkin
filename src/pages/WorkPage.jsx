import  work from "../../mds/work.md?raw"
import React, { useEffect, useState } from 'react';
import Layout from '../Layout';

export default function WorkPage() {
    const [fadeIn, setFadeIn] = useState(false);
  
    useEffect(() => {
      document.title = 'hilkin • work';
      setFadeIn(true);
    }, []);
  
    return (
        <div className={`fade-container ${fadeIn ? 'fade-in' : ''}`}>
          <Layout content={work} />
        </div>
      );
}