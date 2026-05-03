'use client';

import { useState } from 'react';

export default function AddTaskForm({ onAdd }) {
    const [title, setTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (title.trim() === "") return; // Prevent adding empty tasks
        onAdd(title.trim());
        setTitle(""); // Clear the input after adding
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                value = {title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='New Task...'
                style={{
                    flex: 1,
                    padding: '12px 16px',
                    fontSize: '14px',
                    fontFamily: "'DM Sans', sans-serif",
                    background: '#fff',
                    border: '1px solid #f0ddd2',
                    borderRadius: '12px',
                    outline: 'none',
                    color: '#3d2c1e',
                    transition: 'border-color 0.2s',
                }}
            />
            <button 
                type='submit' 
                style={{
                    padding: '12px 16px',
                    fontSize: '14px',
                    fontFamily: "'DM Sans', sans-serif",
                    background: '#3d2c1e',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                }}
                className='hover:bg-blue-600'>
                Add
            </button>
        </form>
    );
}
