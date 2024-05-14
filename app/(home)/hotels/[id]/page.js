import Gallery from '@/components/Hotel/Details/Gallery';
import Overview from '@/components/Hotel/Details/Overview';
import Summary from '@/components/Hotel/Details/Summary';
import { getHotelById } from '@/database/queries';

const HotelDetails = async ({ params: { id } }) => {
	const hotelInfo = await getHotelById(id);

	return (
		<>
			<Summary hotelInfo={hotelInfo} />
			<Gallery gallery={hotelInfo?.gallery} />
			<Overview overview={hotelInfo?.overview} />
		</>
	);
};

export default HotelDetails;
