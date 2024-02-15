import SignUpForm from "../components/SignUp.jsx/SignUpForm"
import ThreeImageSection from "../components/SignUp.jsx/ThreeImageSection"

const SignUp = () => {
  return (
    <div className="d-sm-flex pt-sm-3">
        <ThreeImageSection />
        <SignUpForm />
    </div>
  )
}

export default SignUp