import Logo from '../../../public/images/Logo.png';
import { Link } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import ApplicationLogo from './ApplicationLogo';

export default function NavBar({ user }) {
    return (
        <>
            <header className=" bg-white px-4 md:px-12 h-12 md:h-24 w-full fixed z-10 flex flex-1 justify-between items-center top-0 pb-1">
                <div className=''>
                    <Link href="/">
                        <ApplicationLogo className="h-10 block w-auto fill-current text-gray-800 dark:text-gray-200" />
                    </Link>
                </div>
                <div className="flex items-center ms-6">
                    <div className="ms-3 relative">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button className=' pr-4 md:hidden'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#5CE1E6]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route('aboutus')}>About Us</Dropdown.Link>
                                <Dropdown.Link href={route('services')}>Services</Dropdown.Link>
                                <Dropdown.Link href={route('branches')}>Branches</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                        <div className='hidden md:flex md:flex-1 md:justify-end'>
                            {user ? (
                                <>
                                    <Link
                                        href={route('aboutus')}
                                        className="rounded-md px-3 py-2 text-[#5CE1E6] text-lg font-extrabold ring-1 ring-transparent transition hover:text-[#22ABFA] focus:outline-none focus-visible:ring-[#38DDBF] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        href={route('services')}
                                        className="rounded-md px-3 py-2 text-[#5CE1E6] text-lg font-extrabold ring-1 ring-transparent transition hover:text-[#22ABFA] focus:outline-none focus-visible:ring-[#38DDBF] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Services
                                    </Link>
                                    <Link
                                        href={route('branches')}
                                        className="rounded-md px-3 py-2 text-[#5CE1E6] text-lg font-extrabold ring-1 ring-transparent transition hover:text-[#22ABFA] focus:outline-none focus-visible:ring-[#38DDBF] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Branches
                                    </Link>
                                </>
                            ) : (
                                    <>
                                        <Link
                                            href={route('aboutus')}
                                            className="rounded-md px-3 py-2 text-[#5CE1E6] text-lg font-extrabold ring-1 ring-transparent transition hover:text-[#22ABFA] focus:outline-none focus-visible:ring-[#38DDBF] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            About Us
                                        </Link>
                                        <Link
                                            href={route('services')}
                                            className="rounded-md px-3 py-2 text-[#5CE1E6] text-lg font-extrabold ring-1 ring-transparent transition hover:text-[#22ABFA] focus:outline-none focus-visible:ring-[#38DDBF] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Services
                                        </Link>
                                        <Link
                                            href={route('branches')}
                                            className="rounded-md px-3 py-2 text-[#5CE1E6] text-lg font-extrabold ring-1 ring-transparent transition hover:text-[#22ABFA] focus:outline-none focus-visible:ring-[#38DDBF] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Branches
                                        </Link>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-[#5CE1E6] text-lg font-extrabold ring-1 ring-transparent transition hover:text-[#22ABFA] focus:outline-none focus-visible:ring-[#38DDBF] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                    </>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}