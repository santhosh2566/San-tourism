import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Destinations from './Destinations';
import 'bootstrap/dist/css/bootstrap.min.css';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
  background: linear-gradient(135deg, #f9f9f9, #e6f0ff);
  border-radius: 16px;
  padding: 40px 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
`;

export const ListItem = styled.li`
  margin-bottom: 20px;
  text-align: center;
  background: white;
  border-radius: 12px;
  padding: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const Image = styled.img`
  width: 75%;
  height: 300px;
  border-radius: 10px;
  transition: transform 0.3s ease, filter 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #ff416c, #ff4b2b);
  border: none;
  color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #ff4b2b, #ff416c);
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(255, 75, 43, 0.4);
  }

  &:active {
    transform: scale(0.97);
  }
`;

const SearchBar = styled.input`
  width: 40%;
  padding: 10px;
  margin: 20px auto;
  display: block;
  border: 2px solid #4b7bec;
  border-radius: 8px;
  font-size: 16px;
`;

const DestinationList = ({ favorites, setFavorites }) => {
  const [query, setQuery] = useState("");

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredDestinations = Destinations.filter(dest =>
    dest.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: "#c8e2fa", padding: "2%" }}>
      <SearchBar
        type="text"
        placeholder="Search destinations..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <List>
        {filteredDestinations.map((destination) => (
          <ListItem key={destination.id}>
            <Link
              to={`/destination/${destination.id}`}
              style={{ textDecoration: 'none', color: '#333' }}
            >
              <Image src={destination.image} alt={destination.name} />
              <h3>{destination.name}</h3>
              <h5>{destination.bestTime}</h5>
              <h6>⭐ {destination.rating}</h6>
            </Link>
            <Button onClick={() => toggleFavorite(destination.id)}>
              {favorites.includes(destination.id)
                ? 'Remove from Favorites'
                : 'Add to Favorites'}
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};



export default DestinationList;
