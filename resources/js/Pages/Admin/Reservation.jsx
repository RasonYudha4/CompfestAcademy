import Sidebar from "@/Components/Sidebar"

export default function Reservation({ reservations }) {
    return (
        <>
        <div className=' grid grid-cols-8 w-full min-h-screen'>
        <Sidebar/>
            <section className=" col-span-7 bg-[#8c928e]">
                <div className=" m-6 p-2 bg-white w-auto h-screen rounded-xl">
                    <h3 className=" text-4xl m-12 font-black">Reservation</h3>
                    <table className=" table-auto w-full h-auto border-collapse border border-slate-500">
                        <thead>
                            <tr>
                                <th className="border border-slate-600">Name</th>
                                <th className="border border-slate-600">Service</th>
                                <th className="border border-slate-600">Phone</th>
                                <th className="border border-slate-600">Date</th>
                                <th className="border border-slate-600">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reservations.map(reservation => (
                                    <tr key={reservation.id}>
                                        <td className="border border-slate-700 bg-gray-300">{reservation.name}</td>
                                        <td className="border border-slate-700 bg-gray-300">{reservation.service}</td>
                                        <td className="border border-slate-700 bg-gray-300">{reservation.phone}</td>
                                        <td className="border border-slate-700 bg-gray-300">{reservation.date}</td>
                                        <td className="border border-slate-700 bg-gray-300">{reservation.time}</td>
                                    </tr>
                                ))
                                }
                        </tbody>
                    </table>
                </div>
            </section>
            </div>
        </>
    )
}