const Gallery = () => {
  const images = [
    { src: "/gallery-1.jpg", alt: "Luxury car interior with premium leather seats" },
    { src: "/gallery-2.jpg", alt: "Professional detailing of car paint surface" },
    { src: "/gallery-3.jpg", alt: "Premium wheel cleaning service" },
    { src: "/gallery-4.jpg", alt: "Modern luxury car dashboard and interior" },
    { src: "/gallery-5.jpg", alt: "Interior vacuuming and cleaning service" },
    { src: "/gallery-6.jpg", alt: "Showroom quality car finish after detailing" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Gallery of Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the quality and precision we bring to every vehicle. From interior detailing to exterior perfection.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Large feature image - spans 2 columns and 2 rows */}
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl shadow-lg hover-lift group">
            <img 
              src={images[0].src} 
              alt={images[0].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-automotive-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Tall image - spans 1 column and 2 rows */}
          <div className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl shadow-lg hover-lift group">
            <img 
              src={images[1].src} 
              alt={images[1].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-automotive-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Regular image */}
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-lg hover-lift group">
            <img 
              src={images[2].src} 
              alt={images[2].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-automotive-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Regular image */}
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-lg hover-lift group">
            <img 
              src={images[3].src} 
              alt={images[3].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-automotive-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Wide image - spans 2 columns */}
          <div className="col-span-2 row-span-1 relative overflow-hidden rounded-2xl shadow-lg hover-lift group">
            <img 
              src={images[4].src} 
              alt={images[4].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-automotive-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Regular image */}
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-lg hover-lift group">
            <img 
              src={images[5].src} 
              alt={images[5].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-automotive-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
