
import { useState } from "react";
import Footer from "../components/Footer.jsx"
import CarouselAndText from "../components/whats_on/CarouselAndText.jsx"
import movieData from "../services/database/movieData.json";
import ImageAndText from "../components/whats_on/ImageAndText.jsx";
import ImageThreeText from "../components/whats_on/ImageThreeText.jsx";

export default function WhatsOn(){

    const moviesData = movieData.data
   
    return (

        <>
            <section>
                <CarouselAndText moviesData={moviesData}/>
                <ImageAndText imageLeft={true}/>
                <ImageThreeText moviesData={moviesData} />
            </section>
            
    
            
            <Footer />
        </>
    )

}
