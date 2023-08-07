
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import bannerBg from "../../assets/circle-pattern-bg.jpg";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        
        <div  style={{ backgroundImage: `url(${bannerBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className="container mx-auto">
            <div className='text-center '><h2 className='text-3xl font-semibold pt-8'>Our reviewes</h2>
                <p className='text-xl'><i>A review is an evaluation of a publication, in literature, <br /> politics or culture. product, service, or company <br /> or a critical take on current affairs   </i></p>
            </div>
            <div className="py-8 container mx-auto">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

{
    reviews.map(review => <SwiperSlide
        key={review._id}
    >
        <div className="flex flex-col items-center mx-24 my-4">
            <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
            />
            <p className="py-6">{review.details}</p>
            <h3 className="text-2xl text-orange-400">{review.name}</h3>
        </div>
    </SwiperSlide>)
}
</Swiper>
            </div>
            
        </div>
        </div>
    );
};

export default Testimonials;