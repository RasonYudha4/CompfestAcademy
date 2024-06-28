import ApplicationLogo from "./ApplicationLogo";

export default function Footer() {
    return (
        <>
            <footer className=" w-full h-32 bg-[#cfe8d6] grid grid-cols-2 place-items-center">
                <ApplicationLogo className=" h-44"/>
                <div>
                    <h3>Contact Person</h3>
                    <div>
                        <p>Thomas : 08123456789</p>
                        <p>Sekar :  08164829372</p>
                    </div>
                </div>
            </footer>
        </>
    )
}