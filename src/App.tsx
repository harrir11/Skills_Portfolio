import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
//import portrait from "./pixil-frame-0.png";

type Link = {
  label: string;
  text: string;
  href: string;
  download?: boolean;
};

type Point = string | { label: string; text: string; href?: string };

type Section = {
  title: string;
  href?: string;
  meta?: string;
  summary?: string;
  pointsHeading?: string;
  points?: Point[];
  stack: string[];
};

type Group = {
  heading: string;
  sections: Section[];
};

type Project = {
  id: string;
  label: string;
  summary: string | string[];
  stack: string[];
  links?: Link[];
  image?: { src: string; alt: string };
  sections?: Section[];
  groups?: Group[];
  content?: ReactNode;
};

const projects: Project[] = [
  {
    id: "welcome",
    label: "Welcome!",
    summary:
      "Hi! I’m Rebecca. I’m a coder and an artist. This is my playground for learning the most in-demand skills, as well as having fun. Let’s work together :)",
    stack: [],
    //image: { src: portrait, alt: "Pixel art portrait of Rebecca" },
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
      {
        label: "LinkedIn",
        text: "Rebecca Harris",
        href: "https://www.linkedin.com/in/rebecca-harris-846b711a7/",
      },
    ],
  },
  {
    id: "skills",
    label: "Skills",
    summary:
      "Fullstack engineer with production experience in Java, Python and JavaScript. I integrate APIs, automate business workflows and use AI-assisted tools to ship faster, working across teams in Agile.",
    stack: [],
    links: [
      {
        label: "Resume",
        text: "Download my resume (PDF)",
        href: "/Rebecca_Harris_Fullstack_Resume_11_2026.pdf",
        download: true,
      },
    ],
    groups: [
      {
        heading: "Toolkit",
        sections: [
          {
            title: "Languages & Frameworks",
            stack: [
              "Java",
              "Python",
              "JavaScript",
              "SQL",
              "R",
              "Spring Boot",
              "Flask",
              "Pandas",
              "Ruby on Rails",
            ],
          },
          {
            title: "Cloud & Systems",
            stack: [
              "AWS (S3, EC2, Lambda)",
              "Google Cloud",
              "REST API design",
              "Distributed systems",
              "Event-driven architecture",
            ],
          },
          {
            title: "AI Tools",
            stack: ["Claude", "Copilot", "AI prompting"],
          },
          {
            title: "Payments",
            stack: ["Stripe", "Apple Pay", "Google Pay"],
          },
          {
            title: "Data & Reporting",
            stack: [
              "ETL/ELT",
              "Metadata standards",
              "Cataloging automation",
              "Tableau/BI",
              "Dashboards",
              "A/B testing",
              "Excel",
              "PowerPoint",
            ],
          },
          {
            title: "Monitoring & Testing",
            stack: [
              "JMeter",
              "Splunk",
              "Performance benchmarking",
              "Observability & alerting",
            ],
          },
          {
            title: "Governance & Risk",
            stack: ["Compliance workflows", "Audit readiness", "Issue management"],
          },
          {
            title: "Ways of Working",
            stack: [
              "Agile/Scrum",
              "Requirement gathering",
              "Cross-functional collaboration",
              "Documentation",
              "Mentoring",
              "ClickUp",
            ],
          },
        ],
      },
      {
        heading: "Experience",
        sections: [
          {
            title: "UX Product Owner \u00b7 Voxxy",
            href: "https://www.voxxypresents.com/artists",
            meta: "New York Metropolitan Area \u00b7 Jul 2026 \u2013 Present",
            points: [
              "Interview independent artists and stakeholders to gather requirements and shape product decisions.",
              "Turn backlog ideas into sprint-ready user stories in ClickUp, with acceptance criteria and priorities, through refinement sessions with engineers.",
              "Researched payment options (Stripe, Apple Pay, Google Pay and Authorize.net) for early implementation.",
            ],
            stack: [],
          },
          {
            title: "Full Stack Developer \u00b7 Prudential Financial",
            meta: "Newark, NJ \u00b7 Jan 2026 \u2013 Jun 2026",
            points: [
              "Built and maintained production apps with JavaScript front ends and Python back-end services.",
              "Built cloud workflows on AWS with event-driven architecture, integrating APIs and backend processes to automate structured settlement operations.",
              "Sped up development and UI work with AI-assisted coding tools, including Claude.",
            ],
            stack: [],
          },
          {
            title: "Rotational Associate \u00b7 Prudential Financial",
            meta: "Newark, NJ \u00b7 2023 \u2013 2025",
            points: [
              {
                label: "Data Governance Engineer",
                text: "Built Python ingestion pipelines for financial datasets and boosted cataloging productivity 7\u00d7 through automation and metadata standards. Contributed to BI reporting whose insights correlated with an 8% quarter-over-quarter operating income lift.",
              },
              {
                label: "Security Development Engineer",
                text: "Built consistent authN/authZ patterns for global APIs across Japan and Brazil, benchmarked performance with JMeter and Splunk, and contributed to multi-region compliance architecture, including auditability and PII handling.",
              },
              {
                label: "Lead Management & CRM Engineer",
                text: "Designed and deployed a Spring Boot microservice integrating enterprise lead sources; its automated handoffs raised sales 18% per quarter. Improved REST API reliability through observability, instrumentation and alerting.",
              },
            ],
            stack: [],
          },
          {
            title: "Global Tech Intern \u00b7 Prudential Financial",
            meta: "Newark, NJ \u00b7 Jun 2022 \u2013 Aug 2022",
            points: [
              "Wrote testing scripts, helped debug backend services and documented coding standards and quality practices.",
            ],
            stack: [],
          },
        ],
      },
      {
        heading: "Education",
        sections: [
          {
            title: "B.S. Computer Science \u00b7 The College of New Jersey",
            meta: "Graduated May 2023",
            stack: [],
          },
        ],
      },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    summary: [
      "My background as a software developer has taught me the fundamentals of coding, agile development, API integration, cloud workflows on AWS, data pipelines and testing. As the tech world pivots to AI development, I've aimed to cover new AI skills through independent projects"
    ],
    stack: [],
    sections: [
      {
        title: "Library of Alexandria",
        href: "https://github.com/harrir11/Library_of_Alexandria",
        summary: "RAG interactive game based on Gemini Notebook. You're starting your first day as an intern at the Library of Alexandra. Unfortunately, it's currently burning. Your boss won't let you leave until you finish some write ups for him. You must explore the library to collect the right sources for your LLM to generate a thoughtful, balanced take. Your boss will review it with his LLM (he's too tired to read). Collect enough sources, escape with your life!",
        stack: ["LLM", "RAG"],
      }
    ],
  },
  {
    id: "open-source",
    label: "Open Source Contributions",
    summary: [],
    stack: [],
    sections: [
      {
        title: "Green AI",
        summary:
          "As the AI Revolution expands, there is growing discourse about its impact on jobs and the environment. As an engineer (and a human on planet Earth), I wanted to learn about green AI. Through our work, we can reduce our environmental impact and build skills for an AI future.",
        pointsHeading: "Currently Working On",
        points: [
          {
            label: "Kepler",
            href: "https://github.com/sustainable-computing-io/kepler",
            text: "Sustainable computing using Go and Kubernetes.",
          },
          {
            label: "EcoLogits",
            href: "https://github.com/mlco2/ecologits",
            text: "EcoLogits tracks the energy consumption and environmental impacts of using generative AI models through APIs.",
          },
          {
            label: "Ethical Tech Collab",
            href: "https://ethical-tech-colab.github.io/website/",
            text: "A series of open source projects developed by NYU CGA in collaboration with Microsoft.",
          },
        ],
        stack: [],
      },
    ],
  },
  {
    id: "voxxy",
    label: "Voxxy",
    summary:
      "Voxxy is an event management and networking app for the art world. I currently work as a Product Owner researching payment streams. Whether you\u2019re a professional artist, art producer or just an art appreciator: we\u2019ll take you!!",
    stack: [],
    links: [
      {
        label: "Waiting list",
        text: "voxxypresents.com/artists",
        href: "https://www.voxxypresents.com/artists",
      },
    ],
  },
  {
    id: "blog",
    label: "Blog",
    summary: "My Substack is coming soon.",
    stack: [],
  },
  {
    id: "sources",
    label: "Sources",
    summary:
      "This website was made using Claude. The pixel art and design choices were human-made.",
    stack: [],
    content: (
      <p>
        Fonts were sourced from Google Fonts:{" "}
        <a href="https://fonts.google.com/specimen/VT323" target="_blank" rel="noreferrer">
          VT323
        </a>{" "}
        for the pixel headings and{" "}
        <a href="https://fonts.google.com/specimen/Figtree" target="_blank" rel="noreferrer">
          Figtree
        </a>{" "}
        for the body text.
      </p>
    ),
  },
];

function SectionBlock({
  section,
  level,
}: {
  section: Section;
  level: "h3" | "h4";
}) {
  const Heading = level;
  const [open, setOpen] = useState(false);
  const hasMore = Boolean(section.points && section.points.length > 0);
  return (
    <div className="section">
      <Heading>
        {section.href ? (
          <a href={section.href} target="_blank" rel="noreferrer">
            {section.title}
          </a>
        ) : (
          section.title
        )}
      </Heading>
      {section.meta && <p className="meta">{section.meta}</p>}
      {section.summary && <p>{section.summary}</p>}
      {hasMore && (
        <button
          type="button"
          className="toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          style={{
            background: "none",
            border: "none",
            color: "inherit",
            font: "inherit",
            padding: 0,
            margin: "0 0 12px",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          {open ? "See less" : "See more"}
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              transition: "transform 0.2s",
              transform: open ? "rotate(180deg)" : "none",
            }}
          >
            ▾
          </span>
        </button>
      )}
      {open && (
        <>
          {section.pointsHeading && (
            <p className="points-heading">{section.pointsHeading}</p>
          )}
          {section.points && (
            <ul className="points">
              {section.points.map((point) =>
                typeof point === "string" ? (
                  <li key={point}>{point}</li>
                ) : (
                  <li key={point.label}>
                    <strong>
                      {point.href ? (
                        <a href={point.href} target="_blank" rel="noreferrer">
                          {point.label}
                        </a>
                      ) : (
                        point.label
                      )}
                      :
                    </strong>{" "}
                    {point.text}
                  </li>
                )
              )}
            </ul>
          )}
        </>
      )}
      {section.stack.length > 0 && (
        <ul className="stack">
          {section.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const COLLAPSIBLE_GROUPS = ["Toolkit", "Experience"];

function GroupBlock({ group }: { group: Group }) {
  const collapsible = COLLAPSIBLE_GROUPS.includes(group.heading);
  const [open, setOpen] = useState(false);
  const showSections = !collapsible || open;
  return (
    <div className="group">
      <h3>{group.heading}</h3>
      {collapsible && (
        <button
          type="button"
          className="toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          style={{
            background: "none",
            border: "none",
            color: "inherit",
            font: "inherit",
            padding: 0,
            margin: "12px 0 0",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          {open ? "See less" : "See more"}
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              transition: "transform 0.2s",
              transform: open ? "rotate(180deg)" : "none",
            }}
          >
            ▾
          </span>
        </button>
      )}
      {showSections &&
        group.sections.map((section) => (
          <SectionBlock key={section.title} section={section} level="h4" />
        ))}
    </div>
  );
}

function ProjectContent({ project }: { project: Project }) {
  return (
    <div className={project.image ? "intro" : undefined}>
      {project.image && (
        <figure style={{ margin: 0, flexShrink: 0 }}>
          <img
            className="portrait"
            src={project.image.src}
            alt={project.image.alt}
          />
          <figcaption style={{ fontSize: "0.75rem", opacity: 0.7, marginTop: 4 }}>
            Made by hand with{" "}
            <a href="https://www.pixilart.com/" target="_blank" rel="noreferrer">
              pixilart.com
            </a>
          </figcaption>
        </figure>
      )}
      <div className="text">
        <h2>{project.label}</h2>
        {(Array.isArray(project.summary)
          ? project.summary
          : [project.summary]
        ).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {project.content}
        {project.links && (
          <ul className="links">
            {project.links.map((l) => (
              <li key={l.label}>
                {l.label}:{" "}
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  download={l.download || undefined}
                >
                  {l.text}
                </a>
              </li>
            ))}
          </ul>
        )}
        {project.stack.length > 0 && (
          <ul className="stack">
            {project.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        )}
        {project.sections?.map((section) => (
          <SectionBlock key={section.title} section={section} level="h3" />
        ))}
        {project.groups?.map((group) => (
          <GroupBlock key={group.heading} group={group} />
        ))}
      </div>
    </div>
  );
}

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function App() {
  const [active, setActive] = useState<string>(projects[0].id);
  const [indicator, setIndicator] = useState({ x: 0, y: 0, w: 0, h: 0 });
  const [animate, setAnimate] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  // While a clicked scroll is in progress, don't let scroll-spy override the clicked tab
  const lockUntil = useRef(0);

  // Scroll-spy: highlight the section currently under the sticky menu
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (Date.now() < lockUntil.current) return;
      const line = (navRef.current?.getBoundingClientRect().bottom ?? 0) + 48;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      let current = projects[0].id;
      if (atBottom) {
        current = projects[projects.length - 1].id;
      } else {
        for (const p of projects) {
          const el = document.getElementById(p.id);
          if (el && el.getBoundingClientRect().top <= line) current = p.id;
        }
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onScrollEnd = () => {
      lockUntil.current = 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", onScrollEnd);
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Measure the active tab so the outlined rectangle can glide to it
  useLayoutEffect(() => {
    const measure = () => {
      const tab = tabRefs.current[active];
      if (tab) {
        setIndicator({
          x: tab.offsetLeft,
          y: tab.offsetTop,
          w: tab.offsetWidth,
          h: tab.offsetHeight,
        });
      }
    };
    measure();
    const nav = navRef.current;
    const ro = new ResizeObserver(measure);
    if (nav) ro.observe(nav);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [active]);

  // Turn on the glide only after the first measurement (no slide-in on page load)
  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const goTo = (id: string, smooth = true) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = navRef.current?.offsetHeight ?? 0;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    lockUntil.current = Date.now() + 1200;
    setActive(id);
    history.replaceState(null, "", `#${id}`);
    window.scrollTo({
      top,
      behavior: smooth && !prefersReducedMotion() ? "smooth" : "auto",
    });
  };

  // Support links like /#voxxy
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (projects.some((p) => p.id === id)) goTo(id, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="page">
      <h1>R.M. Harris</h1>

      <nav className="tabs" ref={navRef} aria-label="Sections">
        <span
          className={animate ? "tab-indicator animate" : "tab-indicator"}
          aria-hidden="true"
          style={{
            transform: `translate(${indicator.x}px, ${indicator.y}px)`,
            width: indicator.w,
            height: indicator.h,
          }}
        />
        {projects.map((p) => (
          <button
            key={p.id}
            ref={(el) => {
              tabRefs.current[p.id] = el;
            }}
            id={`tab-${p.id}`}
            aria-current={p.id === active ? "true" : undefined}
            className={p.id === active ? "tab active" : "tab"}
            onClick={() => goTo(p.id)}
          >
            {p.label}
          </button>
        ))}
      </nav>

      {projects.map((project) => (
        <section key={project.id} id={project.id} className="panel">
          <ProjectContent project={project} />
        </section>
      ))}
    </main>
  );
}
