import { Hero } from "@/components/home/Hero";
import { WorkGrid } from "@/components/home/WorkGrid";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { Experience } from "@/components/home/Experience";
import { GithubTracker } from "@/components/home/GithubTracker";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-16">
      <Hero />
      {/* <ClientMarquee /> */}
        <div id="work">
        <Experience />
      </div>
      <GithubTracker />
      <div id="projects">
        <WorkGrid />
      </div>
    
      <div id="contact">
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
