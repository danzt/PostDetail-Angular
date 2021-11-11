import React, { useReducer, useEffect } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const initialState = {
  favorites: [],
};

const WeatherReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_FAVORITE':
      let temp = [];
      if(state.favorites.findIndex((item )=> item.id === action.payload.id) === -1)
        temp = [...state.favorites, action.payload];
      else
        temp = state.favorites
      return {
        ...state,
        favorites: temp,
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
  const isFavorited = (id) => {
    return favorites.favorites.findIndex((item )=> item.id === id) !== -1;
  }

  useEffect(()=> {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites, dispatch]);

  const handleClick = favorite => {

    dispatch({type: 'FETCH_WEATHER_FAVORITE', payload: {...favorite, uid: Date.now()}});
  };
 return (
   <>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {weathers.map((city, index) => (
          <Col>
            <Card key={index}>
              <Card.Header>
                <Card.Title>{city.name}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <p className="text-muted">Description:</p> <p>{city.weather[0].description}</p><br/>
                  <p className="text-muted">Temp:</p> <p>{city.main.temp}</p><br/>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button className={`${isFavorited(city.id) ? "btn btn-success" : "btn btn-primary"}`} onClick={()=> handleClick(city)}>{`${isFavorited(city.id) ? 
                "Added to favorites" : "Add to Favorites"}`}</Button>
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
