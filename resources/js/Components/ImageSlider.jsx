import { useState } from 'react';
import facial from '../../../public/images/Facial.jpg';
import hairstyle from '../../../public/images/Haristyles.jpg';
import manicure from '../../../public/images/Manicure.jpeg';

export default function ImageSlider() {
    const slides = [
        {
            img: facial,
            title: "Facial Treatments",
            desc: "Our facials are customized skin treatments designed to cleanse, exfoliate, and hydrate your skin. We offer a variety of options to address specific concerns, like acne, wrinkles, or uneven skin tone. Enjoy a relaxing experience with extractions"
        },
        {
            img: hairstyle,
            title: "Haircut and Styling",
            desc: "Our haircut and styling service is your one-stop shop for a complete hair transformation. It all starts with a consultation to discuss your desired look and hair type"
        },
        {
            img: manicure,
            title: "Manicure and Pedicure",
            desc: "Pamper your hands and feet with our luxurious manicure and pedicure service. We'll buff away dry skin, trim and shape your nails, and treat your cuticles"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newindex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newindex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newindex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newindex);
    }

    return (
        <>
            <section className=' pt-8 w-full h-[380px] md:min-h-[640px]'>
                <h2 className=' font-black md:text-3xl mb-8 pl-8'>Services</h2>
                <div style={{ backgroundImage: `url(${slides[currentIndex].img})` }} className=' relative group w-full h-72 md:h-[480px] bg-center bg-cover duration-500'>
                    <div className=' bg-black/40 absolute w-full h-72 md:h-full z-0'>
                        <div className=' text-white translate-y-[200px] md:translate-y-[300%] ml-3'>
                            <h4 className=' font-bold pb-3 md:text-3xl'>{slides[currentIndex].title}</h4>
                            <p className=' text-xs md:text-xl'>{slides[currentIndex].desc}</p>
                        </div>
                    </div>
                    <div onClick={prevSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </section>
        </>
    )
}