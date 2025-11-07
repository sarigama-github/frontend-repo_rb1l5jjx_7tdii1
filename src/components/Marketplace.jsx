import { MapPin, Star, Clock } from "lucide-react";

const studios = [
  {
    id: 1,
    name: "CoreFlow Studio",
    location: "Downtown",
    rating: 4.8,
    price: 35,
    image:
      "https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Align & Breathe",
    location: "Riverside",
    rating: 4.6,
    price: 29,
    image:
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Pilates Loft",
    location: "Midtown",
    rating: 4.9,
    price: 42,
    image:
      "https://images.unsplash.com/photo-1552190214-00c1b3fd9d30?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Marketplace({ onSelectStudio }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Book a Studio</h2>
          <p className="text-gray-500 text-sm">Choose a space and reserve your time slot</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {studios.map((s) => (
          <article
            key={s.id}
            className="group bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-medium text-gray-900">{s.name}</h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="h-3.5 w-3.5" /> {s.location}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs bg-yellow-50 text-yellow-700 border border-yellow-200 px-2 py-1 rounded">
                  <Star className="h-3 w-3" /> {s.rating}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-700">From ${s.price}/hr</p>
                <button
                  onClick={() => onSelectStudio(s)}
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
                >
                  <Clock className="h-4 w-4" /> Book
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
