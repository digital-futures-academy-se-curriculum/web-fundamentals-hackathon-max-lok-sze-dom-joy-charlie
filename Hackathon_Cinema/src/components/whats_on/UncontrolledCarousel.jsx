import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';

import duckduck from "../../assets/duckduck.jpg";


function UncontrolledCarousel({moviesData}) {
  return (
      <>

      <img src={duckduck} alt="" style={{ width: '350px' }} />
      {/* {moviesData.map(movie => {
                        return(
                            <div key={movie.id}>
                                <h1>{movie.title}</h1>
                            </div>
                        )
                    })} */}
      
    {/* <Carousel>
      {moviesData.map(movie => {
        return(
          <div key={movie.id}>
            <Carousel.Item>
              <img 
              src={movie.image_url} alt="movie"
              className="d-block w-100" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </div>
        )
      })}  

    </Carousel>*/}

      {/* <div style={{height: "40px"}}>
      <Carousel>
        <Carousel.Item>
          <img src="https://images.pexels.com/photos/38771/pexels-photo-38771.jpeg?cs=srgb&dl=pexels-martin-dickson-38771.jpg&fm=jpg" alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.pexels.com/photos/38771/pexels-photo-38771.jpeg?cs=srgb&dl=pexels-martin-dickson-38771.jpg&fm=jpg" alt="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.pexels.com/photos/38771/pexels-photo-38771.jpeg?cs=srgb&dl=pexels-martin-dickson-38771.jpg&fm=jpg" alt="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div> */}



    </>
  );
}

export default UncontrolledCarousel;

UncontrolledCarousel.propTypes = {
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
  ).isRequired,
};

