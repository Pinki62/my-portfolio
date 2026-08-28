const skills = [
  { name: "Angular", level: "Primary" }, { name: "Node.js", level: "Primary" },
  { name: "MongoDB", level: "Primary" }, { name: "JavaScript", level: "Daily" },
  { name: "React", level: "Working knowledge" }, { name: "SQL", level: "Working knowledge" },
];

export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a className="brand" href="#top"><span>FS</span><b>Portfolio</b></a>
      <div className="navLinks"><a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Skills</a></div>
      <a className="navCta" href="#contact">Let&apos;s talk <span>↗</span></a>
    </nav>

    <section className="hero shell" id="top">
      <div className="heroCopy">
        <div className="eyebrow"><i /> Available for meaningful opportunities</div>
        <h1>I build web<br />experiences that<br /><em>work beautifully.</em></h1>
        <p className="intro">Full Stack Web Developer specializing in Angular, Node.js and MongoDB—turning complex requirements into clean, dependable products.</p>
        <div className="heroActions"><a className="primaryBtn" href="#experience">Explore my journey <span>↓</span></a><a className="textLink" href="#contact">Get in touch <span>↗</span></a></div>
        <div className="quickFacts"><div><strong>3+</strong><span>Years in tech</span></div><div><strong>2024</strong><span>Promoted to<br />Full Stack Developer</span></div></div>
      </div>
      <div className="heroVisual" aria-label="Full stack technology overview">
        <div className="orbit orbitOne" /><div className="orbit orbitTwo" />
        <div className="codeCard"><div className="codeTop"><span><i /><i /><i /></span><b>developer.ts</b><small>⌁</small></div><pre><span className="purple">const</span> developer = {'{'}{`\n`}  role: <span className="green">&quot;Full Stack&quot;</span>,{`\n`}  builds: [<span className="green">&quot;web&quot;</span>, <span className="green">&quot;APIs&quot;</span>],{`\n`}  mindset: <span className="green">&quot;always learning&quot;</span>{`\n`}{'}'};</pre><div className="terminal"><span>●</span> SYSTEM STATUS <b>READY TO BUILD_</b></div></div>
        <div className="techPill pillAngular"><b>A</b><span>Angular<small>Frontend</small></span></div><div className="techPill pillNode"><b>JS</b><span>Node.js<small>Backend</small></span></div><div className="techPill pillMongo"><b>◆</b><span>MongoDB<small>Database</small></span></div><div className="floatingTag">FULL STACK</div>
      </div>
    </section>

    <section className="marquee" aria-label="Core strengths"><div>ANGULAR <b>✦</b> NODE.JS <b>✦</b> MONGODB <b>✦</b> REST APIS <b>✦</b> RESPONSIVE WEB <b>✦</b> CLEAN CODE <b>✦</b></div></section>

    <section className="about shell section" id="about"><div className="sectionLabel">01 / ABOUT</div><div className="aboutGrid"><h2>From curious trainee<br />to <em>full stack builder.</em></h2><div className="bodyCopy"><p>My journey began with hands-on technical training during college. In my seventh semester, I earned an internship opportunity in Delhi and stepped into the industry as a Software Trainee.</p><p>Today, I work across the web stack—building interfaces with Angular, developing server-side functionality with Node.js, and working with MongoDB. I care about thoughtful solutions, dependable delivery, and learning with every project.</p></div></div></section>

    <section className="experience section" id="experience"><div className="shell"><div className="sectionLabel light">02 / EXPERIENCE</div><div className="sectionHeading"><h2>A journey of<br /><em>steady growth.</em></h2><p>Every role has added another layer to how I think, build, and collaborate.</p></div><div className="timeline">
      <article className="role current"><div className="date">JUL 2024 — PRESENT</div><div className="dot" /><div className="roleBody"><span className="badge">CURRENT ROLE</span><h3>Full Stack Web Developer</h3><h4>Current Company</h4><p>Promoted after a year of consistent delivery. Building and maintaining full-stack web applications with Angular, Node.js, and MongoDB.</p><div className="tags"><span>Angular</span><span>Node.js</span><span>MongoDB</span><span>APIs</span></div></div></article>
      <article className="role"><div className="date">JUL 2023 — JUN 2024</div><div className="dot" /><div className="roleBody"><h3>Junior Web Developer</h3><h4>Current Company</h4><p>Joined the development team, contributed to real-world web products, and built a strong foundation in frontend and backend development.</p></div></article>
      <article className="role"><div className="date">7TH SEMESTER</div><div className="dot" /><div className="roleBody"><h3>Software Trainee Intern</h3><h4>Stepzil Private Limited · Delhi</h4><p>Selected during college for an industry internship, gaining practical exposure to software development and professional team workflows.</p></div></article>
    </div></div></section>

    <section className="skills shell section" id="skills"><div className="sectionLabel">03 / TOOLKIT</div><div className="skillsHeading"><h2>Tools I use to turn<br />ideas into <em>products.</em></h2><p>Deepening my core stack every day, while steadily expanding into adjacent technologies.</p></div><div className="skillGrid">{skills.map((skill,i)=><article key={skill.name}><span>0{i+1}</span><div className={`skillIcon s${i}`}>{skill.name.slice(0,2)}</div><h3>{skill.name}</h3><p>{skill.level}</p></article>)}</div></section>

    <section className="contact shell" id="contact"><span className="contactKicker">HAVE A PROJECT OR OPPORTUNITY?</span><h2>Let&apos;s build something<br /><em>worth using.</em></h2><p>I&apos;m always open to thoughtful conversations, challenging work, and opportunities to grow.</p><a href="mailto:your.email@example.com">Start a conversation <span>↗</span></a><small>Replace the email above with your preferred contact address.</small></section>
    <footer className="shell"><div className="brand"><span>FS</span><b>Portfolio</b></div><p>Full Stack Web Developer · Built with care</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}
