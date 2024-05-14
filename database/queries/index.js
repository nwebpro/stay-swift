import { hotelModel } from '@/models/hotel';
import { replaceMongoIdInArray } from '@/utils/dataUtils';

export const getAllHotels = async () => {
	const hotels = await hotelModel.find().lean();

	return replaceMongoIdInArray(hotels);
};
