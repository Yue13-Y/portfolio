// Location: portfolio/src/app/page.tsx
// Name: page.tsx (update)

import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import { getAllNotes } from "@/lib/notes";
import { format } from "date-fns";

export default function Home() {
  const projects = getAllProjects().slice(0, 2); // Get 2 most recent projects
  const notes = getAllNotes().slice(0, 2); // Get 2 most recent notes

  return (
    <div className="max-w-3xl mx-auto">
      <section className="py-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
          Hello, I'm Paul.
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          I explore ideas through building software and writing about
          technology. This is where I document my projects and share my
          thoughts.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded"
          >
            View Projects
          </Link>
          <Link
            href="/notes"
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded"
          >
            Read Notes
          </Link>
        </div>
      </section>

      <section className="py-8 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Recent Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.excerpt}
              </p>
              <Link
                href={`/projects/${project.slug}`}
                className="text-primary-600 hover:text-primary-700 dark:text-primary-500"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Recent Notes
        </h2>
        <div className="space-y-6">
          {notes.map((note) => (
            <div
              key={note.id}
              className="border-b border-gray-100 dark:border-gray-800 pb-6"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {format(new Date(note.date), "MMMM d, yyyy")}
              </p>
              <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {note.excerpt}
              </p>
              <Link
                href={`/notes/${note.id}`}
                className="text-primary-600 hover:text-primary-700 dark:text-primary-500"
              >
                Continue reading →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
