import { motion } from "motion/react";
import "../Styles/gallery.css";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
    alt: "Beauty styling",
    className: "gallery-large",
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85",
    alt: "Beauty portrait",
    className: "gallery-small",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=85",
    alt: "Hair styling",
    className: "gallery-small",
  },
  {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85",
    alt: "Makeup products",
    className: "gallery-wide",
  },
];

function Gallery() {
  return (
    <section className="gallery" id="gallery">

      <motion.div
        className="gallery-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div>
          <p className="section-label">OUR WORK</p>

          <h2>
            Beauty in
            <span>every detail.</span>
          </h2>
        </div>

        <p className="gallery-intro">
          A glimpse into the looks, details and moments
          we create at Chhabi.
        </p>
      </motion.div>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <motion.div
            className={`gallery-item ${image.className}`}
            key={index}
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
            />

            <motion.div
              className="gallery-overlay"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span>CHHABI BEAUTY STUDIO</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Gallery;