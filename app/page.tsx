import { HeroParallax } from "@/components/ui/hero-parallax";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Home() {
  const products = [
    {
      title: "Mukarramah.in",
      link: "https://mukarramah.in",
      thumbnail: "/mukarramah.png",
    },

    {
      title: "Trademark",
      link: "https://services-gray.vercel.app",
      thumbnail: "/trademark.png",
    },
    {
      title: "Portfolio",
      link: "https://daim.is-a.dev",
      thumbnail: "/portfolio.png",
    },
    {
      title: "Tech Hub",
      link: "https://tech-hub-ak.vercel.app/",
      thumbnail: "/techhub.png",
    },
    {
      title: "Chat & Share",
      link: "http://4.213.179.118/",
      thumbnail: "/chat.png",
    },
    {
      title: "Smart Parking",
      link: "https://smart-parking-daim.is-a-fullstack.dev",
      thumbnail: "/smart-parking.png",
    },
  ];

  const items = [
    {
      name: "Sarah Chen",
      title: "CTO at TechVision Inc.",
      quote: "Working with this team was transformative for our business. Their expertise in cloud architecture and AI integration helped us scale our operations efficiently. The attention to detail and commitment to quality is outstanding.",
    },
    {
      name: "Michael Rodriguez",
      title: "Founder of InnovateCo",
      quote: "The full-stack development capabilities of this team are exceptional. They took our complex requirements and delivered a robust, user-friendly solution that exceeded our expectations. Their technical expertise and professional approach make them a valuable partner.",
    },
    {
      name: "Emily Thompson",
      title: "Director of Digital, FutureWorks",
      quote: "The team's ability to understand our business needs and translate them into technical solutions is remarkable. Their work on our digital transformation project was instrumental in modernizing our operations.",
    },
    {
      name: "David Park",
      title: "CEO of StartupX",
      quote: "From concept to execution, their development process was transparent and efficient. They didn't just build what we asked for - they contributed valuable insights that improved our product significantly.",
    },
  ];
  return (
    <div className="h-screen w-screen">
      <HeroParallax products={products}></HeroParallax>
      <div className="flex flex-col items-center justify-center pb-10 pt-4 px-4 bg-background/50">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl">
            Comprehensive software solutions tailored to your business needs. We combine technical expertise with industry best practices to deliver exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Full Stack Development</h3>
            <p className="text-muted-foreground">End-to-end web application development using cutting-edge technologies and best practices for scalable solutions.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Cloud Architecture</h3>
            <p className="text-muted-foreground">Robust cloud solutions with optimized infrastructure design, deployment, and management for maximum efficiency.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
            <p className="text-muted-foreground">Smart solutions powered by artificial intelligence and machine learning to drive innovation and automation.</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-muted-foreground/25 to-transparent w-full absolute top-0" />
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-8">
            What Clients Say
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mb-12">
            Discover why businesses trust us with their digital transformation journey. Read what our clients have to say about our services and commitment to excellence.
          </p>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-muted-foreground/25 to-transparent w-full absolute bottom-0" />
      </div>

      <InfiniteMovingCards items={items} />
    </div>
  );
}
