import facial from '../../../public/images/Facial.jpg';
import hairstyle from '../../../public/images/Haristyles.jpg';
import manicure from '../../../public/images/Manicure.jpeg';

export default function ImageSlider() {
    const slides = [
        {
            img: facial
        },
        {
            img: hairstyle
        },
        {
            img: manicure
        }
    ]
    return (
        <>
            <section className=' w-full h-screen bg-[#5CE1E6] relative group'>
                <div style={{ backgroundImage: `url(${slides[0].img})` }} className=' w-full h-full rounded-2xl bg-center bg-cover duration-500'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </section>
        </>
    )
}