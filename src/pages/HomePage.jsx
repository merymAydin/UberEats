import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import heroImage from "../assets/shop-hero-1-product-slide-1.jpg";


const HomePage = () => {
    return (
        <>
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                navigation>
                <SwiperSlide>
                    <div className="relative w-full h-[520px] md:h-auto">

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center text-center gap-4 md:gap-10 z-10 md:top-1/2 md:left-[12%] md:translate-x-0 md:w-auto md:items-start md:text-left md:gap-10">
                            <p className="text-[10px] md:text-4xl text-white">SUMMER 2020</p>
                            <h1 className="text-3xl md:text-7xl max-w-[180px] md:max-w-none font-bold text-white">NEW COLLECTION</h1>
                            <p className="text-sm md:text-2xl max-w-[230px] md:max-w-lg text-white">
                                We know how large objects will act, but things on small scale.
                            </p>
                            <button className="bg-emerald-500 text-white text-sm md:text-xl font-bold px-8 py-3 md:px-8 md:py-4 w-fit">SHOP NOW</button>



                        </div>
                        <img
                            className="absolute inset-0 w-full h-full object-cover object-[47%_center] md:relative md:h-auto md:object-contain"
                            src={heroImage}
                            alt="New collection"
                        />
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default HomePage
