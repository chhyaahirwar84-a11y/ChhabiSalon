import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import "../Styles/bridal.css";

function Bridal() {
  return (
    <section className="bridal" id="bridal">

      <motion.div
        className="bridal-image"
        initial={{
          opacity: 0,
          scale: 0.94,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 1.1,
          ease: "easeOut",
        }}
      >
        <img
          src="https://curlsandscissors.co.in/assets/bridal_makeup_premium.png"
  alt="Bridal beauty experience"
        />

        <div className="bridal-image-overlay"></div>

        <motion.span
          className="bridal-number"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
        >
          02
        </motion.span>
      </motion.div>

      <motion.div
        className="bridal-content"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.9,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <p className="section-label">
          THE SIGNATURE EXPERIENCE
        </p>

        <h2>
          Your day.
          <span>Your beauty.</span>
        </h2>

        <p className="bridal-description">
          From the first consultation to the final touch, our bridal
          experience is designed to make you feel calm, confident and
          beautifully yourself on one of life's most important days.
        </p>

        <motion.div
          className="bridal-services"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.45,
          }}
        >
          <span>Bridal Makeup</span>
          <span>Hair Styling</span>
          <span>Pre-Bridal Care</span>
          <span>Personal Consultation</span>
        </motion.div>

        <motion.a
          href="#contact"
          className="bridal-button"
          whileHover={{
            y: -4,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          Plan Your Bridal Look
          <FiArrowUpRight />
        </motion.a>
      </motion.div>

    </section>
  );
}

export default Bridal;