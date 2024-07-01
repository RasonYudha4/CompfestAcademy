import ApplicationLogo from './ApplicationLogo';

export default function Sidebar({ admin }) {
    return (
        <>
            <div>
                <div>
                    <ApplicationLogo className="h-10 block w-auto fill-current text-gray-800 dark:text-gray-200" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#5CE1E6]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div>
                    {admin.name}
                </div>
                <ul>

                </ul>
            </div>
        </>
    )
}