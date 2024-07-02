import Sidebar from "@/Components/Sidebar"
import Review from "./Review"

export default function AdminDashboard({ auth, reservations, reviews }) {
    return (
        <>
                <Review reviews={reviews}/>
        </>
    )
}