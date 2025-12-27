import React, { useEffect } from "react";
import "./styles.css";

const skillsCategories = [
  {
    title: "GenAI and NLP",
    description: "LLMs, prompts, retrieval and reasoning.",
    tools: ["OpenAI", "Vertex AI", "LangChain", "LangGraph"],
  },
  {
    title: "Data and Cloud",
    description: "Pipelines and storage for production AI.",
    tools: ["BigQuery", "GCP", "MongoDB", "EMR / EC2"],
  },
  {
    title: "Retrieval and Graphs",
    description: "Structured knowledge for grounded answers.",
    tools: ["RAG", "FAISS", "ChromaDB", "RDFLib", "Neo4j"],
  },
  {
    title: "Apps and Prototyping",
    description: "Interfaces that let teams use AI safely.",
    tools: ["Streamlit", "Gradio", "FastAPI", "Git"],
  },
  {
    title: "Analytics",
    description: "Dashboards and insight for decision makers.",
    tools: ["Power BI", "Tableau", "pandas", "NumPy"],
  },
];

const projects = [
  {
    index: "01",
    kind: "Company · TCS",
    title: "AI Resolution Assistant for Support Teams",
    tools:
      "GenAI · RAG · Vertex AI · BigQuery · GraphRAG · OCR · Retrieval pipelines",
    details:
      "Assistant that reads SOP documents and historical tickets, matches user queries to the correct policy, and returns clear step by step fixes that support teams can follow. Includes natural language to SQL over BigQuery for safe read only analytics.",
  },
  {
    index: "02",
    kind: "Hackathon · SIH Finalist",
    title: "Counterfeit Product Identification System",
    tools: "Blockchain · Ganache · Data Matrix barcode",
    details:
      "Prototype that uses barcodes and a blockchain ledger so users can verify if a product entry is genuine. Built Figma UI, smart contract flow and presented at Smart India Hackathon finals.",
  },
  {
    index: "03",
    kind: "Personal Project",
    title: "Text to Speech Conversion using Whisper AI",
    tools: "Python · Whisper · clustering · embeddings",
    details:
      "Pipeline that converts recorded speech to text with speaker separation. Uses embeddings to group segments by speaker and then reconstructs conversation transcripts with clear labels.",
  },
  {
    index: "04",
    kind: "Open Source Style Tool",
    title: "Blog to Podcast Generator",
    tools: "Streamlit · BeautifulSoup · BART · pyttsx3",
    details:
      "Tool that scrapes any blog article, summarises it with a transformer model, and then turns it into a short audio episode that users can download.",
  },
  {
    index: "05",
    kind: "Personal Tool",
    title: "AI Meme Generator with Browser Automation",
    tools: "Streamlit · Browser automation · OpenRouter API",
    details:
      "End to end meme assistant that understands a user idea, searches templates, drafts captions and generates a ready to post meme.",
  },
  {
    index: "06",
    kind: "Academic Project",
    title: "Driver Drowsiness Detection System",
    tools: "OpenCV · PyAudio",
    details:
      "Real time eye and head tracking with alarms when the driver looks sleepy. Built for a safety demo with simple UI and sound alerts.",
  },
];

function App() {
  // duplicate skills list so the marquee loops cleanly
  const marqueeSkills = [...skillsCategories, ...skillsCategories];
  useEffect(() => {
    const section = document.getElementById("experience");
    const timeline = document.getElementById("experience-timeline");

    if (!section || !timeline) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeline.classList.add("exp-animate");
          } else {
            // remove to allow replay when user scrolls away and back
            timeline.classList.remove("exp-animate");
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);


  return (
    <div className="app-root">
      <header className="site-header">
        <div className="site-header-inner">
          <div className="site-logo">AUTHUR RAMESH RISHVAANTH</div>
          <nav className="site-nav">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">My work</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* ABOUT */}
        <section id="about" className="hero-section">
          <div className="section-inner hero-inner">
            <div className="hero-text">
              <p className="eyebrow">Hello, I am</p>
              <h1 className="hero-heading">
                Authur Ramesh <span className="hero-name">Rishvaanth</span>
              </h1>
              <p className="hero-role">AI / ML Engineer</p>

              <p className="hero-subtitle">
                I am an AI and ML engineer from Chennai who enjoys poking at
                models, tools and data to see what they can really do in day to
                day life. I like understanding how systems behave, where they
                break and how to make them safer and easier for people to use.
              </p>

              <p className="hero-subtitle">
                Most days I am experimenting with new APIs, reading docs,
                running small notebooks and wiring different tools together just
                to see what happens. I enjoy turning vague ideas into simple
                flows, visualising what is going on under the hood and then
                trimming away everything that is not needed.
              </p>

              <p className="hero-subtitle">
                Recently that curiosity has turned into real projects:
                assistants for support teams, RAG pipelines that sit on top of
                company documents, and dashboards that help people ask better
                questions of their data.
              </p>

              <p className="hero-short">
                Short version: I like exploring AI and turning the good
                experiments into tools that people can actually rely on.
              </p>

              <div className="hero-tags">
                <span className="pill">AI Engineering</span>
                <span className="pill">RAG · GraphRAG</span>
                <span className="pill">Vertex AI · BigQuery · GCP</span>
              </div>

              <h3 className="hero-tools-title">Tools I work with</h3>
              <div className="hero-tools-row">
                <span className="pill pill-soft">Python</span>
                <span className="pill pill-soft">GenAI / LLMs</span>
                <span className="pill pill-soft">Retrieval &amp; RAG</span>
                <span className="pill pill-soft">Dashboards &amp; analytics</span>
              </div>
            </div>

            <div className="hero-avatar-wrapper">
              <div className="hero-avatar-glow" />
              {/* put your generated avatar at /public/avatar.png */}
              <img
                src="/avatar.png"
                alt="Rishvaanth avatar"
                className="hero-avatar"
              />
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="experience-section">
          <div className="section-inner experience-inner">
            <p className="eyebrow">Experience</p>
            <h2 className="section-title experience-title">
              My career <span>&amp; experience</span>
            </h2>
            <p className="section-intro">
              From internships to production AI systems. Here is how I learned
              to work with data, dashboards and AI assistants in real settings.
            </p>

            <div className="experience-orb" />

            <div className="experience-layout">
              <div className="experience-left">
                <div className="exp-left-item">
                  <p className="exp-role">Data Analyst Intern</p>
                  <p className="exp-company">
                    Shiash Info Solutions Pvt Ltd · Chennai
                  </p>
                </div>
                <div className="exp-left-item">
                  <p className="exp-role">AI / ML Engineer</p>
                  <p className="exp-company">
                    Tata Consultancy Services (TCS) · Chennai
                  </p>
                </div>
              </div>

              <div className="experience-center">
                <div className="exp-year">2023</div>
                <div className="exp-line-wrapper">
                  <div className="exp-line" />
                  <div className="exp-glow-dot" />
                </div>
                <div className="exp-year exp-year-lower">2024 – Now</div>
              </div>

              <div className="experience-right">
                <div className="experience-card">
                  <h3>Shiash Info Solutions · Data Analyst</h3>
                  <ul>
                    <li>
                      Cleaned and transformed raw datasets using pandas and
                      NumPy, handling missing values and inconsistent formats.
                    </li>
                    <li>
                      Built dashboards in Power BI and Tableau so stakeholders
                      could track KPIs without living inside spreadsheets.
                    </li>
                    <li>
                      Learned to translate business questions into clear metrics
                      and visuals.
                    </li>
                  </ul>
                </div>

                <div className="experience-card">
                  <h3>Tata Consultancy Services · AI / ML Engineer</h3>
                  <ul>
                    <li>
                      Built an AI resolution assistant that reads SOP documents
                      and historical tickets to suggest grounded fixes for
                      support teams.
                    </li>
                    <li>
                      Added natural language to SQL over BigQuery for safe read
                      only analytics with explanation summaries.
                    </li>
                    <li>
                      Prototyped GraphRAG flows on Vertex AI and created an OCR
                      to BigQuery pipeline that cleans vendor data for BI
                      dashboards.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="skills-section">
          <div className="section-inner section-inner-wide">
            <p className="eyebrow">Skills</p>
            <h2 className="section-title">Tools and systems I work with</h2>
            <p className="section-intro">
              A quick view of the tools I reach for when building AI assistants,
              RAG flows, data pipelines and dashboards.
            </p>

            <div className="skills-marquee">
              <div className="skills-track">
                {marqueeSkills.map((cat, idx) => (
                  <div key={`${cat.title}-${idx}`} className="skill-card">
                    <h3 className="skill-card-title">{cat.title}</h3>
                    <p className="skill-card-text">{cat.description}</p>
                    <div className="skill-tag-row">
                      {cat.tools.map((tool) => (
                        <span key={tool} className="skill-pill">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="projects-section">
          <div className="section-inner section-inner-wide">
            <p className="eyebrow">My work</p>
            <h2 className="section-title">Selected projects</h2>
            <p className="section-intro">
              A mix of company work, hackathons and personal tools that show how
              I design and ship AI systems end to end.
            </p>

            <div className="projects-grid">
              {projects.map((p) => (
                <article key={p.index} className="project-panel">
                  <header className="project-panel-header">
                    <div className="project-index">{p.index}</div>
                    <div className="project-meta">
                      <span className="project-kind">{p.kind}</span>
                      <h3 className="project-title">{p.title}</h3>
                    </div>
                  </header>

                  <div className="project-panel-body">
                    <p className="project-tools-label">Tools and features</p>
                    <p className="project-tools">{p.tools}</p>
                    <p className="project-details">{p.details}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="section-inner section-inner-wide">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Let us talk</h2>
            <p className="section-intro">
              For AI engineering roles, internships or collaborations, feel free
              to reach out. I enjoy working on practical GenAI systems, RAG
              pipelines and data tools.
            </p>

            <div className="contact-card">
              <p>
                <strong>Email:</strong> rishvaanthramesh@gmail.com
              </p>
              <p>
                <strong>Location:</strong> Chennai, India · open to remote and
                hybrid roles
              </p>
              <div className="contact-tags">
                <span className="pill pill-soft">AI / ML Engineer</span>
                <span className="pill pill-soft">GenAI &amp; RAG</span>
                <span className="pill pill-soft">Data &amp; Analytics</span>
              </div>
            </div>
          </div>

          <footer className="site-footer">
            © {new Date().getFullYear()} Authur Ramesh Rishvaanth
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
