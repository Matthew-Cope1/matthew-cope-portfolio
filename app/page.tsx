import Navbar from "./components/Navbar";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import ExperienceItem from "./components/ExperienceItem";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">

      <Navbar />
      
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Software Engineering Portfolio
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight">
          Matthew Cope
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Computer science student and Air Force technical leader building
          dependable software with C++, Java, Python, and modern web
          technologies.
        </p>
      </section>

      <section id="skills" className="mx-auto max-w-6xl py-20">
  <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
    Technical Skills
  </p>

  <h2 className="mt-4 text-4xl font-bold tracking-tight">
    See how I apply each skill
  </h2>

  <p className="mt-4 max-w-2xl leading-7 text-slate-400">
    Select a skill to examine the projects, source code, design decisions,
    and debugging techniques behind my work.
  </p>

  <div className="mt-10 grid gap-6 md:grid-cols-2">
    <SkillCard
      title="C++ Development"
      description="Object-oriented applications, data structures, graphics, and systems-focused problem solving."
      technologies={["C++", "OpenGL", "GLFW", "GLM"]}
      href="/skills/cpp"
    />

    <SkillCard
      title="Java Development"
      description="Requirements-based development, automated testing, secure coding, and application services."
      technologies={["Java", "JUnit", "Spring Boot", "SHA-256"]}
      href="/skills/java"
    />

    <SkillCard
      title="Python & Data Analysis"
      description="Statistical analysis, visualization, data processing, and evidence-based conclusions."
      technologies={["Python", "pandas", "SciPy", "Jupyter"]}
      href="/skills/python"
    />

    <SkillCard
      title="Web Development"
      description="Responsive interfaces built with reusable components, typed data, and modern routing."
      technologies={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
      href="/skills/web-development"
    />
  </div>
</section>

<section id="projects" className="mx-auto max-w-6xl py-20">
  <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
    Selected Projects
  </p>

  <h2 className="mt-4 text-4xl font-bold tracking-tight">
    Software built through coursework and independent development
  </h2>

  <p className="mt-4 max-w-2xl leading-7 text-slate-400">
    Each project demonstrates a different part of my development process,
    including design, implementation, testing, debugging, and documentation.
  </p>

  <div className="mt-10 grid gap-6 md:grid-cols-2">
    <ProjectCard
      title="Interactive 3D Graphics Application"
      href="/skills/cpp"
      technology="C++ • OpenGL"
      description="An interactive three-dimensional scene built with reusable objects, textures, lighting, transformations, and camera controls."
      highlights={[
        "Created reusable meshes and composite objects",
        "Implemented keyboard and mouse camera movement",
        "Debugged rendering, lighting, and texture problems",
      ]}
    />

    <ProjectCard
      title="Software Testing and Quality Assurance"
      href="/skills/java"
      technology="Java • JUnit"
      description="A collection of application services developed and tested from detailed software requirements."
      highlights={[
        "Created positive, negative, and boundary tests",
        "Tested validation and exception behavior",
        "Reached 87.7% code coverage",
      ]}
    />

    <ProjectCard
      title="SHA-256 Checksum Application"
      href="/skills/java"
      technology="Java • Spring Boot"
      description="A Spring Boot application that generates and displays a SHA-256 checksum for a fixed message through a web endpoint."
      highlights={[
        "Generated a SHA-256 digest from UTF-8 input",
        "Converted digest bytes to hexadecimal output",
        "Displayed the input and checksum through /hash",
      ]}
    />

    <ProjectCard
      title="NBA Performance Regression Analysis"
      href="/skills/python"
      technology="Python • pandas • statsmodels"
      description="An analysis of historical NBA team performance using correlation, visualization, and regression to explore relationships with regular-season wins."
      highlights={[
        "Analyzed 618 team-season observations from 1995–2015",
        "Compared three regression models and their fit",
        "Interpreted results and limitations for coaches and management",
      ]}
    />

    <ProjectCard
      title="Course Planner"
      href="/skills/cpp#course-planner"
      technology="C++ • Data Structures"
      description="A command-line application that loads, organizes, searches, and displays course information."
      highlights={[
        "Parsed structured data from an input file",
        "Indexed courses in an ordered std::map",
        "Implemented searching and sorted output",
      ]}
    />
  </div>
</section>
<section id="experience" className="mx-auto max-w-6xl py-20">
  <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
    Professional Experience
  </p>

  <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight">
    Technical discipline developed in high-stakes environments
  </h2>

  <p className="mt-4 max-w-3xl leading-7 text-slate-400">
    My professional background has taught me to interpret requirements,
    troubleshoot complex systems, verify performance, document results, and
    communicate clearly with technical teams and organizational leaders.
  </p>

  <div className="mt-10">
    <ExperienceItem
      dates="2026 — Present"
      title="Technical Instructor and Evaluator"
      organization="U.S. Air Force • C-146A Formal Training Unit"
      description="Deliver standardized technical instruction and evaluate performance against qualification, safety, and mission-readiness requirements. Identify performance gaps, document results, and provide corrective feedback."
    />

    <ExperienceItem
      dates="2025"
      title="Operations Manager and Technical Evaluator"
      organization="U.S. Air Force • Special Operations"
      description="Led daily operations for 40 personnel while analyzing qualifications, requirements, constraints, and program risks. Evaluated performance against technical standards and recommended corrective actions."
    />

    <ExperienceItem
      dates="2023 — 2025"
      title="Program Manager and Technical Instructor"
      organization="U.S. Air Force • Standardization and Evaluation"
      description="Managed a technical evaluation program for 40 personnel. Directed inspection preparation by reviewing requirements, records, and organizational processes, contributing to an inspection with zero discrepancies."
    />

    <ExperienceItem
      dates="2013 — 2019"
      title="Aircraft Systems Technician"
      organization="U.S. Air Force • Aircraft Fuel Systems"
      description="Diagnosed and repaired aircraft-system discrepancies using technical documentation, schematics, inspection procedures, hardware testing, and systematic root-cause analysis."
    />
  </div>
</section>

<section className="mx-auto max-w-6xl py-20">
  <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
    Education and Recognition
  </p>

  <h2 className="mt-4 text-4xl font-bold tracking-tight">
    Continuing education supported by proven leadership
  </h2>

  <div className="mt-10 grid gap-6 md:grid-cols-2">
    <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-sm font-semibold text-cyan-400">
        Expected March 2027
      </p>

      <h3 className="mt-3 text-2xl font-semibold">
        Bachelor of Science in Computer Science
      </h3>

      <p className="mt-2 text-slate-300">
        Software Engineering Concentration
      </p>

      <p className="mt-4 leading-7 text-slate-400">
        Southern New Hampshire University
        <br />
        GPA: 4.0
      </p>
    </article>

    <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-sm font-semibold text-cyan-400">2025</p>

      <h3 className="mt-3 text-2xl font-semibold">
        Associate of Applied Science
      </h3>

      <p className="mt-2 text-slate-300">
        Aircraft Maintenance Technology
      </p>

      <p className="mt-4 leading-7 text-slate-400">
        Community College of the Air Force
      </p>
    </article>

    <article className="rounded-xl border border-slate-800 bg-slate-900 p-6 md:col-span-2">
      <p className="text-sm font-semibold text-cyan-400">
        Professional Recognition
      </p>

      <h3 className="mt-3 text-2xl font-semibold">
        Wing Standardization and Evaluation NCO of the Year
      </h3>

      <p className="mt-4 max-w-3xl leading-7 text-slate-400">
        Recognized in 2024 for technical evaluation, program management,
        standards compliance, and contributions to organizational readiness.
      </p>
    </article>
  </div>
</section>

<Footer />

    </main>
  );
}
