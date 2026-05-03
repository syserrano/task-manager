'use client';

import { useState, useEffect, use} from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import FilterBar from './FilterBar';

export default function TaskBoard() {
    const [tasks, setTasks] = useState(() => {
        if (typeof window === 'undefined') return[]
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : [];
    });
    
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const activeCount = tasks.filter((t) => !t.done).length;
        document.title = `Task Manager (${activeCount} active)`;
        return () => {
            document.title = 'Task Manager';
        }
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function handleAdd(title) {
        const newTask = { id: `t${Date.now()}`, title, done: false };
        setTasks([...tasks, newTask]);
    }

    function handleToggle(id){
        setTasks(tasks.map((t) => 
            t.id === id ? { ...t, done: !t.done } : t));
    }

    function handleDelete(id) {
        setTasks(tasks.filter((t) => t.id !== id));
    }

    const completedCount = tasks.filter((t) => t.done).length;
    const totalCount = tasks.length;

    const visibleTasks = tasks.filter((t) => {
        if (filter === 'active') return !t.done;
        if (filter === 'completed') return t.done;
        return true; // 'all'
    });

    return (
        <div className="max-w-md mx-auto mt-8">
            <p className="text-sm text-gray-500 mb-2">
                {completedCount} of {totalCount} tasks completed
            </p>
            <FilterBar currentFilter={filter} onChange={setFilter} />
            <TaskList tasks={visibleTasks} onToggle={handleToggle} onDelete={handleDelete} />
            <AddTaskForm onAdd={handleAdd} />
        </div>
    );
}
