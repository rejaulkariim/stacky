import Approach from "@/components/sections/Approach";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      {/* <About/> */}
      <Approach />
      <Testimonials />
    </main>
  );
}
