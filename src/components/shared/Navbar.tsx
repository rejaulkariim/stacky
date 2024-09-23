import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "../themes/ModeToggle";
import { Button, buttonVariants } from "../ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <header className="hidden w-full bg-background border-b border-border/60 h-16 md:flex justify-center items-center sticky z-50 top-0 inset-x-0">
      <MaxWidthWrapper>
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-1">
              <h1 className="text-base sm:text-lg font-bold text-foreground">
                Stacky
              </h1>
            </Link>
          </div>

          {/* Nav items */}
          <div className="flex justify-between items-center gap-x-10">
            {navItems.map((item) => (
              <Link
                href={item.route}
                key={item.id}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action button and theme switcher */}
          <div className="flex justify-center items-center gap-x-4">
            <Button>Download resume</Button>
            <ModeToggle />
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
