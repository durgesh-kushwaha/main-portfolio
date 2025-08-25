import Link from "next/link";
import Image from "next/image";
import ProjectCard from "../components/ui/ProjectCard";
import TypewriterEffect from "../components/ui/TypewriterEffect";
import { getSortedPostsData } from "../lib/markdown";
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { format } from 'date-fns';
import projectsData from '../content/projects/projects.json';
import certificatesData from '../content/certificates/certificates.json';

const formatDate = (dateString: string) => {
    try {
        return format(new Date(dateString), 'dd-MM-yyyy');
    } catch {
        return dateString;
    }
}

export default function Home() {
  const allPosts = getSortedPostsData();
  const recentPosts = allPosts.slice(0, 3);
  const projects = projectsData;
  const certificates = certificatesData;

  return (
    <div className="container">
      <section id="home" className="hero-section">
        <div className="hero-background"></div>
        <h1 className="hero-title">Hi, I&apos;m Durgesh Kushwaha</h1>
        <p className="hero-subtitle">
          I&apos;m a <TypewriterEffect />
        </p>
      </section>

      <section id="about" className="section">
         <div className="about-container">
          <div className="about-image-container">
            <Image
              src="/durgesh.webp"
              alt="Durgesh Kushwaha"
              width={350}
              height={350}
              className="about-image"
            />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I am a passionate Full Stack Developer with a keen interest in leveraging AI and Data Science to build innovative solutions. With a solid foundation in modern web technologies, I enjoy creating seamless, user-friendly applications that solve real-world problems. I&apos;m a lifelong learner, always exploring new tools and frameworks to enhance my skill set.
            </p>
            <a href="/Durgesh-Kushwaha-Resume.pdf" download className="resume-button">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
            <div className="skill-badge">JavaScript</div>
            <div className="skill-badge">TypeScript</div>
            <div className="skill-badge">React</div>
            <div className="skill-badge">Next.js</div>
            <div className="skill-badge">Node.js</div>
            <div className="skill-badge">Python</div>
            <div className="skill-badge">SQL</div>
            <div className="skill-badge">Docker</div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="cards-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section id="certificates" className="section">
        <h2 className="section-title">Certificates</h2>
        <div className="cards-container">
          {certificates.map((certificate, index) => (
            <div key={index} className="card">
              {certificate.image && (
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={400}
                    height={180}
                    className="project-thumbnail"
                  />
              )}
              <h3>{certificate.title}</h3>
              <div className="certificate-card-content">
                <p>
                  <strong>Issuer:</strong> {certificate.issuer}
                </p>
                <p>
                  <strong>Date:</strong> {formatDate(certificate.date)}
                </p>
              </div>
              <div className="project-button-wrapper">
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="recent-posts" className="section">
        <h2 className="section-title">Recent Posts</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {recentPosts.map(({ id, title, date, featuredImage, description }) => (
            <Link key={id} href={`/blogs/${id}`} className="blog-post-card">
              <div className="blog-post-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="date">{date}</span>
              </div>
              {featuredImage && (
                <Image
                  src={featuredImage}
                  alt={title}
                  width={150}
                  height={150}
                  className="blog-post-card-image"
                />
              )}
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
            <Link href="/blogs" className="view-all-btn">
                View All Posts
            </Link>
        </div>
      </section>

      <section id="contact" className="section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
            <div className="social-links">
                <h3>Let&apos;s Connect</h3>
                <p>
                    I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
                </p>
                <div className="social-icons-wrapper">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><FaGithub /></a>
                    <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LeetCode"><SiLeetcode /></a>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X.com"><FaTwitter /></a>
                    <a href="https://wa.me/7706820906" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp"><FaWhatsapp /></a>
                </div>
                <div className="contact-details">
                  <a href="mailto:durgeshcgc@gmail.com">durgeshcgc@gmail.com</a>
                  <a href="https://wa.me/7706820906" target="_blank" rel="noopener noreferrer">WhatsApp: +91 7706820906</a>
                </div>
            </div>
            <form action="https://formspree.io/f/xblarykl" method="POST" className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input id="name" type="text" name="name" className="form-input" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input id="email" type="email" name="email" className="form-input" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Mobile Number (Optional)</label>
                    <input id="phone" type="tel" name="phone" className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" name="message" className="form-textarea" required></textarea>
                </div>
                <button type="submit" className="form-submit-btn">Send Message</button>
            </form>
        </div>
    </section>
    </div>
  );
}
