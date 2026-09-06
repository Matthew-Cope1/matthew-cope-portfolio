export type CaseStudy = {
    title: string;
    overview: string;
    decisions: { title: string; description: string }[];
    code?: { filename: string; caption: string; content: string }[];
    chart?: { src: string; alt: string; caption: string; width: number; height: number };
    models?: { caption: string; rows: { name: string; rSquared: string; adjusted: string }[] };
    links?: { href: string; label: string }[];
    output?: { input: string; algorithm: string; checksum: string };
};

export type Skill = {
  title: string;
  summary: string;
  technologies: string[];
  caseStudies?: CaseStudy[];
};

const skills: Record<string, Skill> = {
  java: {
    title: "Java Development",
    summary:
      "I use Java to create requirement-driven applications, automated tests, and secure software components.",
    technologies: ["Java", "JUnit", "Spring Boot", "SHA-256"],
    caseStudies: [{
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
      code: [
        {
          filename: "AppointmentService.java",
          caption:
            "Excerpt from addAppointment, after its null check: an existing ID triggers an exception before the map is updated, preventing a duplicate from replacing the original appointment.",
          content: `String appointmentId = appointment.getAppointmentId();

if (appointments.containsKey(appointmentId)) {
    throw new IllegalArgumentException("Appointment ID must be unique");
}

appointments.put(appointmentId, appointment);`,
        },
        {
        filename: "AppointmentServiceTest.java",
        caption:
          "Both appointments have valid descriptions and dates one day in the future, so the duplicate ID is the condition being tested. After adding the first appointment, assertThrows verifies that adding the second raises an IllegalArgumentException.",
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
      ],
    }, {
      title: "SHA-256 Checksum Generation",
      output: {
        input: "Hello Matthew Cope!",
        algorithm: "SHA-256",
        checksum: "272d39be83c493010ffd6e2f3c993633804d3c4a1a186d493c2df81384d38eaf",
      },
      overview:
        "For my CS 305 coursework, I extended a Spring Boot starter application with a checksum helper and a /hash endpoint. The endpoint hashes the fixed message Hello Matthew Cope! and displays the input, algorithm, and hexadecimal result.",
      decisions: [
        {
          title: "Explicit input encoding",
          description:
            "The helper converts the input to UTF-8 bytes before passing it to MessageDigest. Specifying the encoding keeps the byte representation consistent across systems.",
        },
        {
          title: "Readable hexadecimal output",
          description:
            "The digest bytes are formatted with %02x and appended to a StringBuilder. Each byte contributes two hexadecimal characters, preserving leading zeros in the displayed checksum.",
        },
        {
          title: "Separate hashing from the endpoint",
          description:
            "calculateHash accepts the input and algorithm, while the /hash handler selects SHA-256 and prepares the response. The helper declares NoSuchAlgorithmException for an unavailable algorithm.",
        },
        {
          title: "Verification as a next step",
          description:
            "This version generates and displays a checksum; it does not compare it with a trusted expected value. The supplied test is a context-load test, so focused checksum tests would be a useful next addition, including a known input and expected digest.",
        },
      ],
      code: [{
        filename: "ServerApplication.java",
        caption:
          "Core excerpt from calculateHash: select the requested algorithm, hash the UTF-8 input, and convert the resulting bytes to a hexadecimal string. The /hash endpoint calls this helper with SHA-256.",
        content: `MessageDigest md = MessageDigest.getInstance(algorithm);
byte[] digest = md.digest(input.getBytes(StandardCharsets.UTF_8));

StringBuilder hexString = new StringBuilder(digest.length * 2);
for (byte b : digest) {
    hexString.append(String.format("%02x", b));
}

return hexString.toString();`,
      }],
    }],
  },

  python: {
    title: "Python and Data Analysis",
    summary:
      "I use Python to process data, perform statistical analysis, create visualizations, and communicate evidence-based conclusions.",
    technologies: ["Python", "pandas", "SciPy", "statsmodels", "Matplotlib", "Jupyter"],
    caseStudies: [{
      title: "NBA Performance Analysis — Comparing Regression Models",
      overview:
        "For MAT 243, I explored how season-level basketball metrics relate to regular-season wins using a guided notebook and a written summary report. I completed correlation and regression steps and extended the analysis to a four-predictor model using 618 team-season observations from 1995–2015. The figures and results come from the saved notebook export; my report interprets their implications for coaches and management.",
      decisions: [
        {
          title: "Load and inspect the data",
          description:
            "The notebook loads nba_wins_data.csv with pandas, displays the first five rows, and checks the observation count. Each row contains a team's season-level scoring, relative skill, differentials, and total wins.",
        },
        {
          title: "Compare relationships",
          description:
            "Scatterplots and SciPy Pearson correlations show a stronger positive association between average relative skill and wins (r = 0.9072) than between average points scored and wins (r = 0.4777). These associations do not establish cause and effect.",
        },
        {
          title: "Extend the regression model",
          description:
            "Using statsmodels, I fitted a relative-skill model, added average points, then included point and relative-skill differentials. The four-predictor model has the highest recorded R² at 0.878, explaining 87.8% of the observed variation in wins within this dataset.",
        },
        {
          title: "Evaluate individual predictors",
          description:
            "My report distinguishes the overall F-test from individual coefficient tests. The four-predictor model is significant overall; at a 0.01 significance level, average points and both differentials are significant, while average relative skill is not (p = 0.442). Its strong standalone correlation does not guarantee that it contributes additional information once the other metrics are included.",
        },
        {
          title: "Translate findings for management",
          description:
            "My takeaway for coaches was to consider scoring alongside performance relative to opponents. Point differential captures how consistently a team outscores its opponents, adding context that points scored alone misses. These historical associations can inform team evaluation, while forecasts for future seasons still need separate validation.",
        },
        {
          title: "Interpret the limits",
          description:
            "The export contains no held-out evaluation, so these results do not establish accuracy on future seasons. The full model reports a large condition number, and average relative skill has a p-value of 0.442 after accounting for the other predictors. Checking predictor overlap, residuals, and performance on later seasons would be useful next steps.",
        },
      ],
      chart: {
        src: "/nba-wins-relative-skill.png",
        width: 488,
        height: 283,
        alt: "Scatterplot of average relative skill versus total season wins, showing a strong upward trend with some outliers.",
        caption: "Original Matplotlib output from the notebook. Teams with higher average relative skill generally recorded more wins; the saved Pearson correlation is 0.9072.",
      },
      models: { caption: 'Model comparison from saved output: all three models use 618 observations. R² measures fit to the analyzed data, not prediction accuracy on new data.', rows: [
        { name: "Average relative skill", rSquared: "0.823", adjusted: "0.823" },
        { name: "Average points + relative skill", rSquared: "0.837", adjusted: "0.837" },
        { name: "Points + relative skill + both differentials", rSquared: "0.878", adjusted: "0.877" },
      ] },
      code: [{
        filename: "Project Three notebook — Step 6",
        caption:
          "The four-predictor regression cell, with its formula wrapped for readability. total_wins is the response; the terms after ~ are predictors. fit() estimates the model and summary() displays coefficients and fit statistics.",
        content: `import statsmodels.formula.api as smf

model3 = smf.ols(
    'total_wins ~ avg_pts_differential + avg_elo_differential '
    '+ avg_pts + avg_elo_n',
    nba_wins_df
).fit()
print(model3.summary())`,
      }],
    }],
  },

  "web-development": {
    title: "Web Development",
    summary:
      "I build responsive interfaces with reusable components, typed data, modern routing, and version-controlled development workflows.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    caseStudies: [{
      title: "Matthew Cope Portfolio",
      links: [{ href: "/", label: "Explore the portfolio" }, { href: "https://github.com/Matthew-Cope1/matthew-cope-portfolio", label: "View source on GitHub" }],
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
    }],
  },
};

export function getSkill(slug: string): Skill | undefined {
  return Object.prototype.hasOwnProperty.call(skills, slug) ? skills[slug] : undefined;
}

export function getSkillSlugs(): string[] {
  return Object.keys(skills);
}
