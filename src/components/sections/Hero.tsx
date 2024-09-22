import { cn } from "@/lib/utils";
import { Sparkle } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex justify-center items-center">
      <MaxWidthWrapper>
        <div className="max-w-4xl mx-auto text-center space-y-3">
          {/* you can add your badge content here */}
          <Badge variant="outline" className="py-1 text-muted-foreground">
            <Sparkle className="size-4 mr-1 text-amber-500" /> Dynamic Web
            Experience with React
          </Badge>

          {/* you can add your title here */}
          <h1 className="relative tracking-tight text-balance font-bold !leading-tight text-foreground text-4xl md:text-5xl lg:text-6xl">
            Transforming idea into
            <br />
            <span className="text-purple-500">Seamless User Experiences</span>
          </h1>

          {/* you can add your subtitle or description here */}
          <p className="md:text-lg md:max-w-2xl mx-auto text-foreground">
            I&apos;m Rejaul, a React developer passionate about crafting
            responsive, modular applications that scale.
          </p>

          {/* you can add your button content here */}
          <div className="pt-8 flex justify-center items-center gap-x-4">
            <Link
              href=""
              className={cn(
                buttonVariants({ variant: "default", className: "px-12 py-6" })
              )}
            >
              See my work
            </Link>
            <Link
              href=""
              className={cn(
                buttonVariants({ variant: "outline", className: "px-12 py-6" })
              )}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
