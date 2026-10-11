import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

import "../Styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <motion.div
        className="footer-main"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >

        {/* BRAND */}
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <a href="#home" className="footer-logo">
            CHHABI
            <span>BEAUTY STUDIO</span>
          </a>

          <p>
            Beauty, thoughtfully redefined.
            <br />
            Bhopal • India
          </p>
        </motion.div>


        {/* NAVIGATION */}
        <motion.div
          className="footer-navigation"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <span>NAVIGATE</span>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </motion.div>


        {/* CONNECT */}
        <motion.div
          className="footer-connect"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
        >
          <span>CONNECT</span>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 4 }}
          >
            Instagram
            <FiArrowUpRight />
          </motion.a>

          <motion.a
            href="tel:+919999999999"
            whileHover={{ x: 4 }}
          >
            +91 99999 99999
            <FiArrowUpRight />
          </motion.a>

          <motion.a
            href="mailto:hello@Chhabibeautystudio.com"
            whileHover={{ x: 4 }}
          >
            Email us
            <FiArrowUpRight />
          </motion.a>
        </motion.div>

      </motion.div>


      {/* FOOTER BOTTOM */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
      >
        <p>© 2026 Chhabi Beauty Studio. All rights reserved.</p>

        <p>Designed & developed with Care.</p>
      </motion.div>

    </footer>
  );
}

export default Footer;