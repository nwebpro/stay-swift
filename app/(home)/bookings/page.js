import { auth } from '@/auth';
import PastBooking from '@/components/User/Booking/PastBooking';
import UpcomingBooking from '@/components/User/Booking/UpcomingBooking';
import ProfileInfo from '@/components/User/ProfileInfo';
import { redirect } from 'next/navigation';

const Bookings = async () => {
	const session = await auth()
	if (!session) {
		redirect('/login')
	}
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
