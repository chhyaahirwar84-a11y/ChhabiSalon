import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import "../Styles/testimonials.css";

const testimonials = [
  {
    quote:
      "The entire experience felt so personal and effortless. I loved how my look turned out.",
    name: "Ananya Sharma",
    detail: "Bridal Client",
  },
  {
    quote:
      "From the consultation to the final styling, everything was beautifully done. Highly recommended.",
    name: "Riya Mehta",
    detail: "Makeup & Hair Client",
  },
  {
    quote:
      "CHHABI has become my go-to beauty studio. The service, attention to detail and atmosphere are amazing.",
    name: "Simran Kapoor",
    detail: "Regular Client",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <motion.div
        className="testimonials-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div>
          <p className="section-label">CLIENT STORIES</p>

          <h2>
            Loved by
            <span>our clients.</span>
          </h2>
        </div>

        <p className="testimonials-intro">
          Every experience is personal. Here's what some of
          our clients have to say about their time at CHHABI.
        </p>
      </motion.div>

      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <motion.article
            className="testimonial"
            key={testimonial.name}
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            <span className="testimonial-number">
              0{index + 1}
            </span>

            <div className="testimonial-content">
              <span className="testimonial-mark">“</span>

              <p className="testimonial-quote">
                {testimonial.quote}
              </p>

              <div className="testimonial-client">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.detail}</span>
              </div>
            </div>

            <motion.div
              whileHover={{
                rotate: 45,
                scale: 1.1,
              }}
              transition={{ duration: 0.3 }}
            >
              <FiArrowUpRight className="testimonial-arrow" />
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;