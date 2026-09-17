import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import heroImage from "../assets/shop-hero-1-product-slide-1.jpg"

import { Link } from "react-router-dom";
import Men from "../assets/men.jpg"
import women from "../assets/women.jpg"
import kids from "../assets/kids.jpg"
import accessories from "../assets/accessories.jpg"
import b1 from "../assets/b1.jpg"
import b2 from "../assets/b2.jpg"
import b3 from "../assets/b3.jpg"
import b4 from "../assets/b4.jpg"
import b5 from "../assets/b5.jpg"
import b6 from "../assets/b6.jpg"
import b7 from "../assets/b7.jpg"
import b8 from "../assets/fixed-height.png"
import grL from "../assets/grL.png"


const HomePage = () => {

    const bestsellerImages = [b8, b2, b3, b4, b5, b6, b7, b1];

    return (
        <>
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                navigation
            >
                <SwiperSlide>
                    <div className="relative w-full h-[520px] md:h-auto">

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center text-center gap-4 md:gap-10 z-10 md:top-1/2 md:left-[12%] md:translate-x-0 md:w-auto md:items-start md:text-left md:gap-10">
                            <p className="text-[10px] md:text-4xl text-white">
                                SUMMER 2020
                            </p>

                            <h1 className="text-3xl md:text-7xl max-w-[180px] md:max-w-none font-bold text-white">
                                NEW COLLECTION
                            </h1>

                            <p className="text-sm md:text-2xl max-w-[230px] md:max-w-lg text-white">
                                We know how large objects will act, but things on small scale.
                            </p>

                            <Link
                                to="/shop"
                                className="bg-emerald-500 text-white text-sm md:text-xl font-bold px-8 py-3 md:px-8 md:py-4 w-fit"
                            >
                                SHOP NOW
                            </Link>
                        </div>

                        <img
                            className="absolute inset-0 w-full h-full object-cover object-[47%_center] md:relative md:h-auto md:object-contain"
                            src={heroImage}
                            alt="New collection"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>


            <section className="hidden md:flex bg-[#FAFAFA] h-[800px]">
                <div className="flex flex-col gap-15">

                    <div className="flex flex-col items-center text-center gap-3 pt-20">
                        <h2 className="text-3xl font-bold">
                            EDITOR'S PICK
                        </h2>

                        <p className="text-m text-[#737373] font-bold">
                            Problems trying to resolve the conflict between
                        </p>
                    </div>

                    <div className="flex gap-8 px-50">

                        <div className="relative w-1/2 h-[521px]">
                            <img
                                src={Men}
                                className="w-full h-full object-cover object-[center_45%]"
                                alt="Men"
                            />

                            <div className="absolute bottom-6 left-6 bg-white px-12 py-4 font-bold">
                                MEN
                            </div>
                        </div>

                        <div className="flex flex-1 gap-8">

                            <div className="relative w-1/2 h-[521px]">
                                <img
                                    src={women}
                                    className="w-full h-full object-cover"
                                    alt="Women"
                                />

                                <div className="absolute bottom-6 left-6 bg-white px-12 py-4 font-bold">
                                    WOMEN
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 w-1/2">

                                <div className="relative">
                                    <img
                                        src={accessories}
                                        className="w-full h-[250px] object-cover"
                                        alt="Accessories"
                                    />

                                    <div className="absolute bottom-6 left-6 bg-white px-12 py-4 font-bold">
                                        ACCESSORIES
                                    </div>
                                </div>

                                <div className="relative">
                                    <img
                                        src={kids}
                                        className="w-full h-[250px] object-cover"
                                        alt="Kids"
                                    />

                                    <div className="absolute bottom-6 left-6 bg-white px-12 py-4 font-bold">
                                        KIDS
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="flex md:hidden bg-[#FAFAFA]">

                <div className="flex flex-col gap-4">

                    <div className="flex flex-col items-center text-center gap-3 pt-20 px-10 py-3">
                        <h2 className="text-3xl font-bold">
                            EDITOR'S PICK
                        </h2>

                        <p className="text-m text-[#737373] w-[260px] text-center">
                            Problems trying to resolve the conflict between
                        </p>
                    </div>

                    <div className="flex flex-col gap-8 px-6">

                        <div className="relative w-3/4 mx-auto h-[360px]">
                            <img
                                src={Men}
                                className="w-full h-full object-cover object-[center_45%]"
                                alt="Men"
                            />

                            <div className="absolute bottom-6 left-6 bg-white px-12 py-4 font-bold">
                                MEN
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">

                            <div className="relative w-3/4 mx-auto h-[360px]">
                                <img
                                    src={women}
                                    className="w-full h-full object-cover"
                                    alt="Women"
                                />

                                <div className="absolute bottom-6 left-6 bg-white px-12 py-4 font-bold">
                                    WOMEN
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 w-3/4 mx-auto overflow-hidden">

                                <div className="relative overflow-hidden">
                                    <img
                                        src={accessories}
                                        className="w-full h-[250px] object-cover scale-150"
                                        alt="Accessories"
                                    />

                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-12 py-4 font-bold">
                                        ACCESSORIES
                                    </div>
                                </div>

                                <div className="relative overflow-hidden">
                                    <img
                                        src={kids}
                                        className="w-full h-[250px] object-cover scale-150"
                                        alt="Kids"
                                    />

                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-12 py-4 font-bold">
                                        KIDS
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="hidden md:flex flex-col items-center pt-20 pb-20 gap-15">

                <div className="flex flex-col items-center text-center gap-2">

                    <p className="text-[#737373]">
                        Featured Products
                    </p>

                    <h2 className="text-2xl text-[#252B42] font-bold">
                        BESTSELLER PRODUCTS
                    </h2>

                    <p className="text-[#737373]">
                        Problems trying to resolve the conflict between
                    </p>

                </div>

                <div className="flex flex-wrap justify-center gap-[30px] max-w-[1049px]">

                    {bestsellerImages.map((image, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center w-[239px] h-[615px]"
                        >
                            <img
                                src={image}
                                alt="Product"
                                className="w-[239px] h-[427px] object-cover"
                            />

                            <h3 className="font-bold mt-4">
                                Graphic Design
                            </h3>

                            <p className="text-[#737373] text-sm">
                                English Department
                            </p>

                            <div className="flex gap-2 mt-2">
                                <p className="text-[#BDBDBD]">
                                    $16.48
                                </p>

                                <p className="text-[#23856D]">
                                    $6.48
                                </p>
                            </div>

                            <div className="flex gap-[6px] mt-2">
                                <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                                <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
                                <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
                                <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
                            </div>
                        </div>
                    ))}

                </div>
            </section>


            <section className="flex md:hidden flex-col items-center gap-10">

                <div className="flex flex-col items-center text-center gap-2 pt-30">

                    <p className="text-[#737373]">
                        Featured Products
                    </p>

                    <h2 className="text-2xl text-[#252B42] w-[280px] font-bold text-center">
                        BESTSELLER PRODUCTS
                    </h2>

                    <p className="text-[#737373] w-[280px] text-center">
                        Problems trying to resolve the conflict between
                    </p>

                </div>

                <div className="flex flex-wrap justify-center max-w-[1049px] gap-[30px]">

                    {bestsellerImages.map((image, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center w-[239px] h-[615px]"
                        >
                            <img
                                src={image}
                                alt="Product"
                                className="w-[239px] h-[427px] object-cover"
                            />

                            <h3 className="font-bold mt-4">
                                Graphic Design
                            </h3>

                            <p className="text-[#737373] text-sm">
                                English Department
                            </p>

                            <div className="flex gap-2 mt-2">
                                <p className="text-[#BDBDBD]">
                                    $16.48
                                </p>

                                <p className="text-[#23856D]">
                                    $6.48
                                </p>
                            </div>

                            <div className="flex gap-[6px] mt-2">
                                <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                                <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
                                <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
                                <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
                            </div>
                        </div>
                    ))}

                </div>
            </section>


            <div className="hidden md:block">

                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    navigation
                >

                    <SwiperSlide>
                        <div className="relative w-full h-[709px] mx-auto bg-[#23856D]">

                            <div className="absolute top-1/2 left-[12%] -translate-y-1/2 w-auto flex flex-col items-start text-left gap-10 z-10">

                                <h4 className="text-xl text-white">
                                    SUMMER 2020
                                </h4>

                                <h1 className="text-7xl max-w-[600px] font-bold text-white">
                                    Vita Classic Product
                                </h1>

                                <p className="text-2xl max-w-lg text-white">
                                    We know how large objects will act, We know how are objects will act, We know
                                </p>

                                <div className="flex items-center gap-8">

                                    <p className="text-2xl font-bold text-white">
                                        $16.48
                                    </p>

                                    <Link
                                        to="/shop"
                                        className="bg-[#2DC071] text-white text-[14px] leading-[22px] font-bold px-8 py-4 w-fit rounded-lg"
                                    >
                                        ADD TO CART
                                    </Link>

                                </div>
                            </div>

                            <img
                                className="absolute right-[200px] bottom-0 h-full object-contain object-right translate-y-[20%]"
                                src={grL}
                                alt="Vita Classic Product"
                            />

                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="relative w-full h-[709px] mx-auto bg-[#23856D]">

                            <div className="absolute top-1/2 left-[12%] -translate-y-1/2 w-auto flex flex-col items-start text-left gap-10 z-10">

                                <h4 className="text-xl text-white">
                                    SUMMER 2020
                                </h4>

                                <h1 className="text-7xl max-w-[600px] font-bold text-white">
                                    Vita Classic Product
                                </h1>

                                <p className="text-2xl max-w-lg text-white">
                                    We know how large objects will act, We know how are objects will act, We know
                                </p>

                                <div className="flex items-center gap-8">

                                    <p className="text-2xl font-bold text-white">
                                        $16.48
                                    </p>

                                    <Link
                                        to="/shop"
                                        className="bg-[#2DC071] text-white text-[14px] leading-[22px] font-bold px-8 py-4 w-fit rounded-lg"
                                    >
                                        ADD TO CART
                                    </Link>

                                </div>
                            </div>

                            <img
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[255px] w-auto"
                                src={grL}
                                alt="Vita Classic Product"
                            />

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>


            <div className="md:hidden">

    <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation
    >

        <SwiperSlide>
            <div className="relative w-full h-[553px] bg-[#23856D] overflow-hidden">

                <div className="absolute top-[95px] left-1/2 -translate-x-1/2 w-full flex flex-col items-center text-center gap-4 z-20">

                    <h4 className="text-[11px] text-white">
                        SUMMER 2020
                    </h4>

                    <h1 className="text-[20px] leading-[25px] max-w-[200px] font-bold text-white">
                        Vita Classic Product
                    </h1>

                    <p className="text-[11px] leading-[16px] max-w-[190px] text-white">
                        We know how large objects
                        will act, but things on a
                        small scale.
                    </p>

                    <div className="flex items-center gap-4">

                        <p className="text-[14px] font-bold text-white">
                            $16.48
                        </p>

                        <Link
                            to="/shop"
                            className="bg-[#2DC071] text-white text-[10px] leading-[22px] font-bold px-5 py-2 w-fit rounded-lg"
                        >
                            ADD TO CART
                        </Link>

                    </div>

                </div>

                <img
                    className="absolute z-0 bottom-0 left-1/2 -translate-x-1/2 w-[430px] max-w-none"
                    src={grL}
                    alt="Vita Classic Product"
                />

            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="relative w-full h-[553px] bg-[#23856D] overflow-hidden">

                <div className="absolute top-[95px] left-1/2 -translate-x-1/2 w-full flex flex-col items-center text-center gap-4 z-20">

                    <h4 className="text-[11px] text-white">
                        SUMMER 2020
                    </h4>

                    <h1 className="text-[20px] leading-[25px] max-w-[200px] font-bold text-white">
                        Vita Classic Product
                    </h1>

                    <p className="text-[11px] leading-[16px] max-w-[190px] text-white">
                        We know how large objects
                        will act, but things on a
                        small scale.
                    </p>

                    <div className="flex items-center gap-4">

                        <p className="text-[14px] font-bold text-white">
                            $16.48
                        </p>

                        <Link
                            to="/shop"
                            className="bg-[#2DC071] text-white text-[10px] leading-[22px] font-bold px-5 py-2 w-fit rounded-lg"
                        >
                            ADD TO CART
                        </Link>

                    </div>

                </div>

                <img
                    className="absolute z-0 bottom-0 left-1/2 -translate-x-1/2 w-[430px] max-w-none"
                    src={grL}
                    alt="Vita Classic Product"
                />

            </div>
        </SwiperSlide>

    </Swiper>

</div>

        </>
    )
}

export default HomePage