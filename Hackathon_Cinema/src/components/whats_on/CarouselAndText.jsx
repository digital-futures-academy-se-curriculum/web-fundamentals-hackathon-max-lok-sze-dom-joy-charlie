import ControlledCarousel from "./UncontrolledCarousel.jsx"
import PropTypes from 'prop-types';
export default function CarouselAndText({moviesData =[]}){

    

    return (
        <div className="container">
            <div className="row d-flex justify-content-around p-3 m-3 shadow bg-dark">
                <div className="col-md-5 d-flex align-items-center">
                    <p className="text-light"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ut doloremque veritatis error minima distinctio quod corrupti deserunt, inventore asperiores nisi? Libero dolor sequi ipsam illo incidunt.  ?

                    </p>
                    
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <ControlledCarousel moviesData={moviesData}/>
                </div>
            </div>
            

        </div>
    )
}

CarouselAndText.propTypes = {
  moviesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      showings: PropTypes.shape({
        standard: PropTypes.arrayOf(PropTypes.string).isRequired,
        '3d': PropTypes.arrayOf(PropTypes.string).isRequired,
        '4DX': PropTypes.arrayOf(PropTypes.string).isRequired,
        IMAX: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
      image_url: PropTypes.string.isRequired,
    })
  ),
};