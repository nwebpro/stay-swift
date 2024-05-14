import { userModel } from '@/models/user';
import { dbConnect } from '@/service/mongo';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export const POST = async (req) => {
	const { fname, lname, email, password } = await req.json();

	// Database Connection
	await dbConnect();

	// Hash Password
	const hashedPassword = await bcrypt.hash(password, 5);

	const newUser = {
		name: `${fname} ${lname}`,
		email,
		password: hashedPassword,
	};

	try {
		await userModel.create(newUser);
		return new NextResponse('User created successfully', {
			status: 201,
		});
	} catch (error) {
		return new NextResponse(error.message, {
			status: 500,
		});
	}
};
