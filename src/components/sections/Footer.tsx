import { cn } from "@/lib/utils";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 md:pt-20 md:pb-10">
      <MaxWidthWrapper>
        <div className="max-w-4xl mx-auto flex justify-center items-center">
          <div className="space-y-4 text-center">
            <h2 className="relative tracking-tight text-balance font-bold !leading-tight text-foreground text-3xl md:text-4xl lg:text-5xl">
              Transform Your Ideas into Reality!
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground">
              Explore my portfolio to see how I can help bring your web
              development ideas to life with stunning, functional designs.
            </p>

            <div className="pt-4">
              <Link
                href=""
                className={cn(
                  buttonVariants({
                    variant: "default",
                    className: "px-12 py-6",
                  })
                )}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 md:flex-row md:justify-between items-center mt-20">
          <div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          {/* Here you can add your social media link */}
          <div className="flex items-center gap-x-4">
            <Link href="/" className="p-2 border rounded-md">
              <GitHubLogoIcon className="size-6" />
            </Link>
            <Link href="/" className="p-2 border rounded-md">
              <TwitterLogoIcon className="size-6" />
            </Link>
            <Link href="/" className="p-2 border rounded-md">
              <LinkedInLogoIcon className="size-6" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
