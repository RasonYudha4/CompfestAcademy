import Reservation from "@/Pages/Admin/Reservation";
import Review from "@/Pages/Admin/Review";

const contents = [
    {
        id : 0,
        title : 'Review',
        content : <Review/> 
    },
    {
        id : 1,
        title : 'Reservation',
        content : <Reservation/>
    }
];

export default function AdminLayout({ content, onChange }) {
    return (
        <>
            <div className=' grid grid-cols-8 w-full min-h-screen'>
                <nav className=' col-span-2 h-auto bg-[#22ABFA]'>

                </nav>
                <section>
                    
                </section>
            </div>
        </>
    )
}