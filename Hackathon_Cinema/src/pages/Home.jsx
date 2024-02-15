import ImageTextSection from "../components/home/ImageTextSection"
import cinemaData from "../services/database/cinemaData.json"

import "./Home.css"

const Home = () => {

  const data = cinemaData

  return (
    <>
      {data.map((d, index) => {
        const {imageUrl, text} = d
        const textRight = index % 2 === 0;
        return (
          <ImageTextSection key={index} imageUrl={imageUrl} text={text} textRight={textRight}/>
        )
      })}
    </>
  
  )
}

export default Home
