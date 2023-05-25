import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'
import { FaQuoteLeft } from 'react-icons/fa';


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'

 

 
const Testimonials = () => {

const [reviews, setReviews] = useState([]);

useEffect(()=> {
    fetch('http://localhost:5000/reviews')
    .then(res=> res.json())
    .then(data => setReviews(data))
}, [])


    return (
        <section>
            <SectionTitle subHeading={'What Our Clients Say'} heading={'testimonials'} ></SectionTitle>
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
         {
            reviews.map(review =>  <SwiperSlide key={review._id}> 
              <div className="m-24 flex flex-col items-center">
                
                    <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                    />

                    <span className="text-7xl mt-5"> <FaQuoteLeft/> </span>
                
                <p className="my-5">{review.details}</p>
                <h3 className="text-xl uppercase text-yellow-500 ">{review.name}</h3>
              </div>
            </SwiperSlide> )
         }
      </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;