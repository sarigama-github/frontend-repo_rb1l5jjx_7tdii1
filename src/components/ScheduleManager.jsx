import { useState } from "react";
import { Plus, Trash2, GripVertical } from "lucide-react";

export default function ScheduleManager() {
  const [classes, setClasses] = useState([
    { id: 1, title: "Reformer Basics", day: "Mon", time: "09:00", level: "Beginner" },
    { id: 2, title: "Mat Flow", day: "Wed", time: "18:30", level: "All Levels" },
    { id: 3, title: "Power Core", day: "Fri", time: "07:30", level: "Intermediate" },
  ]);
  const [dragId, setDragId] = useState(null);

  const onDragStart = (id) => setDragId(id);
  const onDragOver = (e) => e.preventDefault();
  const onDrop = (id) => {
    const dragIndex = classes.findIndex((c) => c.id === dragId);
    const hoverIndex = classes.findIndex((c) => c.id === id);
    if (dragIndex === -1 || hoverIndex === -1) return;
    const updated = [...classes];
    const [removed] = updated.splice(dragIndex, 1);
    updated.splice(hoverIndex, 0, removed);
    setClasses(updated);
  };

  const addClass = () => {
    const nextId = Math.max(0, ...classes.map((c) => c.id)) + 1;
    setClasses([
      ...classes,
      { id: nextId, title: "New Class", day: "Sat", time: "10:00", level: "All Levels" },
    ]);
  };

  const removeClass = (id) => setClasses(classes.filter((c) => c.id !== id));

  const updateField = (id, field, value) =>
    setClasses(classes.map((c) => (c.id === id ? { ...c, [field]: value } : c)));

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Manage Classes</h2>
          <p className="text-gray-500 text-sm">Drag to reorder, click to edit</p>
        </div>
        <button onClick={addClass} className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-teal-600 text-white rounded-md hover:bg-teal-700">
          <Plus className="h-4 w-4" /> Add Class
        </button>
      </div>

      <div className="space-y-3">
        {classes.map((c) => (
          <div
            key={c.id}
            className="bg-white border rounded-lg p-3 shadow-sm flex items-center gap-3"
            draggable
            onDragStart={() => onDragStart(c.id)}
            onDragOver={onDragOver}
            onDrop={() => onDrop(c.id)}
          >
            <GripVertical className="h-5 w-5 text-gray-400" />
            <input
              value={c.title}
              onChange={(e) => updateField(c.id, "title", e.target.value)}
              className="flex-1 text-sm border rounded px-2 py-1"
            />
            <select
              value={c.day}
              onChange={(e) => updateField(c.id, "day", e.target.value)}
              className="text-sm border rounded px-2 py-1"
            >
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
            <input
              value={c.time}
              onChange={(e) => updateField(c.id, "time", e.target.value)}
              className="w-24 text-sm border rounded px-2 py-1"
              placeholder="HH:MM"
            />
            <select
              value={c.level}
              onChange={(e) => updateField(c.id, "level", e.target.value)}
              className="text-sm border rounded px-2 py-1"
            >
              {["Beginner", "Intermediate", "Advanced", "All Levels"].map((lvl) => (
                <option key={lvl}>{lvl}</option>
              ))}
            </select>
            <button
              onClick={() => removeClass(c.id)}
              className="ml-2 inline-flex items-center justify-center h-9 w-9 rounded-md border hover:bg-gray-50"
              aria-label="Remove"
            >
              <Trash2 className="h-4 w-4 text-red-600" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
