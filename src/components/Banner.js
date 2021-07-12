import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative ">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}>

            <div><img loading="lazy" src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/BTS/Homepage/2021_BTS_DesktopHero_3000x1200_Phase1_1x._CB668342323_.jpg" alt="" /></div>
            <div><img loading="lazy" src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/OGMwNDNkOTkt/OGMwNDNkOTkt-MjAwOTJmNWEt-w1500._CB665975592_.jpg" alt="" /></div>
            <div><img loading="lazy" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Njk4MjQxYjct/Njk4MjQxYjct-NTU5NDEzOGMt-w1500._CB666253599_.jpg" alt="" /></div>


            </Carousel>
        </div>
    )
}

export default Banner
