import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Reservation({ auth }) {
    return (
        <>
            <Head title="Reserve" />
            <AuthenticatedLayout
                user={auth.user}
            >
                
            </AuthenticatedLayout>
        </>
    )
}