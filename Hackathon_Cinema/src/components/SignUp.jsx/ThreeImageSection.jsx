import signUpImage1 from "../../../images/sign-up-image1.jpg";
import signUpImage2 from "../../../images/sign-up-image2.jpg";
import signUpImage3 from "../../../images/sign-up-image3.jpg";
import "./ThreeImageSection.css";
const ThreeImageSection = () => {
    return (
        <div className="container col-sm-6 ">
            <div className="row">
                <div className="col m-3 d-flex justify-content-sm-end">
                    <img className="img-sign-up" src={signUpImage1} alt="Image 1" />
                </div>
            </div>
            <div className="row">
                <div className="col m-3 d-flex justify-content-sm-end ">
                    <img className="img-sign-up" src={signUpImage2} alt="Image 2" />
                </div>
            </div>
            <div className="row">
                <div className="col m-3 d-flex justify-content-sm-end">
                    <img className="img-sign-up" src={signUpImage3} alt="Image 3" />
                </div>
            </div>
        </div>
    );
};

export default ThreeImageSection;
