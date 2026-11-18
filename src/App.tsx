import { useEffect, useState } from "react";

type Project = {
  id: string;
  label: string;
  summary: string;
  stack: string[];
};

const projects: Project[] = [
  {
    id: "docker-kubernetes",
    label: "Docker and Kubernetes Project",
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
    id: "fun",
    label: "Fun Projects",
    summary: "Project write-ups coming soon.",
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
