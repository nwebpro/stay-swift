import { bookingModel } from '@/models/booking';
import { dbConnect } from '@/service/mongo';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
	const { hotelId, userId, checkin, checkout } = await request.json();

	console.log(hotelId, userId, checkin, checkout);

	await dbConnect();

	const payload = {
		hotelId: new Types.ObjectId(hotelId),
		userId: new Types.ObjectId(userId),
		checkin,
		checkout,
	};

	try {
		await bookingModel.create(payload);
		return new NextResponse('A New Booking has been made', {
			status: 201,
		});
	} catch (err) {
		return new NextResponse(err.message, {
			status: 500,
		});
	}
};
