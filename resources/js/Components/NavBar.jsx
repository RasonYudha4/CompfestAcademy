import Logo from '../../../public/images/Logo.png';
import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';

export default function NavBar({ user }) {
    return (
        <>
            <nav className="mx-3 my-3 fixed flex flex-1 justify-between items-center top-0">
                <div className=''>
                    <Link href="/">
                        <ApplicationLogo className="h-10 block w-auto fill-current text-gray-800 dark:text-gray-200" />
                    </Link>
                </div>
                <div className='flex flex-1 justify-end'>
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
                </div>
            </nav>
        </>
    )
}