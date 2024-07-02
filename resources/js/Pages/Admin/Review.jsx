import Sidebar from "@/Components/Sidebar"

export default function Review({ reviews }) {
    return (
        <>
        <div className=' grid grid-cols-8 w-full min-h-screen'>
        <Sidebar/>
            <section className=" col-span-7 bg-[#8c928e]">
                <div className=" m-6 p-2 bg-white w-auto h-screen rounded-xl">
                    <h3 className=" text-4xl m-12 font-black">Review</h3>
                    <table className=" table-auto w-full h-auto border-collapse border border-slate-500">
                        <thead>
                            <tr>
                                <th className="border border-slate-600">Branch</th>
                                <th className="border border-slate-600">Rating</th>
                                <th className="border border-slate-600">Review</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map(review => (
                                    <tr key = {review.id}>
                                        { console.log(review.review)}
                                        <td className="border border-slate-700 bg-gray-300">{review.branch}</td>
                                        <td className="border border-slate-700 bg-gray-300">{review.rating}</td>
                                        <td className="border border-slate-700 bg-gray-300">{review.review}</td>
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