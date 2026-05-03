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
                    style={{
                        padding: '6px 18px',
                        borderRadius: '7px',
                        border: 'none',
                        fontSize: '13px',
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: currentFilter === id ? 500 : 400,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        background: currentFilter === id ? '#fff' : 'transparent',
                        color: currentFilter === id ? '#3d2c1e' : '#b08070',
                        boxShadow: currentFilter === id ? '0 1px 4px rgba(93,45,10,0.1)' : 'none',
                    }}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}
