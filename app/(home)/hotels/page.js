import HotelList from '@/components/Hotel/HotelList';
import Filter from '@/components/Search/Filter';
import Search from '@/components/Search/Search';

const Hotel = () => {
	return (
		<>
			<section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
				<div className="container items-center py-12 ">
					<Search fromList={true} />
				</div>
			</section>
			<section className="py-12">
				<div className="container grid grid-cols-12">
					<Filter />
					<HotelList />
				</div>
			</section>
		</>
	);
};

export default Hotel;
