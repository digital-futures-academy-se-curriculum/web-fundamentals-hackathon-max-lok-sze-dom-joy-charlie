
import duckduck from "../../assets/duckduck.jpg";
export default function ImageThreeText(props){

    const boxWidthAndHeigh = {width: "200px", height:"150px"}
    return(
        <>
        <div className="container">
            <div className="row d-flex justify-content-around p-3 m-3 shadow bg-dark">
                <div className="col-md-2 d-flex align-items-center p-2 m-1"> 
                    <img src={duckduck} alt="duck" style={boxWidthAndHeigh}/>
                </div> 
                <div className="col-md-2 d-flex align-items-center p-2 m-1 border">
                    <p className="text-light" style={boxWidthAndHeigh}> Movie Title</p>
                </div> 
                <div className="col-md-2 d-flex align-items-center p-2 m-1 border">
                    <p className="text-light" style={boxWidthAndHeigh}> Movie Description</p>
                </div> 
                <div className="col-md-2 d-flex align-items-center p-2 m-1 border">
                    <p className="text-light" style={boxWidthAndHeigh}> Showing times</p>
                </div> 
            </div>
        </div>



        </>
    )
}