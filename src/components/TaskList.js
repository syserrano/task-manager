'use client';

import TaskCard from "@/components/TaskCard";

export default function TaskList({ tasks, onToggle, onDelete }) {
    if (tasks.length === 0) {
        return <div style={{
                textAlign: 'center',
                padding: '48px 20px',
                color: '#c4a99a',
                fontFamily: "'Lora', serif",
                fontSize: '15px',
                fontStyle: 'italic',
                marginBottom: '16px',
            }}>
                Nothing here yet — add a task below.
            </div>
    }

    return (
        <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
        }}>
            {tasks.map((task) => (
                <li key={task.id}>
                    <TaskCard 
                    title={task.title} 
                    done={task.done} 
                    onToggle={() => onToggle(task.id)} 
                    onDelete={() => onDelete(task.id)} 
                    />
                </li>
            ))}
        </ul>
    );
}

