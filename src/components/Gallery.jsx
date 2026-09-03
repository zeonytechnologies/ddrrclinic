import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryImages } from '../data/gallery';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-brand-teal font-bold tracking-wider text-sm mb-4 block">OUR FACILITY</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-deep-navy">
            Clinic Gallery
          </h2>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid bg-brand-soft-gray border border-gray-100 shadow-sm"
              onClick={() => openLightbox(index)}
            >
              {/* Aspect ratio varied for masonry effect */}
              <div className={`w-full ${index % 3 === 0 ? 'aspect-[4/5]' : index % 2 === 0 ? 'aspect-square' : 'aspect-[4/3]'} flex items-center justify-center text-brand-teal text-sm font-medium`}>
                Gallery Image {image.id} Placeholder
              </div>
              
              {/* <img src={image.src} alt={image.alt} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" /> */}
              
              <div className="absolute inset-0 bg-brand-deep-navy/0 group-hover:bg-brand-deep-navy/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110 bg-white/20 p-3 rounded-full backdrop-blur-sm text-white">
                  <ZoomIn size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white p-2 transition-colors z-50"
            >
              <X size={32} />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-8 text-white/50 hover:text-white p-2 transition-colors z-50 bg-black/20 rounded-full hover:bg-black/40"
            >
              <ChevronLeft size={40} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-8 text-white/50 hover:text-white p-2 transition-colors z-50 bg-black/20 rounded-full hover:bg-black/40"
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[85vh] w-full rounded-lg overflow-hidden bg-brand-dark-navy flex items-center justify-center border border-brand-teal/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image inside lightbox */}
              <div className="w-full aspect-video flex items-center justify-center text-brand-teal font-medium">
                {selectedImage.alt} Placeholder (Large)
              </div>
              {/* <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-full object-contain" /> */}
              
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-center">
                {selectedImage.alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
