import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Styles/Reload.css';

const NotFound = () => {
  return (
    <Container fluid className="h-100" style={{ width: "100%!important", background: "url(https://source.unsplash.com/2000x1000?dark) center center no-repeat", backgroundSize: "cover" }}>
      <Row
        className=" align-items-center"
        style={{
          height: "100vh",
          width: "100%",
        }}
      >
       
        <Col md={6} className="mx-auto text-center text-white mt-3">
        <div class="reload" >
          <div class="reload__bar"></div>
          <div class="reload__bar"></div>
          <div class="reload__bar"></div>
          <div class="reload__bar"></div>
          <div class="reload__bar"></div>
          <div class="reload__ball"></div>
        </div>
          <h1 className="display-4">404</h1>
          <h2 className="mb-4">Oops! Page not found</h2>
          <p className="mb-4">We couldn't find the page you're looking for. Please check the URL or click the button below to go back to the homepage.</p>
          <Button variant="primary" as={Link} to="/" className="mx-auto">
            Reload
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
