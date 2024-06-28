import { useState } from 'react';
import NavBar from '@/Components/NavBar';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <NavBar user={user}/>
            <main className="w-full sm:max-w-md mt-16 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">{children}</main>
        </div>
    );
}
