import TaskCard from '@/components/TaskCard';
import TaskList from '@/components/TaskList';
import TaskBoard from '@/components/TaskBoard';


<TaskBoard />

export default function HomePage() {
  return (
    <main className="relative z-10 min-h-screen px-4 py-12 max-w-2xl mx-auto">

      {/* Page header — purely decorative, rendered on the server */}
      <header className="mb-10 text-center border-b-2 pb-6" style={{ borderColor: "var(--color-ink)" }}>

        <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "var(--color-muted)" }}>
          Personal Record
        </p>
        <h1
          className="text-5xl font-bold mb-2 leading-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
        >
          Task Manager
        </h1>
        <p className="text-sm tracking-widest uppercase" style={{ color: "var(--color-muted)" }}>
          Task Register &amp; Progress Log
        </p>
      </header>

      <TaskBoard />

      <footer className="mt-12 text-center text-xs tracking-widest uppercase" style={{ color: "var(--color-border)" }}>
        Est. {new Date().getFullYear()} · Personal Edition
      </footer>
    </main>
  );
}

