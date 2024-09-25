"use client";

import { Separator } from "@/components/ui/separator";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/constants";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "../themes/ModeToggle";
import { Button, buttonVariants } from "../ui/button";

const MobileNav = () => {
  return (
    <nav className="block lg:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <HamburgerMenuIcon className="h-6 w-6" />
        </SheetTrigger>

        <SheetContent
          className="flex flex-col gap-6 bg-background md:hidden"
          side="left"
        >
          {/* Branding */}
          <Link href="/" className="flex items-center gap-1">
            <h1 className="text-base sm:text-lg font-bold text-foreground">
              Stacky
            </h1>
          </Link>

          <Separator className="border" />

          {/* Mobile navitems */}
          <div className="flex flex-col items-start gap-10 text-muted-foreground">
            {navItems.map((item) => {
              return (
                <SheetClose key={item.name} asChild>
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
                </SheetClose>
              );
            })}

            {/* Action button and theme switcher */}
            <div className="flex justify-center items-center gap-x-4">
              <Button>Download resume</Button>
              <ModeToggle />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
