import { useState } from 'react';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [carouselImage, setCarouselImage] = useState(0);
  
  const images = [
    { src: '/images/gallery-01.jpg.webp', alt: 'Pre-wedding moment 1' },
    { src: '/images/gallery-02.jpg.webp', alt: 'Pre-wedding moment 2' },
    { src: '/images/gallery-03.jpg.webp', alt: 'Pre-wedding moment 3' },
    { src: '/images/gallery-04.jpg.webp', alt: 'Pre-wedding moment 4' },
    { src: '/images/gallery-05.jpg.webp', alt: 'Pre-wedding moment 5' },
    { src: '/images/gallery-06.jpg.webp', alt: 'Pre-wedding moment 6' },
    { src: '/images/gallery-07.jpg.webp', alt: 'Pre-wedding moment 7' },
    { src: '/images/gallery-08.jpg.webp', alt: 'Pre-wedding moment 8' },
    { src: '/images/gallery-09.jpg.webp', alt: 'Pre-wedding moment 9' },
  ];

  const nextImage = () => setCarouselImage((carouselImage + 1) % images.length);
  const prevImage = () => setCarouselImage((carouselImage - 1 + images.length) % images.length);
  const closeCarousel = () => {
    setSelectedIndex(null);
    setCarouselImage(0);
  };

  return (
    <>
  <section id="gallery" className="py-24 bg-gradient-to-b from-lavender/30 via-rose/20 to-sage/20 floral-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-wedding-float">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 bg-gradient-to-r from-gold via-rose to-lavender bg-clip-text text-transparent drop-shadow-2xl">Our Memories</h2>
            <p className="text-xl md:text-2xl text-ivory/80 max-w-2xl mx-auto">Cherished moments from our journey together</p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4 select-none">
            {images.map((image, index) => (
              <div 
                key={index}
                className="break-inside-avoid group relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 brightness-100 group-hover:brightness-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                  <div>
                    <h4 className="text-gold font-serif text-xl mb-1 font-medium">Moment #{index + 1}</h4>
                    <p className="text-ivory/90 text-sm font-light">Click to view full</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Carousel Lightbox */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 bg-navy/95 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={closeCarousel}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 z-10 w-12 h-12 md:w-16 md:h-16 bg-ivory/20 hover:bg-gold/30 backdrop-blur-xl rounded-full flex items-center justify-center text-ivory text-2xl md:text-3xl font-serif transition-all duration-300 hover:scale-110 shadow-2xl"
            >
              ‹
            </button>

            {/* Main Image */}
            <img 
              src={images[carouselImage].src}
              alt={images[carouselImage].alt}
              className="max-w-full max-h-full object-contain rounded-3xl shadow-3xl animate-scale-in"
            />

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 z-10 w-12 h-12 md:w-16 md:h-16 bg-ivory/20 hover:bg-gold/30 backdrop-blur-xl rounded-full flex items-center justify-center text-ivory text-2xl md:text-3xl font-serif transition-all duration-300 hover:scale-110 shadow-2xl"
            >
              ›
            </button>

            {/* Close Button */}
            <button
              onClick={closeCarousel}
              className="absolute top-6 right-6 md:top-8 md:right-8 z-20 w-12 h-12 md:w-14 md:h-14 bg-ivory/30 hover:bg-gold backdrop-blur-xl rounded-full flex items-center justify-center text-navy text-2xl font-bold transition-all duration-300 hover:scale-110 shadow-2xl"
            >
              ×
            </button>

            {/* Thumbnail Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselImage(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === carouselImage 
                      ? 'w-8 bg-gold shadow-lg' 
                      : 'w-3 h-3 bg-ivory/50 hover:bg-ivory/80'
                  }`}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-8 left-8 bg-navy/80 backdrop-blur-xl px-4 py-2 rounded-2xl text-ivory/90 font-medium text-sm">
              {carouselImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scale-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default Gallery;
