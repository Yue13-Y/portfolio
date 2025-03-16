// Location: ./src/app/projects/page.tsx
// Name: page.tsx

import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default function Projects() {
  const projects = getAllProjects();

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-8">
        Projects
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        These are ideas I'm exploring through building. Some are in early
        stages, others are more developed.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="border-b border-gray-200 dark:border-gray-700 pb-10"
          >
            <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">
              {project.title}
            </h2>

            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs px-2 py-1 rounded">
                {project.status}
              </span>
              {project.technologies &&
                project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded ml-2"
                  >
                    {tech}
                  </span>
                ))}
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.excerpt}
            </p>

            <Link
              href={`/projects/${project.slug}`}
              className="text-primary-600 hover:text-primary-700 dark:text-primary-500 font-medium"
            >
              Read more about this project →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
