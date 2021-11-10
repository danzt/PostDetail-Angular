import React, { useReducer, useEffect } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const initialState = {
  favorites: [],
};

const WeatherReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_FAVORITE':
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
        loading: false
      };
    default:
      return state;
  }
};


const WeatherList = ({weathers}) => {
  const [favorites, dispatch] = useReducer(WeatherReducer, initialState, () => {
    const localData = localStorage.getItem('favorites');
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(()=> {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleClick = favorite => {
    dispatch({type: 'FETCH_WEATHER_FAVORITE', payload: favorite});
  };

 return (
   <>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {weathers.map((city, index) => (
          <Col>
            <Card key={index}>
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-primary" onClick={()=> handleClick(city)}>Add to favorite</Button>
              </Card.Footer>
            </Card>
          </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default WeatherList;
