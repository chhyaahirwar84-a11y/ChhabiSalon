import { motion } from "motion/react";
import { FiPlus } from "react-icons/fi";
import "../Styles/faq.css";

const faqs = [
  {
    question: "Do I need to book an appointment?",
    answer:
      "We recommend booking an appointment in advance so we can give you our full attention and reserve the right time for your service.",
  },
  {
    question: "How early should I book my bridal appointment?",
    answer:
      "For bridal services, we recommend getting in touch as early as possible so we can discuss your requirements and plan your complete bridal experience.",
  },
  {
    question: "Do you offer customized beauty packages?",
    answer:
      "Yes. Our services can be customized based on your requirements, occasion and preferred beauty look.",
  },
  {
    question: "Can I have a consultation before booking?",
    answer:
      "Absolutely. You can contact us to discuss your preferred look, services and requirements before confirming your appointment.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "Simply use the booking section below or contact us directly through WhatsApp or phone to schedule your appointment.",
  },
];

function FAQ() {
  return (
    <section className="faq" id="faq">
      <motion.div
        className="faq-heading"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <p className="section-label">GOOD TO KNOW</p>

        <h2>
          Frequently
          <span>asked questions.</span>
        </h2>

        <p>
          Everything you need to know before your
          visit to Chhabi.
        </p>
      </motion.div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <motion.details
            className="faq-item"
            key={index}
            initial={{
              opacity: 0,
              x: 40,
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
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <summary>
              <span>{faq.question}</span>

              <FiPlus className="faq-icon" />
            </summary>

            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </motion.details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;