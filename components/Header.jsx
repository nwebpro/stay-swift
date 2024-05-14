import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import Logout from './Auth/Logout';

const Header = async ({ sideMenu }) => {
	const session = await auth();
	return (
		<nav>
			<Link href="/">
				<Image
					src="/stayswift.svg"
					alt="Stay Swift Logo"
					width={200}
					height={200}
				/>
			</Link>
			{sideMenu && (
				<>
					<ul>
						<li>
							<Link href="#">Recommended Places</Link>
						</li>

						<li>
							<Link href="#">About Us</Link>
						</li>

						<li>
							<Link href="#">Contact us</Link>
						</li>

						<li>
							<Link href="/bookings">Bookings</Link>
						</li>

						<li>
							{session?.user ? (
								<div className="space-x-1">
									<span>{session?.user?.name}</span>
									<span>|</span>
									<Logout />
								</div>
							) : (
								<Link href="/login" class="login">
									Login
								</Link>
							)}
						</li>
					</ul>
				</>
			)}
		</nav>
	);
};

export default Header;
