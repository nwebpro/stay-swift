import PastBooking from '@/components/User/Booking/PastBooking';
import UpcomingBooking from '@/components/User/Booking/UpcomingBooking';
import ProfileInfo from '@/components/User/ProfileInfo';

const Bookings = () => {
	return (
		<>
			<section className="mt-[100px]">
				<div className="container">
					<ProfileInfo />
				</div>
			</section>
			<section>
				<div className="container">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<PastBooking />
						<UpcomingBooking />
					</div>
				</div>
			</section>
		</>
	);
};

export default Bookings;
