// Location: portfolio/src/app/about/page.tsx
// Name: page.tsx

import ContactForm from "@/components/ContactForm";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-8">
        About Me
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
            <p className="text-lg leading-relaxed">
              Hi, I'm <span className="font-medium">Paul</span>. I build things
              and write about technology, business, and whatever else catches my
              interest. This site is where I document projects I'm working on
              and share observations.
            </p>

            <p className="text-base leading-relaxed">
              While my background includes some software development (I've
              interned as a developer), I'm more focused on exploring ideas and
              turning them into viable products. I'm fascinated by the
              <span className="italic">
                {" "}
                intersection of technology and practical problem-solving
              </span>
              .
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-800 dark:text-gray-200">
              Current Projects
            </h2>
            <p>
              I'm currently building an{" "}
              <span className="text-primary-600 dark:text-primary-400">
                online gifting platform
              </span>{" "}
              and a
              <span className="text-primary-600 dark:text-primary-400">
                {" "}
                digital IP marketplace
              </span>
              . Both are in MVP stages and represent problems I found
              interesting enough to try solving.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-800 dark:text-gray-200">
              Interests
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Product development and strategy</li>
              <li>Technology trends and implementation</li>
              <li>History, finance, and films</li>
              <li>Writing and analysis</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-800 dark:text-gray-200">
              My Approach
            </h2>
            <p>
              I believe in <span className="font-medium">starting small</span>,{" "}
              <span className="font-medium">learning through building</span>,
              and being
              <span className="font-medium"> honest about the process</span>.
              I'm not an expert in anything particular—just someone exploring
              ideas and sharing the journey.
            </p>
          </div>
        </div>

        <div className="md:col-span-1">
          <ContactForm />

          <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 dark:text-gray-100">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="https://github.com/Yue13-Y"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>

              <a
                href="mailto:yue13.yzz@gmail.com"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
