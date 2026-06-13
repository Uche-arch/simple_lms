  "use client";

  import { X } from "lucide-react";
  import { useState } from "react";

  import { Button } from "@/components/ui/button";
  import { cn } from "@/lib/utils";
  import { LucideIcon } from "lucide-react";

  // interface Banner1Props {
  //   title: string;
  //   description: string;
  //   linkText: string;
  //   linkUrl: string;
  //   icon?: LucideIcon;
  //   defaultVisible?: boolean;
  //   className?: string;
  // }

  interface Banner1Props {
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  icon?: LucideIcon;
  defaultVisible?: boolean;
  className?: string;
}

  const Banner1 = ({
    title = "Version 2.0 is now available!",
    description = "Read the full release notes",
    linkText = "here",
    linkUrl = "#",
     icon: Icon,
    defaultVisible = true,
    className,
  }: Banner1Props) => {
    const [isVisible, setIsVisible] = useState(defaultVisible);

    const handleClose = () => {
      setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
      <section
        className={cn("w-full border-b bg-background px-4 py-3", className)}
      >
        <div className="flex items-center justify-between gap-2">
          {/* <div className="flex-1 text-center">
            <span className="text-sm">
              <span className="font-medium">{title}</span>{" "}
              <span className="text-muted-foreground">
                {description}{" "}
                <a
                  href={linkUrl}
                  className="underline underline-offset-2 hover:text-foreground"
                  target="_blank"
                >
                  {linkText}
                </a>
                .
              </span>
            </span>
          </div> */}

          <div className="flex flex-1 items-center justify-center gap-2 text-center">
  {Icon && (
    <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
  )}

  <span className="text-sm text-muted-foreground font-medium">
    {description}
  </span>
</div>

          <Button
            variant="ghost"
            size="icon"
            className="-mr-2 h-8 w-8 flex-none"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </section>
    );
  };

  export { Banner1 };
