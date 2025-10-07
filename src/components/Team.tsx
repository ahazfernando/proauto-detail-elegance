const teamMembers = [
  {
    name: "Marcus Rodriguez",
    role: "Master Detailer",
    image: "/team-1.jpg",
  },
  {
    name: "Sarah Thompson",
    role: "Service Manager",
    image: "/team-2.jpg",
  },
  {
    name: "David Chen",
    role: "Senior Technician",
    image: "/team-3.jpg",
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-automotive-light">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of certified professionals brings years of experience and passion for automotive excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative overflow-hidden rounded-3xl mb-4 hover-lift">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-automotive-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
