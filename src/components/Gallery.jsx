import { useState } from 'react';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const imageBase = `${import.meta.env.BASE_URL}images/`;

  const images = [
    { src: `${imageBase}gallery-01.jpg.webp`, alt: 'Pre-wedding moment 1' },
    { src: `${imageBase}gallery-02.jpg.webp`, alt: 'Pre-wedding moment 2' },
    { src: `${imageBase}gallery-03.jpg.webp`, alt: 'Pre-wedding moment 3' },
    { src: `${imageBase}gallery-04.jpg.webp`, alt: 'Pre-wedding moment 4' },
    { src: `${imageBase}gallery-05.jpg.webp`, alt: 'Pre-wedding moment 5' },
    { src: `${imageBase}gallery-06.jpg.webp`, alt: 'Pre-wedding moment 6' },
    { src: `${imageBase}gallery-07.jpg.webp`, alt: 'Pre-wedding moment 7' },
    { src: `${imageBase}gallery-08.jpg.webp`, alt: 'Pre-wedding moment 8' },
    { src: `${imageBase}gallery-09.jpg.webp`, alt: 'Pre-wedding moment 9' },
  ];

  const close = () => setSelectedIndex(null);
  const next = () => setSelectedIndex((i) => (i + 1) % images.length);
  const prev = () => setSelectedIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <>
      <section id="gallery" className="py-24 md:py-28 bg-white/35">
        <div className="section-shell">
          <div className="text-center mb-14 animate-riseIn">
            <h2 className="section-title">Gallery</h2>
            <p className="section-subtitle">Some of our favorite moments together.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <button
                key={image.src}
                onClick={() => setSelectedIndex(index)}
                className="group relative overflow-hidden rounded-2xl border border-amber-100 shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 md:h-64 object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-slate-950/90 p-4 flex items-center justify-center" onClick={close}>
          <div className="relative max-w-5xl w-full">
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="w-full max-h-[82vh] object-contain rounded-2xl"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 text-slate-900"
            >
              {'<'}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 text-slate-900"
            >
              {'>'}
            </button>
            <button
              onClick={close}
              className="absolute top-2 right-2 h-10 w-10 rounded-full bg-white/85 text-slate-900 font-bold"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
