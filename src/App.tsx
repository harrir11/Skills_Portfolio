import { useEffect, useState } from "react";

type Link = {
  label: string;
  text: string;
  href: string;
};

type Project = {
  id: string;
  label: string;
  summary: string;
  stack: string[];
  links?: Link[];
};

const projects: Project[] = [
  {
    id: "welcome",
    label: "Welcome!",
    summary:
      "Hi! I’m Rebecca. I’m a coder and an artist. This is my playground for learning the most in-demand skills, as well as having fun. Let me know if you want to work together :)",
    stack: [],
    links: [
      {
        label: "Email",
        text: "rebecca.mare.harris@gmail.com",
        href: "mailto:rebecca.mare.harris@gmail.com",
      },
      {
        label: "GitHub",
        text: "harrir11",
        href: "https://github.com/harrir11",
      },
    ],
  },
  {
    id: "container-fun",
    label: "Container Fun",
    summary: "Project write-up coming soon.",
    stack: ["Docker", "Kubernetes"],
  },
  {
    id: "llm-rag",
    label: "LLM/RAG Project",
    summary: "Project write-up coming soon.",
    stack: ["LLM", "RAG"],
  },
  {
    id: "go",
    label: "Go project",
    summary: "Project write-up coming soon.",
    stack: ["Go"],
  },
  {
    id: "open-source",
    label: "Open Source Contributions",
    summary: "Contributions coming soon.",
    stack: [],
  },
  {
    id: "creative-tools",
    label: "Creative Tools",
    summary: "Video editing, Adobe and other creative work coming soon.",
    stack: ["Video editing", "Adobe"],
  },
  {
    id: "wack",
    label: "Wack",
    summary: "Miscellaneous fun designs coming soon.",
    stack: [],
  },
];

function tabFromHash(): string {
  const hash = window.location.hash.slice(1);
  return projects.some((p) => p.id === hash) ? hash : projects[0].id;
}

export default function App() {
  const [active, setActive] = useState<string>(tabFromHash);

  useEffect(() => {
    const onHashChange = () => setActive(tabFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const current = projects.find((p) => p.id === active) ?? projects[0];

  const select = (id: string) => {
    setActive(id);
    window.location.hash = id;
  };

  return (
    <main className="page">
      <h1>Skills Portfolio</h1>

      <nav className="tabs" role="tablist" aria-label="Projects">
        {projects.map((p) => (
          <button
            key={p.id}
            role="tab"
            id={`tab-${p.id}`}
            aria-selected={p.id === current.id}
            aria-controls={`panel-${p.id}`}
            className={p.id === current.id ? "tab active" : "tab"}
            onClick={() => select(p.id)}
          >
            {p.label}
          </button>
        ))}
      </nav>

      <section
        className="panel"
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
      >
        <h2>{current.label}</h2>
        <p>{current.summary}</p>
        {current.links && (
          <ul className="links">
            {current.links.map((l) => (
              <li key={l.label}>
                {l.label}:{" "}
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.text}
                </a>
              </li>
            ))}
          </ul>
        )}
        {current.stack.length > 0 && (
          <ul className="stack">
            {current.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
