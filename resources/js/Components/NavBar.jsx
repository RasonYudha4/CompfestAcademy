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
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {user.name}

                                                    <svg
                                                        className="ms-2 -me-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                            <Dropdown.Link href={route('reserve')}>Reserve</Dropdown.Link>
                                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
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