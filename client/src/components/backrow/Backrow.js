import { useState, useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Context } from '../../context/Context';
import style from '../Secondrow/Secondrow.module.scss';

const Backrow = () => {
  const context = useContext(Context);
  const [seatsData, setSeatsData] = useState([]);
  const userName = context.userDetails?.userName;

  useEffect(() => {
    setSeatsData(context.range(1, 24));
  }, [context]);

  const selectSeatClickHandler = (num, index) => {
    let selectNumber = 0;
    let bookedSeats = 0;
    for (let i = 0; i < context.selectSeats.length; i++) {
      if (context.selectSeats[i]?.seatNumber === num) {
        selectNumber = num;
      }
    }
    for (let i = 0; i < context.all.length; i++) {
      if (context.all[i]?.seatNumber === num) {
        bookedSeats = num;
      }
    }
     if (selectNumber === num) {
      alert('Already selected');
    } else if (bookedSeats === num) {
      alert('Already booked');
    } else {
      context.setSelectColor(num);
      let items = [...context.selectSeats];
      items.push({
        seatNumber: num,
        name: userName,
        prise: 300,
        catagory: 'second',
        isReserved: true,
        select: true,
      });
      context.setSelectSeats(items);
    }
  };

  const classData = (ele, index) => {
    for (let i = 0; i < context.all.length; i++) {
      if (
        context.all[i]?.seatNumber === ele &&
        context.all[i]?.name === userName
      ) {
        return style.userReserved;
      } else if (context.all[i]?.seatNumber === ele) {
        return style.bookedSeats;
      }
    }
  };
  return (
    <div>
      <Container className="py-5">
        <h2 className=" text-end text-primary">3rd class</h2>
        <h5 className="text-end text-seconday">RS - 50/-</h5>
        <Row>
          {seatsData.map((ele, index) => (
            <Col md={1} key={index} style={{ padding: '0px' }}>
              <button
                disabled={false}
                className={`py-2 mt-1 ${
                  context.selectColor === ele ? style.select : style.colSeats
                }  ${classData(ele, index)}`}
                onClick={() => selectSeatClickHandler(ele, index)}
              >
                <h5 className="text-dark">{ele}</h5>
              </button>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Backrow;