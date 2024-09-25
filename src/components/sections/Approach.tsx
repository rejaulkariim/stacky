import { approach } from "@/constants";
import Image from "next/image";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import SectionHeader from "../shared/SectionHeader";

const Approach = () => {
  return (
    <section id="myapproach" className="py-10 md:py-20">
      <MaxWidthWrapper>
        <SectionHeader
          title="My"
          span="approach"
          description="I deliver tailored solutions that prioritize user experience and performance, ensuring each project is efficient, scalable, and aligned with client goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {approach.map((item) => (
            <div
              key={item.title}
              className="border p-6 rounded-2xl hover:bg-accent/20 transition-colors duration-500 group"
            >
              <div>
                <Image
                  src={item.icon}
                  height={100}
                  width={100}
                  alt={item.title}
                  className="object-cover h-20 w-20 p-2 rounded-md"
                />
                <div className="mt-6 space-y-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Approach;
