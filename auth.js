import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import mongoClientPromise from './database/mongoClientPromise';
import CredentialsProvider from 'next-auth/providers/credentials';
import { userModel } from './models/user';

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	adapter: MongoDBAdapter(mongoClientPromise, {
		databaseName: process.env.ENVIRONMENT,
	}),
	session: {
		strategy: 'jwt',
	},
	providers: [
		CredentialsProvider({
			credentials: {
				email: {},
				password: {},
			},
			async authorize(credentials) {
				if (credentials === null) return null;
				try {
					const user = await userModel.findOne({
						email: credentials.email,
					});
					if (user) {
						const isMatch = user?.password === credentials.password;
						if (isMatch) {
							return user;
						} else {
							throw new Error('Invalid password');
						}
					} else {
						throw new Error('User not found');
					}
				} catch (error) {
					throw new Error(error);
				}
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
});
