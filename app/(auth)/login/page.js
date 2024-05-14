import LoginForm from '@/components/Auth/LoginForm';
import SocialLogins from '@/components/Auth/SocialLogins';

const Login = () => {
	return (
		<section className="h-screen grid place-items-center">
			<div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
				<h4 className="font-bold text-2xl">Sign in</h4>
				<LoginForm />
				<SocialLogins mode={'login'} />
			</div>
		</section>
	);
};

export default Login;
