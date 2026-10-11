import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiPhone,
  FiMapPin,
  FiInstagram,
} from "react-icons/fi";

import "../Styles/contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      {/* LEFT SIDE */}
      <motion.div
        className="contact-intro"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p className="section-label">GET IN TOUCH</p>

        <h2>
          Ready to feel
          <span>beautiful?</span>
        </h2>

        <p className="contact-text">
          Whether you're planning your next beauty appointment
          or your wedding day, we'd love to hear from you.
        </p>

        <motion.a
          href="tel:+919999999999"
          className="contact-phone"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
        >
          +91 99999 99999
          <FiArrowUpRight />
        </motion.a>
      </motion.div>


      {/* RIGHT SIDE */}
      <motion.div
        className="contact-details"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.9,
          delay: 0.15,
          ease: "easeOut",
        }}
      >

        {/* PHONE */}
        <motion.div
          className="contact-detail"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FiPhone />

          <div>
            <span>CALL US</span>
            <a href="tel:+919999999999">
              +91 99999 99999
            </a>
          </div>
        </motion.div>


        {/* LOCATION */}
        <motion.div
          className="contact-detail"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FiMapPin />

          <div>
            <span>VISIT US</span>
            <p>Bhopal, Madhya Pradesh</p>
          </div>
        </motion.div>


        {/* INSTAGRAM */}
        <motion.div
          className="contact-detail"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FiInstagram />

          <div>
            <span>FOLLOW US</span>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              @Chhabibeautystudio
            </a>
          </div>
        </motion.div>


        {/* BOOKING BUTTON */}
        <motion.a
          href="https://wa.me/919999999999"
          className="contact-booking"
          whileHover={{
            y: -4,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.97,
          }}
          transition={{ duration: 0.25 }}
        >
          Book an Appointment
          <FiArrowUpRight />
        </motion.a>

      </motion.div>

    </section>
  );
}

export default Contact;