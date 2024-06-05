import Image from "next/image";
import image from "@/../public/aboutus.png";

const AboutUs = () => {
    return (
        <section className="bg-slate-900 w-5/6 m-auto h-auto mt-10 rounded-3xl text-white flex flex-col items-center">
            <div className="mt-10">
                <h1 className="text-4xl font-bold">About Us</h1>
            </div>
            <div className="flex items-center justify-around">
                <div className="flex flex-col items-start w-3/5 pl-10">
                    <h1 className="text-3xl font-semibold">Hello Blogers</h1>
                    <p className="mt-10">Welcome to 'Blog.com', where stories come alive and knowledge is shared. Our mission is to create a vibrant community of readers and writers who are passionate about exploring diverse topics and sharing their unique perspectives.</p>
                    <p className="mt-5">At 'Blog.com', we believe in the power of words to inspire, inform, and entertain. Our blog is a hub for high-quality, engaging content that resonates with readers.</p>
                </div>
                <div>
                    <Image className="rounded-lg" src={image} width={500} height={500} alt="office content 2" />
                </div>
            </div>
        </section>
    )
}

export default AboutUs