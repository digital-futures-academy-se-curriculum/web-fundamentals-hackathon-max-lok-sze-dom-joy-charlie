import DFSignatureCopyright from "./footer/DFSignatureCopyright";
import SocialMediaAdvert from "./footer/SocialMediaAdvert";


export default function Footer() {
    return (
        <div className="container-fluid fixed-bottom" style={{backgroundColor: "var(--secondary-color)"}}>
            <div className="row d-flex justify-content-center ">
                <div className="col-md-6">
                    <SocialMediaAdvert />
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col">
                    <DFSignatureCopyright />
                </div>
            </div>
        </div>    
    )
}
