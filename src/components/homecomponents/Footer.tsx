import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-[#FFFEE4] px-6 sm:px-12 lg:px-20 py-14">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between">

                {/* LEFT SECTION */}
                <div className="flex flex-col justify-between gap-8">
                    <h1 className="text-xl font-semibold tracking-wide text-gray-900">
                        WORK HIVE
                    </h1>

                    {/* Social Icons */}
                    <div className="flex gap-5 text-gray-600">
                        <a
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WorkHive Facebook"
                        >
                            <Facebook className="w-5 h-5 hover:text-gray-900 cursor-pointer transition" />
                        </a>
                        <a href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WorkHive linkedin"><Linkedin className="w-5 h-5 hover:text-gray-900 cursor-pointer transition" /></a>
                        <a href="https://youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WorkHive youtube"><Youtube className="w-5 h-5 hover:text-gray-900 cursor-pointer transition" /></a>
                         <a href="https://instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WorkHive instagram"><Instagram className="w-5 h-5 hover:text-gray-900 cursor-pointer transition" /></a>
                    </div>
                </div>

                {/* RIGHT LINKS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-10">

                    {/* Column */}
                    <div className="flex flex-col gap-3 text-gray-700">
                        <h2 className="font-semibold text-gray-900 mb-1">Topic</h2>
                        <a className="hover:text-gray-900 transition cursor-pointer" href="#WhyChooseWorkHive">Why Choose WorkHive</a>
                        <a className="hover:text-gray-900 transition cursor-pointer" href="#Testimonials">Testimonials</a>
                        <a className="hover:text-gray-900 transition cursor-pointer" href="#Served">Our Services</a>
                    </div>

                    <div className="flex flex-col gap-3 text-gray-700">
                        <h2 className="font-semibold text-gray-900 mb-1">Topic</h2>
                        <a className="hover:text-gray-900 transition cursor-pointer">Page</a>
                        <a className="hover:text-gray-900 transition cursor-pointer">Page</a>
                        <a className="hover:text-gray-900 transition cursor-pointer">Page</a>
                    </div>

                    <div className="flex flex-col gap-3 text-gray-700">
                        <h2 className="font-semibold text-gray-900 mb-1">Topic</h2>
                        <a className="hover:text-gray-900 transition cursor-pointer">Page</a>
                        <a className="hover:text-gray-900 transition cursor-pointer">Page</a>
                        <a className="hover:text-gray-900 transition cursor-pointer">Page</a>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
