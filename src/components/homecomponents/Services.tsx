import { useState, useEffect } from "react";

const baseCards = [
    { id: 1, title: "Service 1", images: "https://res.cloudinary.com/dboscnm7g/image/upload/v1770541125/pexels-juanico-11553189_g5fovr.jpg" },
    { id: 2, title: "Service 2", images: "https://res.cloudinary.com/dboscnm7g/image/upload/v1770541194/pexels-japy-13890265_rak2xd.jpg" },
    { id: 3, title: "Service 3", images: "https://res.cloudinary.com/dboscnm7g/image/upload/v1770541298/pexels-jakubzerdzicki-34518920_e25jzz.jpg" },
    { id: 4, title: "Service 4", images: "https://res.cloudinary.com/dboscnm7g/image/upload/v1770541299/pexels-peaky-29445973_vkcdfd.jpg" },
    { id: 5, title: "Service 5", images: "https://res.cloudinary.com/dboscnm7g/image/upload/v1770541298/pexels-eva-bronzini-6956316_pp38gx.jpg" },
    { id: 6, title: "Service 6", images: "https://res.cloudinary.com/dboscnm7g/image/upload/v1770541300/pexels-eva-bronzini-7661627_ozury8.jpg" },
];

// Triple the list
const cards = [...baseCards, ...baseCards, ...baseCards];
const BASE_LEN = baseCards.length;
const CENTER = BASE_LEN; // true center

function InfiniteStackedServices() {
    const [active, setActive] = useState(CENTER);

    const prev = () => setActive((i) => i - 1);
    const next = () => setActive((i) => i + 1);

    /**
     * 🔑 KEY PART
     * If we drift too far, silently reset back to center
     */
    useEffect(() => {
        if (active <= BASE_LEN / 2) {
            setActive(active + BASE_LEN);
        }
        if (active >= BASE_LEN * 2 + BASE_LEN / 2) {
            setActive(active - BASE_LEN);
        }
    }, [active]);

    return (
        <section className="relative py-24  flex flex-col items-center overflow-hidden bg-[#FFFEE4]">

            <h2 className="text-4xl font-semibold mb-12 font-[arial] font-extrabold">Our Services</h2>

            <div className="relative w-[300px] h-[440px]">
                {cards.map((card, index) => {
                    const offset = index - active;

                    // Only draw nearby cards
                    if (Math.abs(offset) > 3) return null;

                    return (
                        <div
                            key={`${card.id}-${index}`}
                            className="absolute inset-0 rounded-3xl bg-black text-white
                         flex items-center justify-center text-xl font-bold
                         transition-all duration-500 ease-out"
                            style={{
                                transform: `
                  translateX(${offset * 45}px)
                  scale(${offset === 0 ? 1 : 0.88})
                `,
                                zIndex: 100 - Math.abs(offset),
                                opacity: offset === 0 ? 1 : 0.45,
                                filter: offset === 0 ? "blur(0)" : "blur(3px)",
                            }}
                        >
                            {card.title}
                            <img src={card.images} alt={card.title} className="absolute inset-0 w-full h-full object-cover rounded-3xl" />
                        </div>
                    );
                })}
            </div>

            {/* Arrows */}
            <div className="flex gap-10 mt-12">
                <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-black
                     flex items-center justify-center
                     hover:bg-black hover:text-white transition"
                >
                    ‹
                </button>

                <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-black
                     flex items-center justify-center
                     hover:bg-black hover:text-white transition"
                >
                    ›
                </button>
            </div>
        </section>
    );
}

export default InfiniteStackedServices;
