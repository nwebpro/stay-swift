import Link from 'next/link';
import Rating from './Rating';
import Review from './Review';

const HotelSummaryInfo = ({ fromListPage, info, checkin, checkout }) => {
	let paramsItem = '';
	if (checkin && checkout) {
		paramsItem = `?checkin=${checkin}&checkout=${checkout}`;
	}
	return (
		<>
			<div className={fromListPage ? 'flex-1' : 'flex-1 container'}>
				<h2
					className={
						fromListPage
							? 'font-bold text-lg'
							: 'font-bold text-2xl'
					}
				>
					{info?.name}
				</h2>
				<p>📍 {info?.city}</p>
				<div className="flex gap-2 items-center my-4">
					<Rating id={info?.id} />
					<Review id={info?.id} />
					{info?.isBooked && <span>Sold Out</span>}
				</div>
				<div>
					<span className="bg-yellow-300 p-1 rounded-md">
						{info?.propertyCategory} Star Property
					</span>
				</div>
			</div>

			<div className="flex flex-col gap-2 items-end justify-center">
				<h2 className="text-2xl font-bold text-right">
					${(info?.highRate + info?.lowRate) / 2}/night
				</h2>
				<p className=" text-right">Per Night for 1 Room</p>
				<h2>
					{checkin} | {checkout}
				</h2>
				{fromListPage ? (
					<Link
						href={`/hotels/${info?.id}${paramsItem}`}
						className="btn-primary "
					>
						Details
					</Link>
				) : (
					<Link
						href={
							info?.isBooked
								? '#'
								: `/hotels/${info?.id}/payment${paramsItem}`
						}
						className={
							info?.isBooked ? 'btn-disabled' : 'btn-primary'
						}
					>
						Book
					</Link>
				)}
			</div>
		</>
	);
};

export default HotelSummaryInfo;
