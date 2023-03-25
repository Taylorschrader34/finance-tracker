import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Accounts = () => {

  const buttonStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center mb-5">
          <Col xs lg="2">
            <Link to="/accounts/bankAccounts" style={buttonStyle}>
              <Button variant="primary">
                Bank Accounts
              </Button>
            </Link>
          </Col>
          <Col xs lg="2">
            <Link to="/accounts/cash" style={buttonStyle}>
              <Button variant="primary">
                Cash
              </Button>
            </Link>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-5">
          <Col xs lg="2">
            <Link to="/accounts/creditCards" style={buttonStyle}>
              <Button variant="primary">
                Credit Cards
              </Button>
            </Link>
          </Col>
          <Col xs lg="2">
            <Link to="/accounts/investments" style={buttonStyle}>
              <Button variant="primary">
                Investments
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Accounts;
