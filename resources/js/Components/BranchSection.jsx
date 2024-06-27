import Branch1 from '../../../public/images/Branch1.jpg';
import Branch2 from '../../../public/images/Branch2.png';
import Branch3 from '../../../public/images/Branch3.jpg';
import Branch4 from '../../../public/images/Branch4.png';
import StarRating from './StarRating';
import PrimaryButton from './PrimaryButton';

export default function BranchSection() {
    return (
        <>
            <section className=" pt-3 w-full h-92 bg-[#cfe8d6]">
                <h2 className=' font-black md:text-3xl my-4 pl-8'>Branches</h2>
                <div className=' md:grid md:grid-cols-2 md:-gap-4'>
                    <div className='m-4'>
                        <div class="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl md:min-h-[224px]">
                            <div class="md:flex">
                                <div class="md:shrink-0">
                                    <img class="h-48 w-full object-cover md:h-full md:w-48" src={Branch1} alt="Branch 1" />
                                </div>
                                <div class="p-8">
                                    <div class="uppercase tracking-wide text-sm text-[#22ABFA] font-semibold">Cikarang Branch</div>
                                    <a href="https://www.google.com/maps/place/Jl.+Ciliwung+Raya+No.42,+Simpangan,+Kec.+Cikarang+Utara,+Kabupaten+Bekasi,+Jawa+Barat+17530/@-6.2719323,107.1826445,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6984bb5f0e6491:0x6198f0b97736357d!8m2!3d-6.2719323!4d107.1826445!16s%2Fg%2F11c1bhbb99?entry=ttu" target="_blank" rel="noopener noreferrer" className=" text-sm block mt-1 md:text-lg leading-tight font-medium text-black hover:underline">Jl. Ciliwung Raya No.42, Simpangan, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530</a>
                                    <div className='flex justify-between'>
                                        <div>
                                            <p class="mt-2 text-slate-500 text-sm md:text-base">Open time : 10:00 - 20:00</p>
                                            <StarRating />
                                        </div>
                                        <PrimaryButton className=' rounded-2xl '>Review</PrimaryButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='m-4 '>
                        <div class=" mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl md:min-h-[224px]">
                            <div class="md:flex">
                                <div class="md:shrink-0">
                                    <img class="h-48 w-full object-cover md:h-full md:w-48" src={Branch2} alt="Branch 2" />
                                </div>
                                <div class="p-8">
                                    <div class="uppercase tracking-wide text-sm text-[#22ABFA] font-semibold">Jakarta Branch 1</div>
                                    <a href="https://www.google.com/maps/place/Jl.+Bina+Marga+No.42,+RT.3%2FRW.6,+Cipayung,+Kec.+Cipayung,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta+13840/@-6.3216115,106.8867173,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69edc3baf97315:0x570590c7d8369bb6!8m2!3d-6.3216168!4d106.8892922!16s%2Fg%2F11t1bmxhjh?entry=ttu" target="_blank" rel="noopener noreferrer" class="text-sm block mt-1 md:text-lg leading-tight font-medium text-black hover:underline">Jl. Bina Marga No.42, RT.3/RW.6, Cipayung, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13840</a>
                                    <div className='flex justify-between'>
                                        <div>
                                            <p class="mt-2 text-slate-500 text-sm md:text-base">Open time : 08:00 - 21:00</p>
                                            <StarRating />
                                        </div>
                                        <PrimaryButton className=' rounded-2xl '>Review</PrimaryButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='m-4 '>
                        <div class=" mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl md:min-h-[224px]">
                            <div class="md:flex">
                                <div class="md:shrink-0">
                                    <img class="h-48 w-full object-cover md:h-full md:w-48" src={Branch3} alt="Branch 3" />
                                </div>
                                <div class="p-8">
                                    <div class="uppercase tracking-wide text-sm text-[#22ABFA] font-semibold">Jakarta Branch 2</div>
                                    <a href="https://www.google.com/maps/place/Jl.+TB+Simatupang+No.89,+RT.1%2FRW.2,+Ps.+Minggu,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12520/@-6.301015,106.8316408,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69edf660d0e383:0x28ccdfc8cffa26cd!8m2!3d-6.3010203!4d106.8342157!16s%2Fg%2F11rg61pspv?entry=ttu" target="_blank" rel="noopener noreferrer" class="text-sm block mt-1 md:text-lg leading-tight font-medium text-black hover:underline">Jl. TB Simatupang No.89, RT.1/RW.2, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12520</a>
                                    <div className='flex justify-between'>
                                        <div>
                                            <p class="mt-2 text-slate-500 text-sm md:text-base">Open time : 08:00 - 21:00</p>
                                            <StarRating />
                                        </div>
                                        <PrimaryButton className=' rounded-2xl '>Review</PrimaryButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='m-4 '>
                        <div class=" mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl md:min-h-[224px]">
                            <div class="md:flex">
                                <div class="md:shrink-0">
                                    <img class="h-[224px] w-full object-cover md:h-full md:w-48" src={Branch4} alt="Branch 1" />
                                </div>
                                <div class="p-8">
                                    <div class="uppercase tracking-wide text-sm text-[#22ABFA] font-semibold">Tangerang Branch</div>
                                    <a href="https://www.google.com/maps/place/Jl.+Raya+Viktor+Bsd+No.48,+Ciater,+Kec.+Serpong,+Kota+Tangerang+Selatan,+Banten+15310/@-6.3243362,106.6800622,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69e518a9a21d35:0x77434cc2e95aa156!8m2!3d-6.3243415!4d106.6826371!16s%2Fg%2F11k5qsqm0l?entry=ttu" target="_blank" rel="noopener noreferrer" class="text-sm block mt-1 md:text-lg leading-tight font-medium text-black hover:underline">Jl. Raya Viktor Bsd No.48, Ciater, Kec. Serpong, Kota Tangerang Selatan, Banten 15310</a>
                                    <div className='flex justify-between'>
                                        <div>
                                            <p class="mt-2 text-slate-500 text-sm md:text-base">Open time : 08:00 - 19:00</p>
                                            <StarRating />
                                        </div>
                                        <PrimaryButton className=' rounded-2xl '>Review</PrimaryButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}