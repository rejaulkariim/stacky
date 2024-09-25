import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import { buttonVariants } from "../ui/button";

const About = () => {
  return (
    <section id="about" className="py-10 md:py-20">
      <MaxWidthWrapper>
        <div className="flex flex-col lg:flex-row justify-between gap-3 mt-20">
          <div className="w-full lg:w-1/2">
            <Image
              src="/assets/images/project.png"
              height={500}
              width={500}
              alt="about"
              className="w-full rounded-2xl"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 p-6">
            <h1 className="text-3xl md:text-5xl font-bold">About Me</h1>
            <p className="text-foreground">
              I am a passionate and experienced web developer with expertise in
              building high-quality web applications using modern technologies
              like React, Next.js, and Tailwind CSS. My mission is to create
              seamless user experiences and deliver scalable solutions for
              startups and established businesses.
            </p>
            <p className="text-foreground">
              With a strong background in both frontend and backend development,
              I enjoy tackling challenging problems and transforming ideas into
              functional products. I am also a firm believer in the power of
              collaboration, always eager to learn from others and share my
              knowledge.
            </p>

            <div>
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    className: "px-12 py-6",
                  })
                )}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
