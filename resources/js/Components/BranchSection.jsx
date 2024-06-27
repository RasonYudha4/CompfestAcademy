import Branch1 from '../../../public/images/Branch1.jpg';
import Branch2 from '../../../public/images/Branch2.png';
import Branch3 from '../../../public/images/Branch3.jpg';
import StarRating from './StarRating';

export default function BranchSection() {
    return (
        <>
            <section className=" w-full h-92 bg-[#cfe8d6] grid grid-cols-2 gap-4">
                {/* <div className=" p-12">
                    <div className=" w-[450px] h-auto border-[#5CE1E6]">
                        <div className=' flex justify-start'>
                            <img src={Branch1} alt="" />
                            <div className=''>
                                <h4 className=' font-black text-xl'>Jl. Ciliwung Raya No.42, Simpangan, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530</h4>
                                <p><span>Open Hours : </span> 10:00 - 20:00 </p>
                                <StarRating />
                            </div>
                        </div>
                        <button>Review</button>
                    </div>
                </div> */}

                <div className='m-2'>
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div class="md:flex">
                            <div class="md:shrink-0">
                                <img class="h-48 w-full object-cover md:h-full md:w-48" src={Branch1} alt="Branch 1" />
                            </div>
                            <div class="p-8">
                                <div class="uppercase tracking-wide text-sm text-[#5CE1E6] font-semibold">Cikarang Branch</div>
                                <a href="https://www.google.com/maps/place/Jl.+Ciliwung+Raya+No.42,+Simpangan,+Kec.+Cikarang+Utara,+Kabupaten+Bekasi,+Jawa+Barat+17530/@-6.2719323,107.1826445,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6984bb5f0e6491:0x6198f0b97736357d!8m2!3d-6.2719323!4d107.1826445!16s%2Fg%2F11c1bhbb99?entry=ttu" target="_blank" rel="noopener noreferrer" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Jl. Ciliwung Raya No.42, Simpangan, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530</a>
                                <div className='flex justify-between'>
                                    <div>
                                        <p class="mt-2 text-slate-500">Open time : 10:00 - 20:00</p>
                                        <StarRating />
                                    </div>
                                    <button>Review</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}