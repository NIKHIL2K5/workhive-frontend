function Testimonials() {
    const clients = [
        {
            quote: "A terrific piece of praise",
            name: "Arjun Mehta",
            role: "Startup Founder",
            avatar: "https://i.pravatar.cc/100?img=12",
        },
        {
            quote: "Outstanding service and support",
            name: "Neha Kapoor",
            role: "Product Designer",
            avatar: "https://i.pravatar.cc/100?img=32",
        },
        {
            quote: "They truly understand the vision",
            name: "Rohit Sharma",
            role: "Creative Director",
            avatar: "https://i.pravatar.cc/100?img=45",
        },
        {
            quote: "Exceeded expectations every time",
            name: "Ananya Verma",
            role: "Marketing Lead",
            avatar: "https://i.pravatar.cc/100?img=56",
        },
    ];
    return (


        <section className="relative min-h-104 w-full overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            >
                <source
                    src="https://res.cloudinary.com/dboscnm7g/video/upload/v1770544017/istockphoto-2210597367-640_adpp_is_enlj3p.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
          <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-white">
        <h1 className="text-4xl font-extrabold text-center mb-14" id="Testimonials">
          Testimonials
        </h1>

        {/* Top 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {clients.slice(0, 3).map((client, index) => (
            <div
              key={index}
              className="bg-black/90 rounded-xl p-8 shadow-lg border-2 border-blue-500 "
            >
              <p className="text-sm italic mb-6">
                “{client.quote}”
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={client.avatar}
                  alt={client.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">
                    {client.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {client.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom featured card */}
        <div className="bg-black/90 rounded-xl p-8 shadow-lg border-2 border-blue-500">
          <p className="text-sm italic mb-8">
            “{clients[3].quote}”
          </p>

          <div className="flex items-center gap-3">
            <img
              src={clients[3].avatar}
              alt={clients[3].name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">
                {clients[3].name}
              </p>
              <p className="text-xs text-gray-400">
                {clients[3].role}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
    )
}
export default Testimonials;