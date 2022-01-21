import { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Context } from '../../context/Context';
import style from '../Secondrow/Secondrow.module.scss';
import { Link } from 'react-router-dom';


const Firstrow = () => {
  const context = useContext(Context);
  //const navigate = useNavigate();
  //const localStorageData = JSON.parse(localStorage.getItem('userDetails'));

  const [seatsData, setSeatsData] = useState([]);
  
  const userName = context.userDetails?.userName;

  useEffect(() => {
    setSeatsData(context.range(49, 60));
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
        prise: 500,
        catagory: 'third',
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
        <h2 className=" text-end text-primary">1st class</h2>
        <h5 className="text-end text-dark">RS - 200/-</h5>
        <Row>
          {seatsData.map((ele, index) => (
            <Col md={2} key={index} style={{ padding: '0px' }}>
              <button
                disabled={false}
                className={`py-2 mt-1 ${
                  context.selectColor === ele ? style.select : style.colSeats
                }  ${classData(ele, index)}`}
                onClick={() => selectSeatClickHandler(ele, index)}
              >
                <h5 className="text-white">{ele}</h5>
              </button>
            </Col>
          ))}
        </Row>
        {context.selectSeats.length > 0 && (
          <center>
            <Link to={`/payment/${userName}`}>
              <button className={style.book}>Book Your Seats</button>
            </Link>
          </center>
        )}
      </Container>
    </div>
  );
};

export default Firstrow;