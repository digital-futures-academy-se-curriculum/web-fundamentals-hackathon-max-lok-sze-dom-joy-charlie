
import duckduck from "../../assets/duckduck.jpg"

export default function ImageAndText({imageLeft = false}){

    if (imageLeft){
    return (
        <div className="container">
            <div className="row d-flex justify-content-around p-3 m-3 shadow bg-dark bg-gradient">
                <div className="col-md-5 d-flex align-items-center">
                    <img src={"https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkwNTc2MDMyMjM5NTI3MDM3/red2.webp"} alt="Jimanji photo" style={{ width: '350px' }} />
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <p className="text-light">
                        🌈 Wonderland: Monday to Sunday
                        <br/>
                        <br/>
                        🕓 Matinee Magic: 1:30 PM, 3:45 PM
                        <br/>
                        🕕 Evening Extravaganza: 6:15 PM, 8:30 PM
                        <br/>
                        🌙 Late-Night Flicks: 10:45 PM

                        
                    </p>
                </div>
                
            </div>
        </div>
    )
    }


    return(
        
        <div className="container">
            <div className="row d-flex justify-content-around p-3 m-3 shadow">
                <div className="col-md-5 d-flex align-items-center text-light">
                    <p className="text-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quam aliquid nesciunt nemo vitae omnis vel. Earum ipsa ullam enim.
                    </p>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <img src={duckduck} alt="" style={{ width: '400px' }} />
                </div>
            </div>
        </div>
        
    )
}