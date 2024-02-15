
import starwars from "../../assets/movie_images/starwars.jpg"
import shawshank from "../../assets/movie_images/shawshank_redemption.jpg"
import toAllBoys from "../../assets/movie_images/to_all_the_boys.jpg"
// import * as images from '../../assets/movie_images';
// import duckduck from "../../assets/duckduck.jpg";
export default function ImageThreeText({moviesData}){

    const boxWidthAndHeigh = { height:"150px"}

    function generateShowingsHTML(showings) {
        let showingsJSX = [];

        for (let type in showings) {
            let timesJSX = showings[type].map(time => <li key={time}>{time}</li>);
            showingsJSX.push(
            <div key={type} className="d-flex flex-column m-2">
                <h6>{type}</h6>
                <ul>{timesJSX}</ul>
            </div>
            );
        }

        return <div className="d-flex">{showingsJSX}</div>;
        }

        function findMovieImage(movie){
            let images = [shawshank, starwars, toAllBoys];
            // images.forEach(image => movie.image_url === "${option}")
            console.log(images)
            console.log(movie.image_url)
            return images.find(option => movie.image_url === option)
            }


    return(
        <>
        <div className="container">
            <>
                {moviesData.map(movie => {
                    return(
                        <div key={movie.id} className="row d-flex justify-content-around p-3 m-3 shadow bg-dark bg-gradient">
                            <div className="col-xl-2 d-flex align-items-center p-2 m-1"> 
                                <img src={findMovieImage(movie)} alt="duck" style={boxWidthAndHeigh, {width: "150px"}}/>
                            </div> 
                            <div className="col-xl-1 d-flex align-items-center p-2 m-1 ">
                                <p className="text-light small font-weight-bold" style={boxWidthAndHeigh}> {movie.title}</p>
                            </div> 
                            <div className="col-xl-2 d-flex align-items-center p-2 m-1 border">
                                <p className="text-light small" style={boxWidthAndHeigh}> {movie.description}</p>
                            </div> 
                            <div className="col-xl-5 d-flex align-items-center p-2 m-1 border">
                                <p className="text-light small" style={boxWidthAndHeigh}> {generateShowingsHTML(movie.showings)} </p>
                            </div> 
                        </div>
                        
                        
                    )
                })}
            </>    
            
        </div>



        </>
    )
}