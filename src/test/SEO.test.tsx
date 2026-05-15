import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import SEO from "@/components/SEO";

describe("SEO", () => {
  it("renders without crashing", () => {
    const helmetContext = {};
    render(
      <HelmetProvider context={helmetContext}>
        <SEO
          title="Test Title"
          description="Test description"
          canonical="https://www.aaapak.com/"
        />
      </HelmetProvider>
    );
  });
});
