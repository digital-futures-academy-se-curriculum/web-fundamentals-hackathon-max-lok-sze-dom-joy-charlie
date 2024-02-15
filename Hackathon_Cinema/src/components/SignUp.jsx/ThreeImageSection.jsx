import signUpImage1 from "../../../images/sign-up-image1.jpg";
import signUpImage2 from "../../../images/sign-up-image2.jpg";
import signUpImage3 from "../../../images/sign-up-image3.jpg";
const ThreeImageSection = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col m-3">
                    <img className="img-fluid" src={signUpImage1} alt="Image 1" />
                </div>
            </div>
            <div className="row">
                <div className="col m-3">
                    <img className="img-fluid" src={signUpImage2} alt="Image 2" />
                </div>
            </div>
            <div className="row">
                <div className="col m-3">
                    <img className="img-fluid" src={signUpImage3} alt="Image 3" />
                </div>
            </div>
        </div>
    );
};

export default ThreeImageSection;
