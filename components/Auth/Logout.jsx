'use client';

import { signOut } from 'next-auth/react';

const Logout = () => {
	const handleLogout = () => {
		signOut({
			callbackUrl: `${window.location.origin}/login`,
		});
	};
	return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
