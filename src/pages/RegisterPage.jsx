import Banner from '../components/Register/Banner';
import SignupForm from '../components/Register/SignupForm';
const RegisterPage = () => {
  return (
    <div style={{ display: "flex" , backgroundColor:"black" }}>
    <Banner/>
    <SignupForm/>
    </div>
  );
};

export default RegisterPage;
