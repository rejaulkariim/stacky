import Approach from "@/components/sections/Approach";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      {/* <About/> */}
      <Approach />
      <Testimonials />
    </main>
  );
}
