
import Screen from '../../components/Screen/Screen';
import  './seats.css';
import Secondrow from '../../components/Secondrow/Secondrow';
import Backrow from '../../components/backrow/Backrow';
import Firstrow from '../../components/Firstrow/Firstrow';

const Seats = () => {
	return (
		<div class="bg-container">
			<Screen />
			<Backrow/>
			<Secondrow/>
			<Firstrow/>
		</div>
	);
};

export default Seats;
