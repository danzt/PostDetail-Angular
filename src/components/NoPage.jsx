import {Alert,Row, Col} from 'react-bootstrap';

const NoPage = () => {
  return (
    <Row>
      <Col md={{span:6, offset: 3}}>
        <Alert variant="danger mt-5">
          <h4 className="alert text-center">404</h4>
          <p className="text-center">Page not found</p>
        </Alert>
      </Col>
    </Row>
  );
};

export default NoPage;
