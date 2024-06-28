import { Head } from '@inertiajs/react';
import Background from '../../../public/images/Background.png';
import NavBar from '@/Components/NavBar';
import ImageSlider from '@/Components/ImageSlider';
import BranchSection from '@/Components/BranchSection';
import Footer from '@/Components/Footer';

export default function Home({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Home" />
            <NavBar user={auth.user} />
            <section className=" w-full h-full">
                <img src={Background} alt="" className='' />
            </section>
            <section className='p-4 w-full bg-[#8c928e]'>
                <div className='mx-2 bg-white rounded-3xl'>
                    <h2 className='font-black text-xl text-center pt-6 mb-6 md:text-4xl'>About Us</h2>
                    <div className="flex items-center justify-center">
                        <pre className="w-32 text-center border-t-2 border-black"></pre>
                    </div>
                    <p className='px-4 tracking-wide mt-4 text-xs text-center pb-8 md:text-xl md:px-20'>At SEA Salon, we're <span className='  font-black text-black'>more than just a salon</span>, we're a haven for self-care and a celebration of your unique beauty. We believe that <span className='  font-black text-black'>looking and feeling your best go hand-in-hand</span>, which is why we offer a <span className='  font-black text-black'>comprehensive range of services</span> in a warm and inviting atmosphere.</p>
                </div>
            </section>
            <ImageSlider />
            <BranchSection />
            <section className=' w-full h-full'>
                <h2 className=' text-xl md:text-5xl font-bold text-center pt-8'>What They Said?</h2>
                <div className=" mt-4 flex items-center justify-center">
                    <pre className="w-32 text-center border-t-4 border-[#5CE1E6]"></pre>
                </div>
                <div className="m-24 grid grid-cols-4 gap-2">
                    <div className=" col-span-4 md:col-span-2 min-h-32 bg-white hover:bg-[#8c928e] rounded-md border-2 border-black hover:border-[#22ABFA]">
                        <div className="mt-4 mx-4 grid grid-cols-4 gap-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-20">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <div className=" text-sm md:text-2xl font-extrabold text-black col-start-2 col-span-3 h-8 ">Emily Garcia</div>
                            <div className=" -mt-12 font-bold text-black text-xs col-start-2 col-span-3 h-12 w-full ">"I've never been so happy with a haircut! SEA Salon is a true artist. <span className=' hidden md:visible'>They listened to what I wanted and completely transformed my hair. I feel like a million bucks!"</span></div>
                        </div>
                    </div>
                    <div className="p-3 col-span-4 md:col-span-2 row-span-2 bg-white hover:bg-[#8c928e] rounded-md border-2 border-black hover:border-[#22ABFA]">
                        <div className="mt-4 mx-4 grid grid-cols-4 gap-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" size-16 md:size-20">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <div className=" text-sm md:text-2xl font-extrabold text-black col-start-2 col-span-3 h-8 ">Michael Brown</div>
                            <div className=" -mt-12 font-bold text-black text-xs col-start-2 col-span-3 h-12 w-full">"The atmosphere at SEA Salon is pure bliss. From the moment I walked in, I felt pampered and relaxed. <span className=' hidden md:visible'>My facial was amazing, and my skin feels incredible."</span></div>
                            <div className="  font-bold text-black text-xs col-span-4 row-span-2 h-28">"It's clear that SEA Salon is a salon that prioritizes customer satisfaction. With a talented team, a relaxing atmosphere, and a wide range of services, they offer something for everyone."</div>
                        </div>
                    </div>
                    <div className=" col-span-4 md:col-span-2 min-h-32 bg-white hover:bg-[#8c928e] rounded-md border-2 border-black hover:border-[#22ABFA]">
                        <div className="mt-4 mx-4 grid grid-cols-4 gap-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-16 md:size-16">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <div className=" text-sm md:text-2xl font-extrabold text-black col-start-2 col-span-3 h-8 ">Anna Jackson</div>
                            <div className=" -mt-10 font-bold text-black text-xs col-start-2 col-span-3 h-12 w-full">"SEA Salon is my new go-to salon. They have a wide range of services, and the staff is incredibly knowledgeable. <span className=' hidden md:visible'>They use only top-quality products, and it shows in the results."</span></div>
                        </div>
                    </div>
                    <div className=" col-span-4 md:col-span-1 p-3 min-h-32 bg-white hover:bg-[#8c928e] rounded-md border-2 border-black hover:border-[#22ABFA]">
                        <div className="mt-4 mx-4 grid grid-cols-2 gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" size-16 md:size-16 text-black">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <div className=" text-sm md:text-2xl font-extrabold text-black ">Alex Kim</div>
                            <div className=" -mt-2 font-bold text-black text-xs col-span-2 h-16">"Treat yourself to a manicure and pedicure at SEA Salon! <span className=' hidden md:visible'> They have a fantastic selection of colors, and the technicians are meticulous. My nails have never looked better!"</span></div>
                        </div>
                    </div>
                    <div className=" col-span-4 md:col-span-3 h-64 md:h-48 bg-white hover:bg-[#8c928e] rounded-md border-2 border-black hover:border-[#22ABFA]">
                        <div className="mt-4 mx-4 grid grid-cols-6 gap-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-16 md:size-16 text-black">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <div className=" text-sm md:text-2xl font-extrabold text-black col-start-2 col-span-5 h-8 ">Maya Patel</div>
                            <div className=" -mt-6 font-bold text-black text-xs col-start-2 col-span-5 h-28 w-full">"I've been coming to SEA Salon for years, and I wouldn't trust anyone else with my hair. The stylists are always up-to-date on the latest trends, and they always recommend what's best for my hair type."</div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}