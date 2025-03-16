// Location: portfolio/src/app/notes/page.tsx
// Name: page.tsx (update)

import Link from "next/link";
import { getAllNotes } from "@/lib/notes";
import { format } from "date-fns";


export default function Notes() {
  const notes = getAllNotes();

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-8">
        Notes & Thoughts
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        A collection of observations, learnings, and occasional analyses on
        technology and building products.
      </p>



      <div className="space-y-10">
        {notes.map((note) => (
          <article
            key={note.id}
            className="border-b border-gray-100 dark:border-gray-800 pb-8"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              {format(new Date(note.date), "MMMM d, yyyy")}
            </p>
            <h2 className="text-2xl font-bold mb-3">
              <Link
                href={`/notes/${note.id}`}
                className="text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-500"
              >
                {note.title}
              </Link>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {note.excerpt}
            </p>
            <Link
              href={`/notes/${note.id}`}
              className="text-primary-600 hover:text-primary-700 dark:text-primary-500"
            >
              Continue reading →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
