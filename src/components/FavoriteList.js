import { Container,InputGroup, FormControl, Card, Row, Col, Button } from 'react-bootstrap';

const FavoteList = ({favorites, handleRemove, searchFavorite}) => {
  return (
    <div>
      <Container>
        <div className="mb-5">
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
            <FormControl aria-label="Large" onChange={searchFavorite} aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
        </div>
         <Row xs={1} md={3} className="g-4">
          {favorites.map((fav, index) => (
            <Col key={index}>
              <Card>
                <Card.Header>
                  <Card.Title>{fav.name}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Button variant="danger" onClick={()=>handleRemove(fav.uid)}>
                    Eliminar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
     </Container>
    </div>
  )
}

export default FavoteList;
