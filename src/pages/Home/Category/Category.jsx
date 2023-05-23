import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import swiperImg1 from '../../../assets/home/slide1.jpg';
import swiperImg2 from '../../../assets/home/slide2.jpg';
import swiperImg3 from '../../../assets/home/slide3.jpg';
import swiperImg4 from '../../../assets/home/slide4.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
 
const Category = () => {
    return (
        <>

        <div>
            <SectionTitle 
            subHeading={"From 11:00am to 10:00pm"}
            heading={"Order Online"}
            >
            </SectionTitle>
        </div>

           <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-5"
      >
        <SwiperSlide> 
            <img src={swiperImg1} alt="" />
            <h3 className="text-3xl text-center text-white -mt-28">SALADS</h3>
        </SwiperSlide>
        <SwiperSlide> 
        <img src={swiperImg2} alt="" />
        <h3 className="text-3xl text-center text-white -mt-28">SOUP</h3>
        </SwiperSlide>
        <SwiperSlide> 
        <img src={swiperImg3} alt="" />
        <h3 className="text-3xl text-center text-white -mt-28">PIZZA</h3>
        </SwiperSlide>
        <SwiperSlide> 
        <img src={swiperImg4} alt="" />
        <h3 className="text-3xl text-center text-white -mt-28">DESSERT</h3>
        </SwiperSlide>
        
        
      </Swiper> 
        </>
    );
};

export default Category;