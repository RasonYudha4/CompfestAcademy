import Sidebar from "@/Components/Sidebar"
import Review from "./Review"
import Reservation from "./Reservation"

export default function AdminDashboard({ auth }) {
    return (
        <>
            <div className=' grid grid-cols-8 w-full min-h-screen'>
                <Sidebar />
                {/* <Review/> */}
                <Reservation/>
            </div>
        </>
    )
}