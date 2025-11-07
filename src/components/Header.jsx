import { Store, Calendar, Dumbbell } from "lucide-react";

export default function Header({ mode, onChangeMode }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-teal-600 text-white grid place-items-center shadow-sm">
            <Dumbbell className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Pilates Market</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Studios • Classes • Schedules</p>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <button
            onClick={() => onChangeMode("market")}
            className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm border transition ${
              mode === "market"
                ? "bg-teal-600 text-white border-teal-600"
                : "bg-white text-gray-700 hover:bg-gray-50 border-gray-200"
            }`}
            aria-pressed={mode === "market"}
          >
            <Store className="h-4 w-4" />
            Marketplace
          </button>

          <button
            onClick={() => onChangeMode("manage")}
            className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm border transition ${
              mode === "manage"
                ? "bg-teal-600 text-white border-teal-600"
                : "bg-white text-gray-700 hover:bg-gray-50 border-gray-200"
            }`}
            aria-pressed={mode === "manage"}
          >
            <Calendar className="h-4 w-4" />
            Manage Schedule
          </button>
        </nav>
      </div>
    </header>
  );
}
