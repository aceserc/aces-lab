import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Suspense } from "react";

import { buttonVariants } from "@/components/ui/button";

import A4Letter from "./-components/a4-letter";
import Form from "./-components/form";
import { LetterContextProvider } from "./-components/letter-context";

export const Route = createLazyFileRoute("/tools/letter-generator/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <LetterContextProvider>
      <main className="container my-12 space-y-12">
        <header className="mt-4 md:mt-6 flex justify-center items-center p-2 w-fit border-b text-lg font-semibold gap-2.5">
          <Link
            href="/"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <ArrowLeft />
          </Link>
          <img
            src="https://www.svgrepo.com/show/89294/letter.svg"
            className="text-primary size-6"
          />
          {" "}
          Letter Generator
        </header>
        <div className="grid grid-cols-5 gap-16">
          <div className="bg-muted rounded-md col-span-3 h-[90vh] w-full sticky top-4">
            <Suspense fallback={(
              <div>
                Loading...
              </div>
            )}
            >
              <A4Letter />
            </Suspense>
          </div>
          <Form />
        </div>
      </main>
    </LetterContextProvider>
  );
}
