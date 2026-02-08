function Chooseus() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            >
                <source
                    src="https://res.cloudinary.com/dboscnm7g/video/upload/v1769940664/working_xpzxr3.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-white">

                {/* Section Title */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" id="WhyChooseWorkHive">
                        Why Choose <span className="text-yellow-400">WORKHIVE</span>
                    </h2>
                    <p className="mt-4 text-gray-300 text-lg">
                        Not another freelancing platform. An ecosystem.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Card 1 */}
                    <div className="bg-black/70 backdrop-blur rounded-2xl p-8 hover:scale-[1.02] transition">
                        <h3 className="text-xl font-bold mb-4">
                            🏠 Two Clear Homes, One Powerful Platform
                        </h3>
                        <p className="text-gray-300 mb-4">
                            WORKHIVE gives freelancers and clients their own dedicated spaces.
                        </p>
                        <ul className="space-y-2 text-gray-300">
                            <li>• Tools built for their goals</li>
                            <li>• Interfaces designed for their mindset</li>
                            <li>• Zero role confusion</li>
                        </ul>
                        <p className="mt-4 text-gray-400">
                            When everyone knows where they belong, collaboration flows.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-black/70 backdrop-blur rounded-2xl p-8 hover:scale-[1.02] transition">
                        <h3 className="text-xl font-bold mb-4">
                            🔥 Matching Over Messaging
                        </h3>
                        <p className="text-gray-300">
                            Endless proposals are replaced by a smart, swipe-based matching system.
                        </p>
                        <p className="mt-4 text-gray-400">
                            No chasing. No inbox spam. Just mutual intent.
                        </p>
                        <p className="mt-2 text-gray-400 font-semibold">
                            Less noise. Better alignment.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-black/70 backdrop-blur rounded-2xl p-8 hover:scale-[1.02] transition">
                        <h3 className="text-xl font-bold mb-4">
                            🚀 More Than Gigs. A Creator Economy.
                        </h3>
                        <p className="text-gray-300">
                            WORKHIVE blends freelancing, a creator marketplace, and social networking.
                        </p>
                        <p className="mt-4 text-gray-400">
                            Your work doesn’t disappear after delivery.
                        </p>
                        <p className="mt-2 text-gray-400 font-semibold">
                            It grows your presence.
                        </p>
                    </div>

                </div>
            </section>
        </section>
    )
}

export default Chooseus;