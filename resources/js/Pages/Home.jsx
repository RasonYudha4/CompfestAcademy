import { Head } from '@inertiajs/react';
import Background from '../../../public/images/Background.png';
import NavBar from '@/Components/NavBar';
import ImageSlider from '@/Components/ImageSlider';

export default function Home({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Home"/>
            <NavBar user={auth.user}/>
            <section className=" w-full h-full">
                <img src={Background} alt="" className=''/>
            </section>
            <section className='p-4 w-full bg-[#cfe8d6]'>
                <div className='mx-2 bg-white rounded-3xl'>
                    <h2 className='font-black text-xl text-center pt-6 mb-6 md:text-4xl'>About Us</h2>
                    <div class="flex items-center justify-center">
                        <pre class="w-32 text-center border-t-2 border-[#5CE1E6]"></pre>
                    </div>
                    <p className='px-4 tracking-wide mt-4 text-xs text-center pb-8 md:text-xl md:px-20'>At SEA Salon, we're <span className='  font-black text-[#5CE1E6]'>more than just a salon</span>, we're a haven for self-care and a celebration of your unique beauty. We believe that <span className='  font-black text-[#5CE1E6]'>looking and feeling your best go hand-in-hand</span>, which is why we offer a <span className='  font-black text-[#5CE1E6]'>comprehensive range of services</span> in a warm and inviting atmosphere.</p>
                </div>
            </section>
            <ImageSlider/>
            <section className=' w-full min-h-screen'>

            </section>
        </>
    )
}