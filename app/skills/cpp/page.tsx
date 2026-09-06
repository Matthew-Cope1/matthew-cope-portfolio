import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function CppSkillPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl py-20">
        <Link
          href="/"
          className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          ← Back to home
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Technical Skill
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          C++ Development
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I use C++ to build object-oriented applications, implement data
          structures, create interactive graphics, and solve problems that
          require careful control over application logic and program state.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Object-Oriented Design</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Separating application responsibilities into reusable classes,
              header files, and implementation files.
            </p>
          </article>

          <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Application Logic</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Managing collisions, movement, changing state, validation, and
              unexpected execution paths.
            </p>
          </article>

          <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Graphics Programming</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Working with reusable meshes, transformations, textures,
              lighting, and interactive camera controls.
            </p>
          </article>
        </div>

        <section id="course-planner" className="mt-20" aria-labelledby="course-planner-title">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">Featured Case Study</p>
          <h2 id="course-planner-title" className="mt-4 text-3xl font-bold">Course Planner</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            A C++ command-line advising tool that loads course numbers, titles, and prerequisites
            from a CSV file. Users can list courses in course-number order or look up one course
            and its prerequisites. The supplied dataset contains eight courses.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              { title: "Ordered storage with std::map", description: "Each Course stores a number, title, and vector of prerequisites. A std::map indexes courses by normalized course number and keeps keys ordered, so listing courses requires iteration rather than a separate sorting step." },
              { title: "Consistent course lookup", description: "normalizeCourseKey removes whitespace and converts characters to uppercase. Loading and searching use the same helper, allowing an input such as csci 300 to match the stored CSCI300 key." },
              { title: "Validate references after loading", description: "The loader records prerequisite references while reading the file, then checks them after all courses are in the map. This lets a course reference another course that appears later in the CSV." },
              { title: "Guard the menu workflow", description: "A loaded flag prevents listing or searching before a successful load. The program reports missing files, malformed rows, unknown prerequisites, and searches that do not find a course." },
            ].map((detail) => (
              <article key={detail.title} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">{detail.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{detail.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold">From CSV file to course lookup</h3>
            <ol className="mt-4 grid gap-4 text-slate-300 sm:grid-cols-3">
              <li className="rounded-xl border border-slate-800 p-4">1. Read rows and normalize course numbers.</li>
              <li className="rounded-xl border border-slate-800 p-4">2. Store courses and validate prerequisite references.</li>
              <li className="rounded-xl border border-slate-800 p-4">3. List ordered courses or search for prerequisites.</li>
            </ol>
          </div>
          <figure className="mt-8 overflow-hidden rounded-xl border border-slate-800">
            <figcaption className="bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Load structured course data</h3>
              <p className="mt-3 leading-7 text-slate-400">First three rows from the supplied CSV. Each row contains a course number, title, and optional prerequisites. CSCI300 references CSCI200, which appears later in the file; validation waits until loading finishes.</p>
            </figcaption>
            <pre tabIndex={0} aria-label="Course CSV sample" className="overflow-x-auto p-6 text-sm leading-7 text-slate-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cyan-400"><code>{`MATH201,Discrete Mathematics,,
CSCI300,Introduction to Algorithms,CSCI200,MATH201
CSCI350,Operating Systems,CSCI300,`}</code></pre>
          </figure>
          <figure className="mt-8 overflow-hidden rounded-xl border border-slate-800">
            <figcaption className="bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Represent and organize courses</h3>
              <p className="mt-3 leading-7 text-slate-400">The Course definition and map declaration from main.cpp, shown together. The vector supports multiple prerequisites, while the map uses course numbers as ordered keys.</p>
            </figcaption>
            <pre tabIndex={0} aria-label="C++ course structure and storage" className="overflow-x-auto p-6 text-sm leading-7 text-slate-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cyan-400"><code>{`struct Course {
    string courseNumber;
    string courseTitle;
    vector<string> prerequisites;
};

map<string, Course> courseMap;`}</code></pre>
          </figure>
          <figure className="mt-8 overflow-hidden rounded-xl border border-slate-800">
            <figcaption className="bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Normalize before searching</h3>
              <p className="mt-3 leading-7 text-slate-400">Excerpt from printCourseInfo in main.cpp. The normalized key is used for lookup, and an unsuccessful search returns before accessing a course.</p>
            </figcaption>
            <pre tabIndex={0} aria-label="C++ course lookup excerpt" className="overflow-x-auto p-6 text-sm leading-7 text-slate-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cyan-400"><code>{String.raw`string key = normalizeCourseKey(userInput);
auto it = courseMap.find(key);

if (it == courseMap.end()) {
    cout << "Course not found.\n";
    return;
}

const Course& c = it->second;`}</code></pre>
          </figure>
          <figure className="mt-8 overflow-hidden rounded-xl border border-slate-800">
            <figcaption className="bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">A complete planner session</h3>
              <p className="mt-3 leading-7 text-slate-400">Condensed transcript from a verified run, with entered commands shown and repeated menus omitted. It covers the load-first guard, all eight courses in sorted order, normalized lookup, and an unknown course.</p>
            </figcaption>
            <pre tabIndex={0} aria-label="Course planner terminal output" className="overflow-x-auto p-6 text-sm leading-7 text-slate-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cyan-400"><samp>{`Welcome to the course planner.
1. Load Data Structure.
2. Print Course List.
3. Print Course.
9. Exit

What would you like to do? 2
Please load data first.

What would you like to do? 1
Data loaded successfully.

What would you like to do? 2
Here is a sample schedule:
CSCI100, Introduction to Computer Science
CSCI101, Introduction to Programming in C++
CSCI200, Data Structures
CSCI300, Introduction to Algorithms
CSCI301, Advanced Programming in C++
CSCI350, Operating Systems
CSCI400, Large Software Development
MATH201, Discrete Mathematics

What would you like to do? 3
What course do you want to know about? csci 300
CSCI300, Introduction to Algorithms
Prerequisites: CSCI200, MATH201

What would you like to do? 3
What course do you want to know about? BAD
Course not found.

What would you like to do? 9
Thank you for using the course planner!`}</samp></pre>
          </figure>
          <div className="mt-8 max-w-3xl">
            <h3 className="text-xl font-semibold">Validation and next steps</h3>
            <p className="mt-3 leading-7 text-slate-400">
              The source compiled with C++17 and warning flags enabled. Scripted checks exercised
              the load-first guard, loading, sorted listing, normalized lookup, a course with no
              prerequisites, and an unknown course. Further improvements include rejecting duplicate
              course IDs, handling quoted CSV fields, and preserving the previous dataset when a reload fails.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Featured Project
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Breakout-Style 2D Application
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-400">
            This project demonstrates class-based design, multi-object
            collision detection, randomized behavior, multi-ball interaction,
            and debugging logic that prevents objects from becoming stuck.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-slate-800">
            <div className="border-b border-slate-800 bg-slate-900 px-5 py-3">
              <p className="font-mono text-sm text-slate-400">
                Breakout code example
              </p>
            </div>

            <pre className="overflow-x-auto bg-slate-950 p-6 text-sm leading-7 text-slate-300">
              <code>
                {
                  "// We will add a real code example from the Breakout project here."
                }
              </code>
            </pre>
          </div>
        </section>
      </section>
    </main>
  );
}