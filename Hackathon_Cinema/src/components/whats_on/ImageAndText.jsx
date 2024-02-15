
import duckduck from "../../assets/duckduck.jpg"

export default function ImageAndText({imageLeft = false}){

    if (imageLeft){
    return (
        <div className="container">
            <div className="row d-flex justify-content-around p-3 m-3 shadow bg-dark">
                <div className="col-md-5 d-flex align-items-center">
                    <img src={duckduck} alt="" style={{ width: '350px' }} />
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <p className="text-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quam aliquid nesciunt nemo vitae omnis vel. Earum ipsa ullam enim.
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