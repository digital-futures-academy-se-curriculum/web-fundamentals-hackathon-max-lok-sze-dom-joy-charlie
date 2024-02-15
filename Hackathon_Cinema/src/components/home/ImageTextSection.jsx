import { Container } from "react-bootstrap"
import PropTypes from 'prop-types';

import "./ImageTextSection.css"

const ImageTextSection = ({textRight, imageUrl, text}) => {


  return (
    
  <>
    {textRight ? 
      <Container className="image-text-container text-right">
        <div className="home-image">
          <img className="home-img" src={imageUrl} alt="cinema image" />
        </div>
        <div className="home-text text-light">{text}</div>
      </Container>
      : 

      <Container className="image-text-container text-left">
        <div className="home-text text-light">{text}</div>
        <div className="home-image">
          <img className="home-img" src={imageUrl} alt="cinema image" />
        </div>
      </Container>

    }
  </>
      

  )
}

ImageTextSection.propTypes = {
  textRight: PropTypes.bool,
  imageUrl: PropTypes.string,
  text: PropTypes.string
}

export default ImageTextSection