import { Head } from '@inertiajs/react';
import Background from '../../../public/images/Background.png';
import NavBar from '@/Components/NavBar';

export default function Home({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Home"/>
            <NavBar user={auth.user}/>
            <section className=" w-full h-full">
                <img src={Background} alt="" className=''/>
            </section>
            <section className=''>

            </section>
        </>
    )
}