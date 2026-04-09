import TaskCard from '@/components/TaskCard';
import TaskList from '@/components/TaskList';

const tasks = [
  { id: 1, title: 'Read the docs', done: false },
  { id: 2, title: 'Build TaskList', done: true },
  { id: 3, title: 'Add empty state', done: false },
];

<TaskList tasks={tasks} />

export default function HomePage() {
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-xl font-bold mb-4">My Tasks</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}
