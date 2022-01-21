import Seats from './Pages/Seats/Seats';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Context } from './context/Context';
import Payment from './components/Payment/Payment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { useContext, useEffect } from 'react';

function App() {
	//const context = useContext(Context);
	// console.log(context.user);

	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<Seats />} />
					<Route exact path="/payment/:user" element={<Payment />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
