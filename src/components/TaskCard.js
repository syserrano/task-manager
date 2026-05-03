'use client';

export default function TaskCard({ title, done, onToggle, onDelete }) {

  return (
    <div className="flex items-center gap-2 p-3 border-b">
      <input
        type="checkbox"
        checked={done}
        onChange={onToggle}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span className={`flex-1 text-sm ${done ? 'line-through text-gray-500' : ''}`}>
        {title}
      </span>
      <button
        className="text-sm text-red-500 hover:text-red-700"
        onClick={onDelete}
      >
        Delete
      </button>
    </div> 
)}

