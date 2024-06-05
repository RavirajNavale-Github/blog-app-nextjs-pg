import Image from "next/image";
import image from "@/../public/contactus.png";

const ContactUs = () => {
    return (
        <>
            <section className="text-slate-900 flex flex-col items-center mt-10 w-5/6 m-auto">
                <div className="mt-10">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                </div>
                <div className="flex items-center justify-between gap-40 mt-8">
                    <div>
                        <Image className="rounded-lg" src={image} width={700} height={700} alt="office content 2" />
                    </div>
                    <div className="w-3/5">
                        <form className="flex flex-col">
                            <label className="font-semibold mb-1">Name</label>
                            <input type="text" placeholder="Samson Paul" className="p-2 border-slate-600 border-2 rounded-lg mb-3 outline-none" />
                            <label className="font-semibold mb-1">Email</label>
                            <input type="email" placeholder="samson@gmail.com" className="p-2 border-slate-600 border-2 rounded-lg mb-3 outline-none " />
                            <label className="font-semibold mb-1">Message</label>
                            <textarea type="text" placeholder="Write message..." className="p-2 border-slate-600 border-2 rounded-lg mb-3 outline-none" />
                            <button type="submit" className="p-2 bg-slate-900 text-white rounded-lg mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>



    )
}

export default ContactUs
