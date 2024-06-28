import { useState } from 'react';
import NavBar from '@/Components/NavBar';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <NavBar user={user}/>
            <main>{children}</main>
        </div>
    );
}
