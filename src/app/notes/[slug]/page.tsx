// Location: portfolio/src/app/notes/[slug]/page.tsx
// Name: page.tsx (update)

import { getNoteData, getAllNoteIds } from "@/lib/notes";
import { remark } from "remark";
import html from "remark-html";
import { format } from "date-fns";
import Link from "next/link";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";

export async function generateStaticParams() {
  const paths = getAllNoteIds();
  return paths.map((path) => ({
    slug: path.params.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const note = getNoteData(params.slug);
  return {
    title: `${note.title} | Your Name`,
    description: note.excerpt,
    openGraph: {
      title: note.title,
      description: note.excerpt,
      type: "article",
      publishedTime: note.date,
    },
  };
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export default async function Note({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const note = getNoteData(slug);
  const contentHtml = await markdownToHtml(note.content);

  return (
    <>
      <ReadingProgressBar />
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link
            href="/notes"
            className="text-primary-600 hover:text-primary-700"
          >
            ← Back to all notes
          </Link>
        </div>

        <article>
          <div className="mb-8">

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {format(new Date(note.date), "MMMM d, yyyy")}
            </p>
          </div>

          <div
            className="prose prose-gray dark:prose-invert max-w-none mb-10"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-10">
            <p className="text-gray-700 dark:text-gray-300">
              If you'd like to discuss this post, you can{" "}
              <a
                href="mailto:your.email@example.com"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-500"
              >
                email me
              </a>{" "}
              or find me on{" "}
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-500"
              >
                Twitter
              </a>
              .
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
