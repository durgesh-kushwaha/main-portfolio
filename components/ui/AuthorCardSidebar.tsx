import Image from 'next/image';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const AuthorCardSidebar = () => {
  return (
    <div className="author-card">
      <Image
        src="/durgesh.webp"
        alt="Durgesh Kushwaha"
        width={80}
        height={80}
        className="author-image"
      />
      <h4>Durgesh Kushwaha</h4>
      <p>Developer</p>
      <div className="social-icons-wrapper">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><FaGithub /></a>
        <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LeetCode"><SiLeetcode /></a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X.com"><FaTwitter /></a>
        <a href="https://wa.me/7706820906" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp"><FaWhatsapp /></a>
      </div>
      <div className="contact-details">
          <a href="mailto:durgeshcgc@gmail.com">durgeshcgc@gmail.com</a>
      </div>
    </div>
  );
};

export default AuthorCardSidebar;