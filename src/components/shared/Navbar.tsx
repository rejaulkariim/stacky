import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "../themes/ModeToggle";
import { Button, buttonVariants } from "../ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="w-full bg-background border-b border-border/60 h-16 flex justify-center items-center sticky z-50 top-0 inset-x-0">
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
          <div className="hidden lg:flex justify-between items-center gap-x-6">
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
          <div className="hidden lg:flex justify-center items-center gap-x-2">
            <Button>Resume</Button>
            <ModeToggle />
          </div>

          <MobileNav />
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
