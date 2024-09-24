import { experience } from "@/constants";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import SectionHeader from "../shared/SectionHeader";

const Experience = () => {
  return (
    <section id="experience" className="py-10 md:py-20">
      <MaxWidthWrapper>
        <SectionHeader
          title="Work"
          span="experience"
          description="Explore my professional journey and see how I’ve contributed to various projects through innovative development and teamwork."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="border rounded-lg hover:bg-accent/40 transition-color duration-300 p-4"
            >
              <div className="flex flex-col">
                <div className="space-y-2">
                  <h1 className="font-bold text-2xl text-foreground">
                    {exp.jobTitle}
                  </h1>
                  <h2 className="text-foreground">
                    {exp.company} | {exp.location}
                  </h2>
                  <p className="text-foreground text-sm">{exp.duration}</p>
                  <p className="text-foreground">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Experience;
