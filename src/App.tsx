import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import {
  ArrowDown, ArrowUpRight, BriefcaseBusiness, Check,
  Code2, Database, Download, ExternalLink, Github, GraduationCap,
  Mail, MapPin, Menu, Moon, Phone, Send, Sun, X, MessageCircle,
  Linkedin, Terminal, Sparkles, Layers3, Globe2,
} from 'lucide-react'
import { expertise, profile, projects, skills } from './data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="section-heading">
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [light, setLight] = useState(false)
  const [filter, setFilter] = useState('All')
  const [sent, setSent] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    document.documentElement.dataset.theme = light ? 'light' : 'dark'
  }, [light])

  const nav = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']
  const categories = ['All', 'Full-stack web application', 'Web application']
  const visibleProjects = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  function handleContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    const message = String(form.get('message') ?? '')
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="app-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Bhavesh Thakor home"><span className="brand-mark">Bt<span>.</span></span><span>BHAVESH Thakor<span className="brand-muted">/</span></span></a>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button theme-button" onClick={() => setLight(!light)} aria-label="Toggle color theme">{light ? <Moon size={18} /> : <Sun size={18} />}</button>
          <a className="header-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
          <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-grid" />
          <div className="hero-copy">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="availability"><span className="pulse-dot" /> AVAILABLE FOR OPPORTUNITIES</motion.div>
            <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }}>HELLO, I'M</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .7 }}>Bhavesh<br /><span>Thakor.</span></motion.h1>
            <motion.div className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }}><span className="role-line" /> Python Developer <span className="role-divider">/</span> Full-Stack Developer  <span className="role-divider">/</span> Backend Developer</motion.div>
            <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>{profile.objective}</motion.p>
            <motion.div className="hero-buttons" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 }}>
              <a className="button button-primary" href="#contact">Contact me <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="/Bhavesh_Resume.pdf" download>Download resume <Download size={18} /></a>
            </motion.div>
            <div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a><span className="social-location"><MapPin size={14} /> Ahmedabad, India</span></div>
          </div>
          <motion.div className="hero-art" initial={{ opacity: 0, scale: .9, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .25 }}>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="avatar-card">
              <div className="avatar-top"><span>Python Developer</span><span className="avatar-status">● ONLINE</span></div>
              <div className="avatar-symbol"><Terminal size={76} strokeWidth={1.15} /><span className="avatar-bracket">&lt;/&gt;</span></div>
              <div className="avatar-name">BHAVESH THAKOR</div>
              <div className="avatar-caption">BUILDING DIGITAL SOLUTIONS</div>
              <div className="avatar-bottom"><span>PYTHON</span><span>DJANGO</span><span>APIS</span></div>
            </div>
            <div className="float-chip chip-python"><Code2 size={16} /> Python</div>
            <div className="float-chip chip-django"><Layers3 size={16} /> Django</div>
            <div className="float-chip chip-api"><Database size={16} /> REST APIs</div>
            <div className="art-glow" />
          </motion.div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="about section-wrap section-space" id="about">
          <SectionHeading eyebrow="01 / ABOUT ME" title="A little about my journey." description="Focused on building useful products through clean code and thoughtful problem-solving." />
          <div className="about-grid">
            <motion.div className="about-main glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="card-index">WHO I AM</span>
              <h3>Turning ideas into<br /><span className="gradient-text">working solutions.</span></h3>
              <p>I’m a Python Developer based in Ahmedabad, Gujarat, with an interest in backend engineering and full-stack web development. I enjoy building practical web applications, working with databases, and solving problems through technology.</p>
              <p>My hands-on project experience includes a Hospital Management System with appointment workflows, pharmacy features, and Razorpay integration. I’m continuously improving my skills and exploring better ways to build reliable applications.</p>
              <div className="about-location"><MapPin size={16} /> {profile.location}</div>
            </motion.div>
            <div className="about-side">
              <motion.div className="mini-card glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><span className="mini-icon"><Code2 /></span><strong>FULL STACK</strong><p>Python, Django and database-driven applications.</p></motion.div>
              <motion.div className="mini-card glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><span className="mini-icon purple"><Sparkles /></span><strong>Always learning</strong><p>Exploring modern tools, APIs and frontend technologies.</p></motion.div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap section-space" id="skills">
          <SectionHeading eyebrow="02 / TECH STACK" title="Technical Skills." description="Technologies and tools I use while learning and building applications." />
          <div className="skills-layout">
            <div className="skills-list">
              {['Languages', 'Backend', 'Frontend', 'Database', 'Libraries'].map((group) => (
                <div className="skill-group" key={group}><h3>{group}</h3><div className="skill-pills">{skills.filter((s) => s.group === group).map((skill) => <span className="skill-pill" key={skill.name}>{skill.name}</span>)}</div></div>
              ))}
            </div>
            <motion.div className="skill-meter glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="card-index">CORE TECHNOLOGIES</span><h3>My technical<br />focus areas.</h3>
              {skills.filter((s) => ['Python', 'Django', 'Django ORM', 'HTML & CSS', 'SQLite'].includes(s.name)).map((s) => <div className="meter-row" key={s.name}><div><span>{s.name}</span><span className="meter-level">{s.level}%</span></div><div className="meter-track"><motion.span initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: .15 }} /></div></div>)}
              <p className="meter-note">Illustrative self-assessment, not formal test scores.</p>
            </motion.div>
          </div>
          <div className="tools-strip"><span>TOOLS I WORK WITH</span><div><b>VS Code</b><b>Git</b><b>GitHub</b><b>Postman</b><b>Jupyter</b></div></div>
        </section>

        <section className="expertise section-wrap section-space">
          <SectionHeading eyebrow="03 / EXPERTISE" title="What I bring to the table." />
          <div className="expertise-grid">{expertise.map((item, i) => <motion.div className="expertise-item" key={item} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><span>{String(i + 1).padStart(2, '0')}</span><p>{item}</p><Check size={17} /></motion.div>)}</div>
        </section>

        <section className="experience section-wrap section-space" id="experience">
          <SectionHeading eyebrow="04 / EXPERIENCE" title="Where I've grown." description="Practical experience, collaboration and continuous improvement." />
          <motion.div className="timeline-card glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="timeline-marker"><BriefcaseBusiness size={21} /></div>
            <div className="timeline-content">
              <div className="timeline-top"><div><span className="card-index">INTERNSHIP</span><h3>Python Developer Intern</h3><p className="company">Sparks To Ideas <span>·</span> Ahmedabad</p></div><span className="date-chip">FEB 2026 — Present</span></div>
              <ul className="experience-points">
                <li>Worked on Python-based web application development using Django.</li>
                <li>Developed dynamic web application features and backend functionality.</li>
                <li>Implemented database operations, Django ORM, authentication and CRUD workflows.</li>
                <li>Worked with REST API integration and third-party services such as Razorpay.</li>
                <li>Collaborated with team members and strengthened debugging and problem-solving skills.</li>
              </ul>
              <div className="experience-tags"><span>Web Development</span><span>REST API Integration</span><span>Team Collaboration</span><span>Problem Solving</span></div>
            </div>
          </motion.div>
        </section>

        <section className="projects-section section-wrap section-space" id="projects">
          <SectionHeading eyebrow="05 / SELECTED WORK" title="Things I've built." description="A selection of projects that reflect my learning and hands-on development experience." />
          <div className="project-filters">{categories.map((c) => <button className={filter === c ? 'filter-active' : ''} key={c} onClick={() => setFilter(c)}>{c === 'All' ? 'All projects' : c === 'Full-stack web application' ? 'Full-stack' : 'Web apps'}</button>)}</div>
          <div className="projects-grid">{visibleProjects.map((project) => <motion.article layout key={project.number} className="project-card glass-card">
            <div className={`project-visual ${project.visual}`}><div className="visual-window"><div className="window-dots"><i /><i /><i /></div>{project.visual === 'hospital' ? <div className="hospital-visual"><div className="visual-cross">+</div><div className="visual-lines"><i /><i /><i /></div><div className="visual-stats"><b>BT</b><span>CARE / SYSTEM</span></div></div> : <div className="travel-visual"><Globe2 size={62} strokeWidth={1} /><span>EXPLORE<br />THE WORLD</span><div className="travel-route" /></div>}</div><span className="project-number">{project.number}</span></div>
            <div className="project-body"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-links"><a href={project.github || '#contact'} target={project.github ? '_blank' : undefined} rel="noreferrer">{project.github ? 'GitHub Repository' : 'Request details'} <ArrowUpRight size={16} /></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15} /></a>}</div></div>
          </motion.article>)}</div>
          <p className="project-footnote">Live demo links can be added once the projects are publicly deployed.</p>
        </section>

        <section className="education section-wrap section-space" id="education">
          <SectionHeading eyebrow="06 / EDUCATION" title="Learning is a journey." />
          <motion.div className="education-card glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="education-icon"><GraduationCap size={25} /></div><div><span className="card-index">POSTGRADUATE</span><h3>Master of Computer Applications (MCA)</h3><p>Completed</p></div><span className="education-status">COMPLETED</span>
          </motion.div>
        </section>

        <section className="contact-section section-wrap section-space" id="contact">
          <SectionHeading eyebrow="07 / GET IN TOUCH" title="Have a project in mind?" description="I’m open to discussing Python development opportunities, collaborations and interesting projects." />
          <div className="contact-grid">
            <div className="contact-info"><h3>Let's build<br /><span className="gradient-text">something useful.</span></h3><p>Have a question or opportunity? Send a message and I’ll get back to you.</p>
              <a className="contact-method" href={`mailto:${profile.email}`}><span><Mail /></span><div><small>EMAIL ME</small><b>{profile.email}</b></div><ArrowUpRight /></a>
              <a className="contact-method" href={`tel:${profile.phone}`}><span><Phone /></span><div><small>CALL ME</small><b>{profile.phoneDisplay}</b></div><ArrowUpRight /></a>
              <a className="contact-method" href={profile.whatsapp} target="_blank" rel="noreferrer"><span><MessageCircle /></span><div><small>WHATSAPP</small><b>Chat with me</b></div><ArrowUpRight /></a>
              <div className="map-frame"><iframe title="Map showing Vejalpur, Ahmedabad" src="https://www.google.com/maps?q=Vejalpur,Ahmedabad,Gujarat,India&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
            </div>
            <form className="contact-form glass-card" onSubmit={handleContact}><span className="card-index">SEND A MESSAGE</span><h3>Let's talk.</h3><label htmlFor="name">Your name</label><input id="name" name="name" placeholder="Enter your name" required /><label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@example.com" required /><label htmlFor="message">Your message</label><textarea id="message" name="message" rows={5} placeholder="Tell me a little about your idea..." required /><button className="button button-primary form-submit" type="submit">Send message <Send size={16} /></button>{sent && <p className="form-note">Your email app should open with your message ready to send.</p>}<p className="form-note">This form opens your default email application; it does not store submissions.</p></form>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">B<span>.</span></span><span>BHAVESH THAKOR<span className="brand-muted"></span></span></a><p>Designed & built with curiosity. © {new Date().getFullYear()} Bhavesh Thakor.</p><div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="#home" aria-label="Back to top"><ArrowUpRight /></a></div></footer>
    </div>
  )
}

export default App
