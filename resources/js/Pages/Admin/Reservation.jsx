export default function Reservation() {
    return (
        <>
            <section className=" col-span-7 bg-[#8c928e]">
                    <div className=" m-6 p-2 bg-white w-auto h-screen rounded-xl">
                        <h3 className=" text-4xl m-12 font-black">Reservation</h3>
                        <table className=" table-auto w-full h-auto border-collapse border border-slate-500">
                            <thead>
                                <tr>
                                    <th class="border border-slate-600">Name</th>
                                    <th class="border border-slate-600">Service</th>
                                    <th class="border border-slate-600">Phone</th>
                                    <th class="border border-slate-600">Date</th>
                                    <th class="border border-slate-600">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border border-slate-700 bg-gray-300">test 1</td>
                                    <td class="border border-slate-700 bg-gray-300">test 2</td>
                                    <td class="border border-slate-700 bg-gray-300">test 3</td>
                                    <td class="border border-slate-700 bg-gray-300">test 4</td>
                                    <td class="border border-slate-700 bg-gray-300">test 5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
        </>
    )
}