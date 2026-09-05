import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";

type Skill = {
  title: string;
  summary: string;
  technologies: string[];
  projects: string[];
  caseStudy?: {
    title: string;
    overview: string;
    decisions: { title: string; description: string }[];
    code?: { filename: string; caption: string; content: string };
  };
};

const skills: Record<string, Skill> = {
  java: {
    title: "Java Development",
    summary:
      "I use Java to create requirement-driven applications, automated tests, and secure software components.",
    technologies: ["Java", "JUnit", "Spring Boot", "SHA-256"],
    projects: [
      "Secure Software Refactoring",
    ],
    caseStudy: {
      title: "Appointment Service — Software Testing and Quality Assurance",
      overview:
        "For my CS 320 coursework, I built an in-memory appointment service in Java and wrote JUnit tests for its validation and service behavior. The project translates appointment requirements into explicit checks and tests for both successful operations and rejected inputs.",
      decisions: [
        {
          title: "Validation in the model",
          description:
            "Appointment validates IDs of up to 10 characters, descriptions of up to 50 characters, and dates that are not in the past. Null values are rejected. Description and date setters repeat their validation so updates follow the same rules as construction.",
        },
        {
          title: "Separate service responsibilities",
          description:
            "AppointmentService stores appointments in a HashMap keyed by ID. It rejects null appointments and duplicate IDs on insertion, and rejects null or unknown IDs on deletion. The appointment ID is final and has no setter.",
        },
        {
          title: "19 JUnit test methods",
          description:
            "AppointmentTest contains 13 tests for construction, getters, and updates. AppointmentServiceTest adds six tests for successful insertion and deletion, duplicate IDs, null inputs, and missing IDs. Assertions check values, expected exceptions, and operations that should complete without throwing.",
        },
        {
          title: "Further improvements",
          description:
            "Next steps include testing the exact 10- and 50-character limits and verifying stored state after service operations. Defensive copies of mutable Date values would prevent callers from changing a date outside the validation methods; a controllable clock would make time-based tests more predictable.",
        },
      ],
      code: {
        filename: "AppointmentServiceTest.java",
        caption:
          "This test adds one appointment, then verifies that adding another with the same ID throws an IllegalArgumentException. The helper supplies a date one day in the future.",
        content: `@Test
public void testAddDuplicateAppointmentIdThrowsException() {
    AppointmentService service = new AppointmentService();
    Appointment appointment1 = new Appointment("A123", "Doctor visit", futureDate());
    Appointment appointment2 = new Appointment("A123", "Meeting", futureDate());

    service.addAppointment(appointment1);

    assertThrows(IllegalArgumentException.class, () -> {
        service.addAppointment(appointment2);
    });
}`,
      },
    },
  },

  python: {
    title: "Python and Data Analysis",
    summary:
      "I use Python to process data, perform statistical analysis, create visualizations, and communicate evidence-based conclusions.",
    technologies: ["Python", "pandas", "SciPy", "Jupyter"],
    projects: [
      "NBA Performance Analysis",
      "Regression Analysis",
      "Statistical Hypothesis Testing",
    ],
  },

  "web-development": {
    title: "Web Development",
    summary:
      "I build responsive interfaces with reusable components, typed data, modern routing, and version-controlled development workflows.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    projects: [
      "FlightPath Military Career Platform",
    ],
    caseStudy: {
      title: "Matthew Cope Portfolio",
      overview:
        "I built this portfolio to help prospective employers explore my software projects, technical skills, and Air Force experience in one place. Visitors can move from project summaries to related skill pages, visit my GitHub profile, and download my résumé.",
      decisions: [
        {
          title: "Reusable components",
          description:
            "Shared navigation, project cards, skill cards, and a contact footer keep the interface consistent. Updating a shared component carries the change through to every page that uses it.",
        },
        {
          title: "Typed content and routing",
          description:
            "TypeScript defines the information each card needs. Java, Python, and web development pages share a dynamic route backed by typed skill data, with static route parameters and a not-found response for unknown skills.",
        },
        {
          title: "Responsive navigation",
          description:
            "Tailwind CSS arranges navigation links in two columns on narrow screens and a single row on larger screens. Keeping the links visible gives visitors direct access to each homepage section.",
        },
        {
          title: "Keyboard and touch interaction",
          description:
            "Navigation and contact links have generous tap areas and visible keyboard focus outlines. Project cards act as links with descriptive accessible names, so visitors can explore them using a mouse or keyboard.",
        },
        {
          title: "Metadata and résumé access",
          description:
            "The shared layout supplies the portfolio title and description. The résumé PDF is served from the public folder, giving visitors a download link that travels with the site when it is deployed.",
        },
        {
          title: "Development checks",
          description:
            "TypeScript checks help catch mismatched component props, while ESLint checks the source for common issues. These checks support development; they do not replace checking the interface in a browser.",
        },
      ],
    },
  },
};

export function generateStaticParams() {
  return Object.keys(skills).map((slug) => ({
    slug,
  }));
}

type SkillPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SkillPage({ params }: SkillPageProps) {
  const { slug } = await params;
  const skill = skills[slug];

  if (!skill) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl py-20">
        <Link
          href="/#skills"
          className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          ← Back to skills
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Technical Skill
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          {skill.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {skill.summary}
        </p>

        {skill.caseStudy && (
          <section className="mt-16 min-w-0" aria-labelledby="featured-case-study">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Featured Case Study
            </p>
            <h2 id="featured-case-study" className="mt-4 text-3xl font-bold">
              {skill.caseStudy.title}
            </h2>
            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              {skill.caseStudy.overview}
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {skill.caseStudy.decisions.map((decision) => (
                <article key={decision.title} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                  <h3 className="text-xl font-semibold">{decision.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{decision.description}</p>
                </article>
              ))}
            </div>
            {skill.caseStudy.code && (
              <figure className="mt-8 min-w-0 overflow-hidden rounded-xl border border-slate-800">
                <figcaption className="border-b border-slate-800 bg-slate-900 p-6">
                  <p className="break-words font-mono text-sm text-cyan-400">{skill.caseStudy.code.filename}</p>
                  <p className="mt-3 leading-7 text-slate-400">{skill.caseStudy.code.caption}</p>
                </figcaption>
                <pre tabIndex={0} aria-label="Java test code example" className="overflow-x-auto p-6 text-sm leading-7 text-slate-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cyan-400">
                  <code>{skill.caseStudy.code.content}</code>
                </pre>
              </figure>
            )}
            {slug === "web-development" && (
              <>
            <Link
              href="/"
              className="mt-8 inline-flex min-h-11 items-center rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
            >
              Explore the portfolio
            </Link>
            <a
              href="https://github.com/Matthew-Cope1/matthew-cope-portfolio"
              className="mt-4 inline-flex min-h-11 items-center rounded-lg border border-slate-700 px-6 py-3 font-semibold text-cyan-400 transition hover:border-cyan-400 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 sm:ml-4"
            >
              View source on GitHub
            </a>
              </>
            )}
          </section>
        )}

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Technologies</h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {skill.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Projects demonstrating this skill</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {skill.projects.map((project) => (
              <article
                key={project}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6"
              >
                <h3 className="text-xl font-semibold">{project}</h3>

                <p className="mt-3 text-slate-400">
                  Project details and selected code will be added as the
                  portfolio develops.
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
