import { bookingModel } from '@/models/booking';
import { hotelModel } from '@/models/hotel';
import { ratingModel } from '@/models/rating';
import { reviewModel } from '@/models/review';
import {
	isDateInBetween,
	replaceMongoIdInArray,
	replaceMongoIdInObject,
} from '@/utils/dataUtils';

export const getAllHotels = async (destination, checkin, checkout) => {
	const regex = new RegExp(destination, 'i');
	const hotelsByDestination = await hotelModel
		.find({
			city: { $regex: regex },
		})
		.select([
			'thumbNailUrl',
			'name',
			'highRate',
			'lowRate',
			'city',
			'propertyCategory',
		])
		.lean();

	let allHotels = hotelsByDestination;

	if (checkin && checkout) {
		allHotels = await Promise.all(
			allHotels.map(async (hotel) => {
				const found = await findBooking(hotel._id, checkin, checkout);
				if (found) {
					hotel['isBooked'] = true;
				} else {
					hotel['isBooked'] = false;
				}
				return hotel;
			})
		);
	}

	return replaceMongoIdInArray(allHotels);
};

const findBooking = async (hotelId, checkin, checkout) => {
	const matches = await bookingModel
		.find({ hotelId: hotelId.toString() })
		.lean();

	const found = matches.find((match) => {
		return (
			isDateInBetween(checkin, match.checkin, match.checkout) ||
			isDateInBetween(checkout, match.checkin, match.checkout)
		);
	});
	return found;
};

export const getRatingForHotel = async (hotelId) => {
	const ratings = await ratingModel
		.find({
			hotelId: hotelId,
		})
		.lean();
	return replaceMongoIdInArray(ratings);
};

export const getReviewForHotel = async (hotelId) => {
	const reviews = await reviewModel
		.find({
			hotelId: hotelId,
		})
		.lean();
	return replaceMongoIdInArray(reviews);
};

export const getHotelById = async (hotelId, checkin, checkout) => {
	const hotelDetails = await hotelModel.findById(hotelId).lean();

	if (checkin && checkout) {
		const found = await findBooking(hotelDetails._id, checkin, checkout);
		if (found) {
			hotelDetails['isBooked'] = true;
		} else {
			hotelDetails['isBooked'] = false;
		}
	}
	return replaceMongoIdInObject(hotelDetails);
};
