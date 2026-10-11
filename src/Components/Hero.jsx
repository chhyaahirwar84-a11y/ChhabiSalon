import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import "../Styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">

        <motion.p
          className="hero-label"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          HAIR • SKIN • MAKEUP • BRIDAL
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.35,
            ease: "easeOut",
          }}
        >
          Beauty,
          <span>redefined.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut",
          }}
        >
          A modern beauty studio creating effortless looks
          that make you feel confident, beautiful and completely yourself.
        </motion.p>

        <motion.a
          href="#services"
          className="hero-button"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: "easeOut",
          }}
          whileHover={{
            y: -4,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          Explore Services
          <FiArrowUpRight />
        </motion.a>

      </div>

      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.2,
        }}
      >
        <span>EST. 2026</span>
        <span>Bhopal • India</span>
      </motion.div>
    </section>
  );
}

export default Hero;