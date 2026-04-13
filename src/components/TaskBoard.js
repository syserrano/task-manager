'use client';

import { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

export default function TaskBoard() {
    const [tasks, setTasks] = useState(
        [{ id: 't1', title: 'Buy milk', done: false }, 
        { id: 't2', title: 'Walk the dog', done: true }]);

    function handleToggle(id){
        setTasks(tasks.map((t) => 
            t.id === id ? { ...t, done: !t.done } : t));
    }

    function handleDelete(id) {
        setTasks(tasks.filter((t) => t.id !== id));
    }

    const completedCount = tasks.filter((t) => t.done).length;
    const totalCount = tasks.length;

    return (
        <div className="max-w-md mx-auto mt-8">
            <p className="text-sm text-gray-500 mb-2">
                {completedCount} of {totalCount} tasks completed
            </p>
            <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
            <AddTaskForm onAdd={(title) => setTasks([...tasks, { id: `t${Date.now()}`, title, done: false }])} />
        </div>
    );
}
