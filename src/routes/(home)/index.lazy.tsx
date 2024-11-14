import { createLazyFileRoute } from "@tanstack/react-router";

import { FooterSection } from "./-components/footer";
import Header from "./-components/header";
import ToolsSection from "./-components/tools";

export const Route = createLazyFileRoute("/(home)/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <ToolsSection />
      <FooterSection />
    </>
  );
}
