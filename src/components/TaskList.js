import TaskCard from "@/components/TaskCard";

export default function TaskList({ tasks }) {
    if (tasks.length === 0) {
        return <p className="text-gray-500">No tasks found.</p>;
    }
    return (
        <ul className="divide-y">
            {tasks.map((task) => (
                <li key={task.id}>
                    <TaskCard title={task.title} done={task.done} />
                </li>
            ))}
        </ul>
    );
}
