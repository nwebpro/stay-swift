import { auth } from '@/auth';
import Image from 'next/image';

const ProfileInfo = async () => {
	const session = await auth();
	return (
		<div className="flex flex-col items-center py-8 text-center">
			{session?.user?.image ? (
				<Image
					src={session?.user?.image}
					width={100}
					height={100}
					className="rounded-full"
					alt={session?.user?.name}
				/>
			) : (
				<Image
					src={
						'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png'
					}
					width={100}
					height={100}
					className="rounded-full"
					alt={session?.user?.name}
				/>
			)}

			<div>
				<h3 className="text-2xl font-semibold lg:text-[28px]">
					{session?.user?.name}
				</h3>
				<p className="leading-[231%] lg:text-lg">
					{session?.user?.email}
				</p>
			</div>

			<div className="w-3/4 border-b border-[#a4a4a4] py-6 lg:py-4"></div>
		</div>
	);
};

export default ProfileInfo;
