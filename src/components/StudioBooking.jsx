import { useMemo, useState } from "react";
import { CalendarDays, Clock, ChevronLeft, ChevronRight } from "lucide-react";

function generateSlots(startHour = 6, endHour = 20) {
  const slots = [];
  for (let h = startHour; h < endHour; h++) {
    slots.push(`${String(h).padStart(2, "0")}:00`);
    slots.push(`${String(h).padStart(2, "0")}:30`);
  }
  return slots;
}

export default function StudioBooking({ studio, onBack }) {
  const [date, setDate] = useState(() => new Date());
  const [selected, setSelected] = useState(null);

  const slots = useMemo(() => generateSlots(), []);

  const formattedDate = useMemo(() =>
    date.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" }),
  [date]);

  const changeDay = (delta) => {
    const d = new Date(date);
    d.setDate(d.getDate() + delta);
    setDate(d);
    setSelected(null);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <button onClick={onBack} className="text-sm text-gray-600 hover:text-gray-900 mb-4 inline-flex items-center gap-1">
        ← Back to marketplace
      </button>

      <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
        <div className="p-5 border-b flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">{studio.name}</h3>
            <p className="text-xs text-gray-500">Reserve your spot</p>
          </div>
          <div className="inline-flex items-center gap-2 text-sm text-gray-700">
            <CalendarDays className="h-4 w-4" /> {formattedDate}
          </div>
        </div>

        <div className="p-5 space-y-5">
          <div className="flex items-center justify-between">
            <button
              onClick={() => changeDay(-1)}
              className="inline-flex items-center justify-center h-9 w-9 rounded-md border hover:bg-gray-50"
              aria-label="Previous day"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <p className="text-sm text-gray-600">Select a time slot</p>
            <button
              onClick={() => changeDay(1)}
              className="inline-flex items-center justify-center h-9 w-9 rounded-md border hover:bg-gray-50"
              aria-label="Next day"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {slots.map((t) => (
              <button
                key={t}
                onClick={() => setSelected(t)}
                className={`px-3 py-2 text-sm rounded-md border transition inline-flex items-center gap-2 justify-center ${
                  selected === t
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white text-gray-700 hover:bg-gray-50 border-gray-200"
                }`}
              >
                <Clock className="h-4 w-4" /> {t}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <p className="text-sm text-gray-600">
              Selected: {selected ? `${formattedDate} at ${selected}` : "None"}
            </p>
            <button
              disabled={!selected}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md text-white bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-teal-700"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
