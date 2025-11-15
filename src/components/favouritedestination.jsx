import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Destinations from './Destinations';

const FavContainer = styled.div`
  background-color: #f8faff;
  padding: 40px;
  text-align: center;
  min-height: 80vh;
`;

const FavGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  width: 280px;
  text-align: center;
  padding: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;

const FavoriteDestinations = ({ favorites }) => {
  const favoritePlaces = Destinations.filter(dest => favorites.includes(dest.id));

  if (favoritePlaces.length === 0) {
    return <FavContainer><h3>No favorites added yet ❤️</h3></FavContainer>;
  }

  return (
    <FavContainer>
      <h2>Your Favorite Destinations ❤️</h2>
      <FavGrid>
        {favoritePlaces.map(place => (
          <Card key={place.id}>
            <Link to={`/destination/${place.id}`} style={{ textDecoration: 'none', color: '#333' }}>
              <Image src={place.image} alt={place.name} />
              <h4>{place.name}</h4>
              <p>⭐ {place.rating}</p>
            </Link>
          </Card>
        ))}
      </FavGrid>
    </FavContainer>
  );
};

export default FavoriteDestinations;
