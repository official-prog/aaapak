import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";

const renderHero = () =>
  render(
    <HelmetProvider>
      <HeroSection />
    </HelmetProvider>
  );

describe("HeroSection heading structure", () => {
  it("has exactly one h1", () => {
    const { container } = renderHero();
    const h1s = container.querySelectorAll("h1");
    expect(h1s).toHaveLength(1);
  });

  it("has no h2 inside the hero section itself", () => {
    const { container } = renderHero();
    const section = container.querySelector("section");
    const h2s = section?.querySelectorAll("h2");
    expect(h2s?.length).toBe(0);
  });
});
