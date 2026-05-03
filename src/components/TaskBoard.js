'use client';

import { useState, useEffect, use} from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import FilterBar from './FilterBar';

export default function TaskBoard() {
    const [mounted, setMounted] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const saved = localStorage.getItem('tasks');
        if (saved) setTasks(JSON.parse(saved));
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks, mounted]);


    useEffect(() => {
        const activeCount = tasks.filter((t) => !t.done).length;
        document.title = `Task Manager (${activeCount} active)`;
        return () => {
            document.title = 'Task Manager';
        };
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
    const progress = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    const visibleTasks = tasks.filter((t) => {
        if (filter === 'active') return !t.done;
        if (filter === 'completed') return t.done;
        return true; // 'all'
    });

    if (!mounted) return null;


    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&family=DM+Sans:wght@400;500&display=swap"
                rel="stylesheet"
            />
            <div style={{
                minHeight: '100vh',
                background: '#fdf6f0',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: '56px 16px',
            }}>
                <div style={{ width: '100%', maxWidth: '460px' }}>

                    {/* Header */}
                    <div style={{ marginBottom: '32px' }}>
                        <p style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: '12px',
                            fontWeight: 500,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#c4956a',
                            marginBottom: '6px',
                        }}>
                            Your workspace
                        </p>
                        <h1 style={{
                            fontFamily: "'Lora', serif",
                            fontSize: '32px',
                            fontWeight: 600,
                            color: '#3d2c1e',
                            margin: '0 0 16px',
                            letterSpacing: '-0.5px',
                        }}>
                            My Tasks
                        </h1>

                        {/* Progress row */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '10px',
                        }}>
                            <div style={{
                                flex: 1,
                                height: '6px',
                                background: '#f0ddd2',
                                borderRadius: '999px',
                                overflow: 'hidden',
                            }}>
                                <div style={{
                                    height: '100%',
                                    width: `${progress}%`,
                                    background: '#e07a5f',
                                    borderRadius: '999px',
                                    transition: 'width 0.5s ease',
                                }} />
                            </div>
                            <span style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: '12px',
                                color: '#b08070',
                                whiteSpace: 'nowrap',
                            }}>
                                {completedCount} of {totalCount} done
                            </span>
                        </div>
                    </div>

                    <FilterBar currentFilter={filter} onChange={setFilter} />
                    <TaskList tasks={visibleTasks} onToggle={handleToggle} onDelete={handleDelete} />
                    <AddTaskForm onAdd={handleAdd} />
                </div>
            </div>
        </>
    );
}
