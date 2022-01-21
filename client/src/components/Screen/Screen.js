//import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './Screen.module.scss';

import { useContext } from 'react';
import { Context } from '../../context/Context';

const Screen = () => {
  const context = useContext(Context);

  const seatClearClickHandler = () => {
    context.setSelectSeats([]);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className={style.screen}>
              <h2 className="text-center bg-primary">Screen</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2 }} className={`py-5 ${style.main}`}>
            <div className={style.avilable}></div>
            <h5> &nbsp;&nbsp; Available</h5>
            <div className={style.reserved}></div>
            <h5> &nbsp;&nbsp; Reserved</h5>
            <div className={style.yourReserved}></div>
            <h5> &nbsp;&nbsp; Your Booking</h5>
          </Col>
          <Col
            md={{ span: 7, offset: 3 }}
            className={`text-danger text-center`}
          ></Col>
        </Row>

        {context.selectSeats.length > 0 && (
          <div>
            <div style={{ position: 'fixed' }}>
              <Row>
                <h2 className={`text-danger mt-5`}>Your selected seats</h2>
                {context.selectSeats.map((ele) => (
                  <span>
                    <Col md={1} key={ele.seatNumber} className={style.select}>
                      <h5>{ele.seatNumber}</h5>
                    </Col>
                  </span>
                ))}
              </Row>
              <button
                className={style.seatClear}
                onClick={seatClearClickHandler}
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Screen;