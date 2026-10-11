import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import "../Styles/services.css";

const services = [
  {
    number: "01",
    title: "Hair",
    description:
      "Cuts, styling and treatments designed around your individual look.",
    services: "Cut & Style • Hair Spa • Treatments",
  },
  {
    number: "02",
    title: "Skin",
    description:
      "Thoughtful skincare rituals that leave your skin refreshed and radiant.",
    services: "Facials • Cleanup • Skin Care",
  },
  {
    number: "03",
    title: "Makeup",
    description:
      "Beautiful, effortless makeup for celebrations, events and special moments.",
    services: "Party • Engagement • Editorial",
  },
  {
    number: "04",
    title: "Bridal",
    description:
      "Complete bridal beauty experiences created especially for your big day.",
    services: "Bridal Makeup • Hair • Pre-Bridal",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <motion.div
        className="services-intro"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div>
          <p className="section-label">OUR SERVICES</p>

          <h2>
            Everything you need
            <span>to feel your best.</span>
          </h2>
        </div>

        <p className="services-intro-text">
          From everyday beauty rituals to your most important moments,
          our services are designed with care, expertise and attention
          to detail.
        </p>
      </motion.div>

      <div className="services-list">
        {services.map((service, index) => (
          <motion.article
            className="service-item"
            key={service.number}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: "easeOut",
            }}
          >
            <span className="service-number">
              {service.number}
            </span>

            <div className="service-main">
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <span className="service-types">
                {service.services}
              </span>
            </div>

            <motion.a
              href="#contact"
              className="service-link"
              whileHover={{
                scale: 1.1,
                rotate: 45,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <FiArrowUpRight />
            </motion.a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Services;