import { projects } from "@/constants";
import Image from "next/image";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import SectionHeader from "../shared/SectionHeader";

const Projects = () => {
  return (
    <section id="work" className="py-10 md:pt-20 lg:pt-28">
      <MaxWidthWrapper>
        <SectionHeader
          title="Recent"
          span="work"
          description="Explore my latest projects, showcasing expertise in React.js, Next.js, and Tailwind CSS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item) => (
            <div
              key={item.title}
              className="hover:shadow-lg bg-accent/20 rounded-2xl p-2.5 border"
            >
              <div className="w-full h-56 overflow-hidden rounded-xl relative group cursor-pointer">
                <Image
                  src={item.image}
                  height={500}
                  width={1200}
                  alt="product"
                  className="w-full h-full object-cover group-hover:scale-125 duration-1000"
                />
              </div>

              <div className="mt-4 space-y-2 pb-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Projects;
