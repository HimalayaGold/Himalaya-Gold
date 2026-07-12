import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section";
}

export function Container({ as: Tag = "div", className, children, ...props }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-(--container-content) px-4 sm:px-6 lg:px-8", className)} {...props}>
      {children}
    </Tag>
  );
}