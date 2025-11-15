import React from 'react';
import styled from 'styled-components';
import Destinations from './Destinations';
import { useParams } from 'react-router-dom';

export const DetailContainer = styled.div`
  max-width: 700px;
  margin: 50px auto;
  padding: 30px;
  background: linear-gradient(135deg, #fdfbfb, #ebedee);
  border-radius: 16px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const DetailImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 25px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.08);
  }
`;

export const DetailButton = styled.button`
  background: linear-gradient(90deg, #ff6a00, #ee0979);
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 106, 0, 0.4);

  &:hover {
    background: linear-gradient(90deg, #ee0979, #ff6a00);
    transform: scale(1.07);
    box-shadow: 0 6px 20px rgba(255, 106, 0, 0.5);
  }

  &:active {
    transform: scale(0.97);
  }
`;


const DestinationDetail = () => {
  const { id } = useParams();
  const destinationId = parseInt(id);
  const destination = Destinations.find(dest => dest.id === destinationId);

  if (!destination) {
    return (
      <div style={{ textAlign: 'center' }}>
        Destination not found
      </div>
    );
  }

  return (
    <DetailContainer>
      <h2>{destination.name}</h2>
      <DetailImage src={destination.image} alt={destination.name} />
      <p>{destination.description}</p>
      <p>Rating: {destination.rating || 'Not available'}</p>
      <p>Best time to visit: {destination.bestTime || 'Not specified'}</p>
      <DetailButton>Book Now</DetailButton>
    </DetailContainer>
  );
};

export default DestinationDetail;


