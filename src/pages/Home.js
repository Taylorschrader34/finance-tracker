import React, { useState } from 'react';
import { TransactionForm } from '../components/Forms/Transaction/TransactionForm';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [transactionFormShow, setTransactionFormShow] = useState(false);

  const buttonStyle = {
    textDecoration: 'none'
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center mb-5">
          <Col xs lg="2">
            <Link to={"/monthlyReport"} style={buttonStyle}>
              <Button>
                See Monthly Reports
              </Button>
            </Link>
          </Col>
          <Col xs lg="2">
            <Link to={"/yearlyReport"} style={buttonStyle}>
              <Button>
                See Yearly Reports
              </Button>
            </Link>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-5">
          <Col xs lg="2">
            <Button variant="primary" onClick={() => setTransactionFormShow(true)}>
              Add Transaction
            </Button>
          </Col>
        </Row>
      </Container>

      <TransactionForm
        show={transactionFormShow}
        onHide={() => setTransactionFormShow(false)}
      />
    </>
  );
};

export default Home;
