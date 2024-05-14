import { hotelModel } from '@/models/hotel';
import { ratingModel } from '@/models/rating';
import { reviewModel } from '@/models/review';
import {
	replaceMongoIdInArray,
	replaceMongoIdInObject,
} from '@/utils/dataUtils';

export const getAllHotels = async () => {
	const hotels = await hotelModel
		.find()
		.select([
			'thumbNailUrl',
			'name',
			'highRate',
			'lowRate',
			'city',
			'propertyCategory',
		])
		.lean();

	return replaceMongoIdInArray(hotels);
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

export const getHotelById = async (hotelId) => {
	const hotelDetails = await hotelModel.findById(hotelId).lean();
	return replaceMongoIdInObject(hotelDetails);
};
