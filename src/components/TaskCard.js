'use client';

export default function TaskCard({ title, done, onToggle }) {
  const rowBg = done ? "var(--color-done-bg)" : "transparent";

  const titleStyle = {
    // line-through and reduced opacity signal completion without
    // removing the task from the visible list (unless filtered away).
    textDecoration: done ? "line-through" : "none",
    opacity:        done ? 0.5 : 1,
    color:          done ? "var(--color-muted)" : "var(--color-ink)",
    fontFamily:     "var(--font-display)",
    transition:     "all 0.2s ease",
  };

  return (
    <div className="flex items-center gap-2 p-3 border-b">
      <span
        className={done ? 'line-through text-gray-400' : 'text-gray-900'}
      >
        {title}                       {/* {} escapes into JS */}
      </span>
      {done && (<span className="text-green-600 text-xs font-bold">Done</span>)}
      <button
        className="text-sm text-pink-500 hover:text-pink-700"
        onClick={onToggle}
      >
        {done ? "Undo" : "Mark Done"}
      </button>
    </div> 
)}

