import Link from "next/link";
import { ModeToggle } from "../themes/ModeToggle";
import { Button } from "../ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  const navItems = [
    { id: "1", name: "About", route: "/aboaut" },
    {
      id: "2",
      name: "Project",
      route: "/project",
    },
    {
      id: "3",
      name: "Testimonails",
      route: "/testimonails",
    },
    {
      id: "4",
      name: "Project",
      route: "/project",
    },
  ];
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
                className="uppercase text-muted-foreground hover:text-foreground duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action button and theme switcher */}
          <div className="flex justify-center items-center gap-x-4">
            <Button>Contact</Button>
            <ModeToggle />
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
