import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Luxury car interior with premium leather seats" },
    { src: gallery2, alt: "Professional detailing of car paint surface" },
    { src: gallery3, alt: "Premium wheel cleaning service" },
    { src: gallery4, alt: "Modern luxury car dashboard and interior" },
    { src: gallery5, alt: "Interior vacuuming and cleaning service" },
    { src: gallery6, alt: "Showroom quality car finish after detailing" },
  ];

  return (
    <section className="py-20 bg-background">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl shadow-lg hover-lift group h-80"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-automotive-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
