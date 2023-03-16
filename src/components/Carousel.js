import Image from "next/image";
import Carousel1 from "../assets/carousel1.jpg"; 
import Carousel2 from "../assets/carousel2.jpg"; 
import Carousel3 from "../assets/carousel3.jpg"; 

const Carousel = () => {
   return (
      <div>
         <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full">
               <Image
                  src={Carousel1}
                  className="w-full max-h-[500px]"
                  width="100"
                  height={400}
                  alt="1"
               />
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                     ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                     ❯
                  </a>
               </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <Image
                  src={Carousel2}
                  className="w-full max-h-[500px]"
                  width="100"
                  height={400}
                  alt="1"
               />
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                     ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                     ❯
                  </a>
               </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <Image
                  src={Carousel3}
                  className="w-full max-h-[500px]"
                  width="100"
                  height={400}
                  alt="1"
               />
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                     ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                     ❯
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Carousel;
