import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import "../Styles/about.css";

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85"
          alt="Beauty studio"
        />

        <div className="about-image-label">
          <span>01</span>
          <span>THE CHHABI EXPERIENCE</span>
        </div>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.9,
          delay: 0.15,
          ease: "easeOut",
        }}
      >
        <p className="section-label">ABOUT CHHABI</p>

        <h2>
          Beauty is
          <span>personal.</span>
        </h2>

        <p className="about-description">
          At Chhabi Beauty Studio, we believe beauty is not about following a standard.
          It's about discovering what makes you feel confident, comfortable
          and completely yourself.
        </p>

        <p className="about-description">
          From everyday hair and skincare to your most memorable occasions,
          our team combines expertise, thoughtful service and a relaxed
          atmosphere to create an experience you'll want to return to.
        </p>

        <motion.a
          href="#contact"
          className="about-link"
          whileHover={{
            y: -3,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          Discover CHHABI
          <FiArrowUpRight />
        </motion.a>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
        >
          <div className="about-stat">
            <strong>8+</strong>
            <span>Years Experience</span>
          </div>

          <div className="about-stat">
            <strong>2K+</strong>
            <span>Happy Clients</span>
          </div>

          <div className="about-stat">
            <strong>15+</strong>
            <span>Beauty Services</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;