import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css"
import "./ResultListCarousel.css"

const resultListCarousel = ({pictureList}) => {
    return (
            <Carousel autoPlay={false} showStatus={false} showThumbs={false} dynamicHeight={true} infiniteLoop={true}>
                {pictureList.map((picture,i)=>(
                    <div key={i}>
                        <img className="carousel__img" src={picture}/>
                    </div>
                ))}
            </Carousel>
    )
}

export default resultListCarousel