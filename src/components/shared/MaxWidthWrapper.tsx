import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-32 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
