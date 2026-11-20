import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import portrait from "./pixil-frame-0.png";

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
};

const projects: Project[] = [
  {
    id: "welcome",
    label: "Welcome!",
    summary:
      "Hi! I’m Rebecca. I’m a coder and an artist. This is my playground for learning the most in-demand skills, as well as having fun. Let’s work together :)",
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
      "My background as a software developer has taught me the fundamentals of coding, agile development, API integration, cloud workflows on AWS, data pipelines and testing.",
      "Now that we live in the AI Revolution, I\u2019ve been combining my past experience with new skills to pivot into AI engineering. I\u2019m also using projects to expand my knowledge in DevOps tools like Docker and Kubernetes. I\u2019m looking to contribute to open-source green AI projects.",
    ],
    stack: [],
    sections: [
      {
        title: "Container Fun",
        summary: "Project write-up coming soon.",
        stack: ["Docker", "Kubernetes"],
      },
      {
        title: "LLM/RAG Project",
        summary: "Project write-up coming soon.",
        stack: ["LLM", "RAG"],
      },
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
];

function tabFromHash(): string {
  const hash = window.location.hash.slice(1);
  return projects.some((p) => p.id === hash) ? hash : projects[0].id;
}

function SectionBlock({
  section,
  level,
}: {
  section: Section;
  level: "h3" | "h4";
}) {
  const Heading = level;
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

export default function App() {
  const [active, setActive] = useState<string>(tabFromHash);

  useEffect(() => {
    const onHashChange = () => setActive(tabFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const current = projects.find((p) => p.id === active) ?? projects[0];

  const select = (id: string) => {
    const update = () => {
      flushSync(() => setActive(id));
      window.location.hash = id;
    };
    // Glide the active-tab rectangle with a view transition when supported
    const start = (
      document as unknown as {
        startViewTransition?: (cb: () => void) => unknown;
      }
    ).startViewTransition;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (start && !reduceMotion) {
      start.call(document, update);
    } else {
      update();
    }
  };

  return (
    <main className="page">
      <h1>R.M. Harris</h1>

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
        <div className={current.image ? "intro" : undefined}>
          {current.image && (
            <figure style={{ margin: 0, flexShrink: 0 }}>
              <img
                className="portrait"
                src={current.image.src}
                alt={current.image.alt}
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
            <h2>{current.label}</h2>
            {(Array.isArray(current.summary)
              ? current.summary
              : [current.summary]
            ).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {current.links && (
              <ul className="links">
                {current.links.map((l) => (
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
            {current.stack.length > 0 && (
              <ul className="stack">
                {current.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            )}
            {current.sections?.map((section) => (
              <SectionBlock key={section.title} section={section} level="h3" />
            ))}
            {current.groups?.map((group) => (
              <div className="group" key={group.heading}>
                <h3>{group.heading}</h3>
                {group.sections.map((section) => (
                  <SectionBlock
                    key={section.title}
                    section={section}
                    level="h4"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
