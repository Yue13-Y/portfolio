import { getProjectData, getAllProjectIds } from "@/lib/projects";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

export async function generateStaticParams() {
  const paths = getAllProjectIds();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  // Add await for params
  const resolvedParams = await params;
  const project = getProjectData(resolvedParams.slug);

  return {
    title: `${project.title} | Your Name`,
    description: project.excerpt,
    openGraph: {
      title: project.title,
      description: project.excerpt,
      type: "article",
    },
  };
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  // Add await for params
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const project = getProjectData(slug);
  const contentHtml = await markdownToHtml(project.content);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <Link
          href="/projects"
          className="text-primary-600 hover:text-primary-700 dark:text-primary-500"
        >
          ← Back to all projects
        </Link>
      </div>

      <article>
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs px-2 py-1 rounded">
              {project.status}
            </span>
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300">
            {project.excerpt}
          </p>
        </header>

        <div
          className="prose prose-gray dark:prose-invert max-w-none mb-10"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}
