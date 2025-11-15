import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 60px 40px;
  text-align: center;
  background: linear-gradient(135deg, #f9f9f9, #e6f0ff);
  border-radius: 16px;
  max-width: 800px;
  margin: 60px auto;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
`;

const About = () => (
  <AboutContainer>
    <h2>About Incredible India</h2>
    <p>
      India is a land of diverse cultures, languages, and traditions — from the snow-capped
      Himalayas to the tropical backwaters of Kerala. Each region offers a unique and unforgettable experience.
      From ancient temples to vibrant festivals, India truly embodies the phrase "Unity in Diversity."
    </p>
  </AboutContainer>
);

export default About;
