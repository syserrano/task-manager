'use client';

const filters = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' },
];

export default function FilterBar({ currentFilter, onChange }) {
    return (
        <div className="flex gap-4 mb-4">
            {filters.map(( {id, label}) => (
                <button
                    key={id}
                    onClick={() => onChange(id)}
                    className={`px-3 py-1 rounded text-sm ${
                        currentFilter === id
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}
