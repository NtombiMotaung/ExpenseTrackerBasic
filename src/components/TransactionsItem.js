import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function TransactionsItem({income, index}) {

    let date = new Date(income.date);
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();



  return (
    <div className='transaction-item'>
             <Row className="mb-5 mt-3 justify-content-md-center">
                <Col xs lg="1" >
                    <div className='desc'>{income.desc}</div>
                </Col>
                <Col xs lg="1">
                <div className='amount'>{income.amount}</div>
                </Col>
                <Col xs lg="1">
                <div className='date'>{day + "/" + month + "/" + year}</div>
                </Col>

                </Row>

        
        
        

    </div>
  )
}

export default TransactionsItem;