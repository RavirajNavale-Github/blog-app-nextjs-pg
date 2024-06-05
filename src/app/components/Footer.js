import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white rounded-lg shadow m-4 mt-32 -mb-10">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-white">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link
                        href="https://flowbite.com/"
                        className="flex items-center mb-4 ml-9 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <span className="self-center text-2xl font-bold whitespace-nowra text-white">
                            Blog.com
                        </span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 mr-9 text-sm font-medium text-white sm:mb-0">
                        <li>
                            <Link href="/aboutus" className="hover:underline me-4 md:me-6">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">
                                Licensing
                            </Link>
                        </li>
                        <li>
                            <Link href="/contactus" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024{" "}
                    <Link href="https://flowbite.com/" className="hover:underline">
                        Blog.com™
                    </Link>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
