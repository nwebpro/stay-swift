import { Inter } from 'next/font/google';
import '../globals.css';
import Header from '@/components/Header';
import { dbConnect } from '@/service/mongo';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'StaySwift',
	description: 'One Place Stop for Hospitably',
};

export default async function RootLayout({ children }) {
	await dbConnect();
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header sideMenu={true} />
				<main>{children}</main>
			</body>
		</html>
	);
}
