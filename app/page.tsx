const skills = [
  { name: "Angular", level: "Primary" }, { name: "Node.js", level: "Primary" },
  { name: "MongoDB", level: "Primary" }, { name: "JavaScript", level: "Daily" },
  { name: "React", level: "Working knowledge" }, { name: "SQL", level: "Working knowledge" },
];

export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a className="brand" href="#top"><span>PK</span><b>Pinki Kaur</b></a>
      <div className="navLinks"><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a></div>
      <a className="navCta" href="#contact">Let&apos;s talk <span>↗</span></a>
    </nav>

    <section className="hero shell" id="top">
      <div className="heroCopy">
        <div className="eyebrow"><i /> Bathinda, Punjab · Full Stack Web Developer</div>
        <p className="heroName">Hello, I&apos;m Pinki Kaur.</p>
        <h1>I build web<br />experiences that<br /><em>work beautifully.</em></h1>
        <p className="intro">Full Stack Web Developer specializing in Angular, Node.js and MongoDB—turning complex requirements into clean, dependable products.</p>
        <div className="heroActions"><a className="primaryBtn" href="#experience">Explore my journey <span>↓</span></a><a className="textLink" href="#contact">Get in touch <span>↗</span></a></div>
        <div className="quickFacts"><div><strong>3+</strong><span>Years of industry<br />experience</span></div><div><strong>2024</strong><span>Promoted to<br />Full Stack Developer</span></div></div>
      </div>
      <div className="heroVisual" aria-label="Full stack technology overview">
        <div className="orbit orbitOne" /><div className="orbit orbitTwo" />
        <div className="codeCard"><div className="codeTop"><span><i /><i /><i /></span><b>pinki-kaur.ts</b><small>⌁</small></div><pre><span className="purple">const</span> developer = {'{'}{`\n`}  role: <span className="green">&quot;Full Stack&quot;</span>,{`\n`}  builds: [<span className="green">&quot;web&quot;</span>, <span className="green">&quot;APIs&quot;</span>],{`\n`}  mindset: <span className="green">&quot;always learning&quot;</span>{`\n`}{'}'};</pre><div className="terminal"><span>●</span> SYSTEM STATUS <b>READY TO BUILD_</b></div></div>
        <div className="techPill pillAngular"><b>A</b><span>Angular<small>Frontend</small></span></div><div className="techPill pillNode"><b>JS</b><span>Node.js<small>Backend</small></span></div><div className="techPill pillMongo"><b>◆</b><span>MongoDB<small>Database</small></span></div><div className="floatingTag">FULL STACK</div>
      </div>
    </section>

    <section className="marquee" aria-label="Core strengths"><div>ANGULAR <b>✦</b> NODE.JS <b>✦</b> MONGODB <b>✦</b> REST APIS <b>✦</b> RESPONSIVE WEB <b>✦</b> CLEAN CODE <b>✦</b></div></section>

    <section className="about shell section" id="about"><div className="sectionLabel">01 / ABOUT</div><div className="aboutGrid"><h2>From curious trainee<br />to <em>full stack builder.</em></h2><div className="bodyCopy"><p>I&apos;m Pinki Kaur, a Full Stack Web Developer based in Bathinda, Punjab. My journey began with hands-on technical training during college, followed by a six-month Software Trainee internship at Step2Gen Pvt. Ltd.</p><p>Today at Idcle Tech LLP, I build web applications across the stack—creating interfaces with Angular, developing server-side functionality with Node.js, and working with MongoDB. I value thoughtful solutions, dependable delivery, team collaboration, and continuous learning.</p></div></div></section>

    <section className="experience section" id="experience"><div className="shell"><div className="sectionLabel light">02 / EXPERIENCE</div><div className="sectionHeading"><h2>A journey of<br /><em>steady growth.</em></h2><p>Every role has added another layer to how I think, build, and collaborate.</p></div><div className="timeline">
      <article className="role current"><div className="date">JUL 2024 — PRESENT</div><div className="dot" /><div className="roleBody"><span className="badge">CURRENT ROLE</span><h3>Full Stack Web Developer</h3><h4>Idcle Tech LLP</h4><p>Promoted after a year of consistent delivery. Building and maintaining full-stack web applications with Angular, Node.js, MongoDB, and REST APIs.</p><div className="tags"><span>Angular</span><span>Node.js</span><span>MongoDB</span><span>REST APIs</span></div></div></article>
      <article className="role"><div className="date">JUL 2023 — JUN 2024</div><div className="dot" /><div className="roleBody"><h3>Junior Web Developer</h3><h4>Idcle Tech LLP</h4><p>Contributed to production web applications and established a strong foundation in frontend development, backend services, databases, and collaborative delivery.</p></div></article>
      <article className="role"><div className="date">JAN — JUL 2023</div><div className="dot" /><div className="roleBody"><h3>Software Trainee</h3><h4>Step2Gen Pvt. Ltd.</h4><p>Completed a six-month industry internship from 2 January to 2 July 2023, gaining practical experience in software development and professional team workflows.</p></div></article>
    </div></div></section>

    <section className="projects shell section" id="projects"><div className="sectionLabel">03 / SELECTED PROJECTS</div><div className="projectsHeading"><h2>Products shaped by<br /><em>real-world needs.</em></h2><p>Full-stack work spanning inventory, education, customer relationships, and small-business experiences.</p></div><div className="projectGrid">
      <article className="projectCard featured"><div className="projectTop"><span>01</span><b>FULL STACK</b></div><h3>EnterCraft</h3><p>An inventory management system designed to organize products, stock, and operational data. Contributed across both the frontend and backend.</p><div className="tags inkTags"><span>Angular</span><span>Node.js</span><span>MongoDB</span></div></article>
      <article className="projectCard"><div className="projectTop"><span>02</span><b>TEAM PROJECT</b></div><h3>IntelliCraft</h3><p>A school management system built with a four-member team. Worked across the frontend and backend to support day-to-day academic workflows.</p><div className="tags inkTags"><span>Full Stack</span><span>Teamwork</span><span>APIs</span></div></article>
      <article className="projectCard"><div className="projectTop"><span>03</span><b>INDEPENDENT BUILD</b></div><h3>CRM Platform</h3><p>Designed and developed from scratch as an independent learning project, exploring practical customer-management workflows and full-stack architecture.</p><div className="tags inkTags"><span>From Scratch</span><span>Full Stack</span><span>Learning</span></div></article>
      <article className="projectCard smallBuilds"><div className="projectTop"><span>04</span><b>SMALL BUILDS</b></div><h3>Boutique & More</h3><p>A collection of smaller web projects, including a boutique experience, created to practice responsive interfaces and end-to-end development.</p><div className="tags inkTags"><span>Responsive Web</span><span>UI</span></div></article>
    </div></section>

    <section className="credentials section"><div className="shell"><div className="sectionLabel">04 / EDUCATION & TRAINING</div><div className="credentialGrid"><article className="educationCard"><span>2019 — 2023</span><h2>B.Tech in Computer Science &amp; Engineering</h2><h3>Baba Farid College of Engineering and Technology, Deon</h3><p>A four-year foundation in computer science, software engineering, problem solving, and modern development practices.</p></article><div className="trainingList"><h3>Professional Training</h3><article><span>01</span><div><h4>Full Stack Development with Node.js</h4><p>Bangalore Computer Education</p></div></article><article><span>02</span><div><h4>Data Structures and Algorithms</h4><p>Bangalore Computer Education</p></div></article><article><span>03</span><div><h4>Web Development</h4><p>Solitaire Infosys Private Limited</p></div></article></div></div></div></section>

    <section className="skills shell section" id="skills"><div className="sectionLabel">05 / TOOLKIT</div><div className="skillsHeading"><h2>Tools I use to turn<br />ideas into <em>products.</em></h2><p>Deepening my core stack every day, while steadily expanding into adjacent technologies.</p></div><div className="skillGrid">{skills.map((skill,i)=><article key={skill.name}><span>0{i+1}</span><div className={`skillIcon s${i}`}>{skill.name.slice(0,2)}</div><h3>{skill.name}</h3><p>{skill.level}</p></article>)}</div></section>

    <section className="contact shell" id="contact"><span className="contactKicker">HAVE A PROJECT OR OPPORTUNITY?</span><h2>Let&apos;s build something<br /><em>worth using.</em></h2><p>I&apos;m open to thoughtful conversations, challenging work, and opportunities to grow.</p><div className="contactActions"><a className="emailBtn" href="mailto:pinkukaur0803@gmail.com">Email me <span>↗</span></a></div><small>Bathinda, Punjab · Available by email</small></section>
    <footer className="shell"><div className="brand"><span>PK</span><b>Pinki Kaur</b></div><p>Full Stack Web Developer · Bathinda, Punjab</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}