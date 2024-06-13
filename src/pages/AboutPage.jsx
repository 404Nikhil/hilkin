import React, { useEffect } from 'react';
import about from '../../mds/aboutme.md?raw';
import Layout from '../Layout';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'hilkin • about';
  }, []);

  return <Layout content={about} />;
};

export default AboutPage;
