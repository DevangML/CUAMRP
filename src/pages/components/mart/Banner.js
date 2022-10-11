import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import mbg1 from '../../../../images/mbg1.jpg';
import mbg2 from '../../../../images/mbg2.jpg';
import mbg3 from '../../../../images/mbg3.jpg';

function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}>
                <div>
                    <img
                        loading="lazy"
                        src={mbg1}
                        width={300}
                        height={800}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        loading="lazy"
                        src={mbg2}
                        width={300}
                        height={800}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        loading="lazy"
                        src={mbg3}
                        alt=""
                        width={300}
                        height={800}
                    />
                </div>
            </Carousel>
        </div>
    );
}

export default Banner;
