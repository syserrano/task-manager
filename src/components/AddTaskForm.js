'use client';

import { useState } from 'react';

export default function AddTaskForm({ onAdd }) {
    const [title, setTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!title.trim() === "") return; // Prevent adding empty tasks
        onAdd(title.trim());
        setTitle(""); // Clear the input after adding
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                value = {title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='New Task...'
                className='flex-1 border rounded px-3 py-2 text-sm'
            />
            <button 
                type='submit' 
                className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                Add
            </button>
        </form>
    );
}
