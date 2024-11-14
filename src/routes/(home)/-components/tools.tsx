import { useRouter } from "@tanstack/react-router";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/helpers/cn";

const TOOLS = [
  {
    icon: "https://www.svgrepo.com/show/89294/letter.svg",
    title: "Letter Generator",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
    href: "/tools/letter-generator",
  },
  {
    icon: "https://www.svgrepo.com/show/423007/certificate-award-trophy.svg",
    title: "Mass Certificate Generator",
    description: "Generate multiple certificates at once",
    href: "/tools/mass-certificate-generator",
  },

  {
    icon: "https://www.svgrepo.com/show/441440/folder-plus.svg",
    title: "More Tools",
    description:
      "coming soon...",
    href: "",
  },
] as const;

const ToolsSection = () => {
  const { navigate } = useRouter();
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
            Toolkit Hub
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg">
            Welcome to the Aces Lab—a dedicated toolkit made for ACES
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
          {TOOLS.map(({ icon, title, description, href }, index) => (
            <Card
              onClick={() => navigate({
                to: href,
              })}
              key={title}
              className={cn("bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number cursor-pointer hover:scale-[1.01]", !href && "pointer-events-none")}
            >
              <CardHeader>
                <div className="flex justify-between">
                  <img
                    src={icon}
                    className="mb-6 text-primary size-12"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0
                    {index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
