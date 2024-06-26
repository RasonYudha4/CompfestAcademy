import Logo from '../../../public/images/Logo.png';
import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';

export default function NavBar({ user }) {
    return (
        <>
            <header className=" bg-white mx-3 my-3 px-4 md:px-12 h-24 w-full fixed flex flex-1 justify-between items-center top-0">
                <div className=''>
                    <Link href="/">
                        <ApplicationLogo className="h-10 block w-auto fill-current text-gray-800 dark:text-gray-200" />
                    </Link>
                </div>

                <nav>
                    <button className='md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-[#5CE1E6]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <ul className='fixed left-0 right-0 p-4 transform translate-x-full min-h-screen space-y-4 md:space-y-0 md:translate-x-0 md:relative md:flex md:min-h-0 md:space-x-6 md:p-0'>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#branch">Branch</a>
                        </li>
                        <li>
                            <a href="#service">Services</a>
                        </li>
                    </ul>
                </nav>
                {/* <div className='flex flex-1 justify-end'>
                    {user ? (
                        <Link
                            href={route('dashboard')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="rounded-md px-3 py-2 text-[#5CE1E6] font-bold ring-1 ring-transparent transition hover:text-[#22ABFA] focus:outline-none focus-visible:ring-[#38DDBF] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="rounded-md px-3 py-2 text-[#5CE1E6] font-bold ring-1 ring-transparent transition hover:text-[#22ABFA] focus:outline-none focus-visible:ring-[#38DDBF] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div> */}
            </header>
        </>
    )
}