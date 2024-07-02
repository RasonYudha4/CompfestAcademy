import ApplicationLogo from './ApplicationLogo';

export default function Sidebar({ admin }) {
    return (
        <>
                <nav className=' col-span-1 h-auto bg-[#22ABFA] text-white'>
                    <div className=' mt-8 w-full'>
                        <h1 className=' ml-4 text-2xl font-black'>Admin</h1>
                        <div className='mt-4'>
                            <div className=' font-semibold text-center p-4 cursor-pointer hover:bg-[#3d88b4] duration-300'>Reviews</div>
                            <div className=' font-semibold text-center p-4 cursor-pointer hover:bg-[#3d88b4] duration-300'>Reservations</div>
                        </div>
                    </div>
                </nav>
        </>
    )
}