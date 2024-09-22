import { projects } from "@/constants";
import Image from "next/image";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const Projects = () => {
  return (
    <section className="py-10 md:pt-20 lg:pt-28">
      <MaxWidthWrapper>
        <div className="text-center">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold">
            My <span className="text-indigo-600">projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {projects.map((item) => (
            <div
              key={item.title}
              className="max-w-sm hover:shadow-lg bg-accent/20 rounded-2xl p-3"
            >
              <div className="w-full h-52 overflow-hidden rounded-xl relative group cursor-pointer">
                <Image
                  src={item.image}
                  height={500}
                  width={1200}
                  alt="product"
                  className="w-full h-full object-cover group-hover:scale-125 duration-1000"
                />
              </div>
              
              <div className="mt-4 space-y-2">
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
