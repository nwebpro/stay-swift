import RegistrationForm from '@/components/Auth/RegistrationForm';
import SocialLogins from '@/components/Auth/SocialLogins';

const Register = () => {
	return (
		<section className="h-screen grid place-items-center">
			<div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
				<h4 className="font-bold text-2xl">Sign up</h4>
				<RegistrationForm />
				<SocialLogins mode={'register'} />
			</div>
		</section>
	);
};

export default Register;
