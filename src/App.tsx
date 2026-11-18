import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import portrait from "./pixil-frame-0.png";

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
  image?: { src: string; alt: string };
};

const projects: Project[] = [
  {
    id: "welcome",
    label: "Welcome!",
    summary:
      "Hi! I’m Rebecca. I’m a coder and an artist. This is my playground for learning the most in-demand skills, as well as having fun. Let me know if you want to work together :)",
    stack: [],
    image: { src: portrait, alt: "Pixel art portrait of Rebecca" },
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

  const textRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState(0);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const update = () => setTextHeight(el.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [current.id]);

  const select = (id: string) => {
    setActive(id);
    window.location.hash = id;
  };

  return (
    <main className="page">
      <h1>Rebecca Harris</h1>

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
        <div
          className={current.image ? "intro" : undefined}
          style={{ "--text-height": `${textHeight}px` } as CSSProperties}
        >
          {current.image && (
            <img
              className="portrait"
              src={current.image.src}
              alt={current.image.alt}
            />
          )}
          <div className="text" ref={textRef}>
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
          </div>
        </div>
      </section>
    </main>
  );
}
