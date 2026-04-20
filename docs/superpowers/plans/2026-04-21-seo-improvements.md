# SEO Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve SEO of the AAA Pak Vite+React SPA by adding pre-rendering, dynamic meta tags, structured data, sitemap, proper heading hierarchy, image lazy loading, and code splitting — without changing any UI or design.

**Architecture:** Install `react-snap` to snapshot the single `/` route as static HTML post-build; use `react-helmet-async` to manage page meta tags dynamically; add JSON-LD Organization schema inline in `index.html`; fix one H2→p heading regression in HeroSection; add `loading="lazy"` to all non-hero images; add `React.lazy` splits for below-fold sections.

**Tech Stack:** Vite 5, React 18, TypeScript, react-helmet-async, react-snap (dev), vitest + @testing-library/react

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Modify | `package.json` | add deps, postbuild script |
| Modify | `index.html` | base fallback meta + JSON-LD schema |
| Modify | `src/main.tsx` | hydrateRoot support for react-snap |
| Modify | `src/App.tsx` | wrap in HelmetProvider |
| Create | `src/components/SEO.tsx` | per-page title/description/OG/Twitter helmet |
| Modify | `src/pages/Index.tsx` | use SEO component + React.lazy splits |
| Modify | `src/components/HeroSection.tsx` | H2 subtitle → p tag |
| Modify | `src/components/ProductCard.tsx` | add loading="lazy" (already has it) |
| Modify | `src/components/IndustriesSection.tsx` | add loading="lazy" to img |
| Modify | `src/components/ProcessSection.tsx` | add loading="lazy" to img |
| Modify | `src/components/ServicesSection.tsx` | add loading="lazy" to img |
| Modify | `src/components/PrintingSection.tsx` | add loading="lazy" to img |
| Modify | `src/components/PackagingShowcaseSection.tsx` | add loading="lazy" to img |
| Modify | `src/components/PackagingGallerySection.tsx` | add loading="lazy" to img |
| Modify | `src/components/FeatureHighlightsSection.tsx` | add loading="lazy" to img |
| Modify | `src/components/EcoValuesSection.tsx` | add loading="lazy" to img |
| Create | `public/sitemap.xml` | machine-readable URL list |
| Modify | `public/robots.txt` | add Sitemap: directive |

---

## Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install react-helmet-async and react-snap**

```bash
cd /Users/Creatiks/Downloads/earth-flow-build-main
npm install react-helmet-async
npm install --save-dev react-snap
```

Expected: both packages appear in `package.json` dependencies.

- [ ] **Step 2: Add postbuild script to package.json**

Open `package.json`. In the `"scripts"` section, add `"postbuild"` after `"build"`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "postbuild": "react-snap",
  "build:dev": "vite build --mode development",
  "lint": "eslint .",
  "preview": "vite preview",
  "test": "vitest run",
  "test:watch": "vitest"
},
```

Also add react-snap configuration at the top level of `package.json` (outside `scripts`):

```json
"reactSnap": {
  "source": "dist",
  "minifyHtml": {
    "collapseWhitespace": false,
    "removeComments": false
  },
  "puppeteerArgs": ["--no-sandbox", "--disable-setuid-sandbox"],
  "crawl": false,
  "include": ["/"]
}
```

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat(seo): install react-helmet-async and react-snap"
```

---

## Task 2: Update index.html with Full Meta Tags + JSON-LD

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace index.html head with complete meta + JSON-LD**

Replace the entire `<head>` block in `index.html` with:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Custom Packaging Boxes | AAA PAK — USA & Canada</title>
    <meta name="description" content="AAA PAK offers premium custom packaging — corrugated boxes, mailer bags, rigid boxes, retail packaging & more. Free design support. Ships across USA & Canada." />
    <meta name="author" content="AAA PAK" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.aaapak.com/" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.aaapak.com/" />
    <meta property="og:title" content="Custom Packaging Boxes | AAA PAK — USA & Canada" />
    <meta property="og:description" content="Premium custom packaging solutions with expert design support and fast turnaround. Corrugated, rigid, mailer, retail & more." />
    <meta property="og:image" content="https://www.aaapak.com/og-image.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="AAA PAK" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@aaapak" />
    <meta name="twitter:title" content="Custom Packaging Boxes | AAA PAK — USA & Canada" />
    <meta name="twitter:description" content="Premium custom packaging solutions with expert design support and fast turnaround." />
    <meta name="twitter:image" content="https://www.aaapak.com/og-image.jpg" />

    <!-- JSON-LD: Organization -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AAA PAK",
      "url": "https://www.aaapak.com",
      "logo": "https://www.aaapak.com/logo.png",
      "description": "Premium custom packaging manufacturer serving USA and Canada. Corrugated boxes, rigid boxes, mailer bags, retail packaging and more.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "areaServed": ["US", "CA"],
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://aaapak.com"
      ]
    }
    </script>

    <!-- JSON-LD: WebSite -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "AAA PAK",
      "url": "https://www.aaapak.com",
      "description": "Custom packaging boxes manufacturer — corrugated, rigid, mailer, retail packaging for USA & Canada.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.aaapak.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat(seo): add full OG/Twitter tags and JSON-LD schema to index.html"
```

---

## Task 3: Add SEO Component (react-helmet-async)

**Files:**
- Create: `src/components/SEO.tsx`
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/test/SEO.test.tsx`:

```tsx
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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — `Cannot find module '@/components/SEO'`

- [ ] **Step 3: Create SEO.tsx**

Create `src/components/SEO.tsx`:

```tsx
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const SEO = ({
  title,
  description,
  canonical,
  ogImage = "https://www.aaapak.com/og-image.jpg",
}: SEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={ogImage} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />
  </Helmet>
);

export default SEO;
```

- [ ] **Step 4: Wrap App in HelmetProvider**

Modify `src/App.tsx` — import HelmetProvider and wrap the return:

```tsx
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
```

- [ ] **Step 5: Update main.tsx for hydrateRoot (react-snap support)**

Replace `src/main.tsx` entirely:

```tsx
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
```

- [ ] **Step 6: Run tests to verify passing**

```bash
npm test
```

Expected: PASS — SEO test passes.

- [ ] **Step 7: Commit**

```bash
git add src/components/SEO.tsx src/App.tsx src/main.tsx src/test/SEO.test.tsx
git commit -m "feat(seo): add SEO component with react-helmet-async, update main.tsx for hydration"
```

---

## Task 4: Use SEO Component in Index Page

**Files:**
- Modify: `src/pages/Index.tsx`

- [ ] **Step 1: Add SEO component to Index.tsx**

Modify `src/pages/Index.tsx` — add SEO import at the top and use it as the first child inside `<main>` (or before Header):

```tsx
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import CertificationsSection from "@/components/CertificationsSection";
import StatsBarSection from "@/components/StatsBarSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IndustriesSection from "@/components/IndustriesSection";
import PrintingSection from "@/components/PrintingSection";
import MidCTAStrip from "@/components/MidCTAStrip";
import PackagingShowcaseSection from "@/components/PackagingShowcaseSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen">
    <SEO
      title="Custom Packaging Boxes | AAA PAK — USA & Canada"
      description="AAA PAK offers premium custom packaging — corrugated boxes, mailer bags, rigid boxes, retail packaging & more. Free design support. Ships across USA & Canada."
      canonical="https://www.aaapak.com/"
    />
    <Header />
    <main>
      <HeroSection />
      <TrustBar />
      <ProductsSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
      <CertificationsSection />
      <StatsBarSection />
      <TestimonialsSection />
      <IndustriesSection />
      <PrintingSection />
      <MidCTAStrip />
      <PackagingShowcaseSection />
      <FAQSection />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/Index.tsx
git commit -m "feat(seo): add SEO meta tags to Index page"
```

---

## Task 5: Fix Heading Structure

**Files:**
- Modify: `src/components/HeroSection.tsx`

The H2 `"ONE STOP PACKAGING SOLUTION"` is inside the same section as the H1 and visually acts as a subtitle/tagline. Having an H2 immediately inside the H1 block confuses crawlers. Change it to a `<p>` with the same Tailwind classes.

- [ ] **Step 1: Write failing test**

Create `src/test/HeroSection.test.tsx`:

```tsx
import { render } from "@testing-library/react";
import HeroSection from "@/components/HeroSection";

describe("HeroSection heading structure", () => {
  it("has exactly one h1", () => {
    const { container } = render(<HeroSection />);
    const h1s = container.querySelectorAll("h1");
    expect(h1s).toHaveLength(1);
  });

  it("has no h2 inside the hero section itself", () => {
    const { container } = render(<HeroSection />);
    const section = container.querySelector("section");
    const h2s = section?.querySelectorAll("h2");
    expect(h2s?.length).toBe(0);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test
```

Expected: FAIL — second test fails because H2 exists inside section.

- [ ] **Step 3: Fix HeroSection.tsx — change H2 subtitle to p**

In `src/components/HeroSection.tsx`, find:

```tsx
<div className="mt-4 mb-4">
  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary uppercase tracking-wide">
    ONE STOP PACKAGING SOLUTION
  </h2>
</div>
```

Replace with:

```tsx
<div className="mt-4 mb-4">
  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-primary uppercase tracking-wide">
    ONE STOP PACKAGING SOLUTION
  </p>
</div>
```

- [ ] **Step 4: Run tests to verify passing**

```bash
npm test
```

Expected: PASS — both HeroSection heading tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/components/HeroSection.tsx src/test/HeroSection.test.tsx
git commit -m "fix(seo): replace H2 hero subtitle with p tag to fix heading hierarchy"
```

---

## Task 6: Add loading="lazy" to All Non-Hero Images

**Files:**
- Modify: `src/components/IndustriesSection.tsx`
- Modify: `src/components/ProcessSection.tsx`
- Modify: `src/components/ServicesSection.tsx`
- Modify: `src/components/PrintingSection.tsx`
- Modify: `src/components/PackagingShowcaseSection.tsx`
- Modify: `src/components/PackagingGallerySection.tsx`
- Modify: `src/components/FeatureHighlightsSection.tsx`
- Modify: `src/components/EcoValuesSection.tsx`

The hero image in `HeroSection.tsx` should NOT get `loading="lazy"` (it's above the fold — LCP image). All other images should.

- [ ] **Step 1: Add loading="lazy" to IndustriesSection.tsx**

Open `src/components/IndustriesSection.tsx`. Find the `<img` tag and add `loading="lazy"`:

```tsx
<img
  src={industry.image}
  alt={industry.name}
  loading="lazy"
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
/>
```

- [ ] **Step 2: Add loading="lazy" to ProcessSection.tsx**

Open `src/components/ProcessSection.tsx`. Find the `<img` tag and add `loading="lazy"`:

```tsx
<img
  src={s.image}
  alt={s.title}
  loading="lazy"
  className="w-full h-full object-cover"
/>
```

- [ ] **Step 3: Add loading="lazy" to ServicesSection.tsx**

Open `src/components/ServicesSection.tsx`. Find the `<img` tag and add `loading="lazy"`:

```tsx
<img
  src={s.image}
  alt={s.title}
  loading="lazy"
  className="w-full h-full object-cover"
/>
```

- [ ] **Step 4: Add loading="lazy" to PrintingSection.tsx**

Open `src/components/PrintingSection.tsx`. Find the `<img` tag and add `loading="lazy"`:

```tsx
<img
  src={t.image}
  alt={t.title}
  loading="lazy"
  className="w-full h-full object-cover"
/>
```

- [ ] **Step 5: Add loading="lazy" to PackagingShowcaseSection.tsx**

Open `src/components/PackagingShowcaseSection.tsx`. Find both `<img` tags and add `loading="lazy"` to each:

```tsx
<img
  src={item.image}
  alt={item.label}
  loading="lazy"
  className="w-full h-full object-cover"
/>
```

- [ ] **Step 6: Add loading="lazy" to PackagingGallerySection.tsx**

Open `src/components/PackagingGallerySection.tsx`. Add `loading="lazy"` to all 5 img tags:

```tsx
<img src={workHero} alt="AAA Pak warehouse" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
<img src={workRound} alt="Premium round box" loading="lazy" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
<img src={workJewelry} alt="Jewelry packaging" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
<img src={workElite} alt="Elite luxury box set" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
<img src={workCollapsible} alt="Luxury collapsible box" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
```

- [ ] **Step 7: Add loading="lazy" to FeatureHighlightsSection.tsx**

Open `src/components/FeatureHighlightsSection.tsx`. Find the `<img` tag and add `loading="lazy"`.

- [ ] **Step 8: Add loading="lazy" to EcoValuesSection.tsx**

Open `src/components/EcoValuesSection.tsx`. Find the `<img` tag and add `loading="lazy"`.

- [ ] **Step 9: Commit**

```bash
git add src/components/IndustriesSection.tsx src/components/ProcessSection.tsx src/components/ServicesSection.tsx src/components/PrintingSection.tsx src/components/PackagingShowcaseSection.tsx src/components/PackagingGallerySection.tsx src/components/FeatureHighlightsSection.tsx src/components/EcoValuesSection.tsx
git commit -m "perf(seo): add loading=lazy to all below-fold images"
```

---

## Task 7: Add Code Splitting for Below-Fold Sections

**Files:**
- Modify: `src/pages/Index.tsx`

Split heavy below-fold sections with `React.lazy` + `Suspense`. This reduces initial JS bundle size and improves TTI.

- [ ] **Step 1: Update Index.tsx with React.lazy splits**

Replace `src/pages/Index.tsx` with:

```tsx
import { lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProductsSection from "@/components/ProductsSection";

// Lazy-load below-fold sections
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const CertificationsSection = lazy(() => import("@/components/CertificationsSection"));
const StatsBarSection = lazy(() => import("@/components/StatsBarSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const IndustriesSection = lazy(() => import("@/components/IndustriesSection"));
const PrintingSection = lazy(() => import("@/components/PrintingSection"));
const MidCTAStrip = lazy(() => import("@/components/MidCTAStrip"));
const PackagingShowcaseSection = lazy(() => import("@/components/PackagingShowcaseSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen">
    <SEO
      title="Custom Packaging Boxes | AAA PAK — USA & Canada"
      description="AAA PAK offers premium custom packaging — corrugated boxes, mailer bags, rigid boxes, retail packaging & more. Free design support. Ships across USA & Canada."
      canonical="https://www.aaapak.com/"
    />
    <Header />
    <main>
      <HeroSection />
      <TrustBar />
      <ProductsSection />
      <Suspense fallback={null}>
        <ServicesSection />
        <ProcessSection />
        <BenefitsSection />
        <CertificationsSection />
        <StatsBarSection />
        <TestimonialsSection />
        <IndustriesSection />
        <PrintingSection />
        <MidCTAStrip />
        <PackagingShowcaseSection />
        <FAQSection />
        <ContactSection />
      </Suspense>
    </main>
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
    <WhatsAppButton />
  </div>
);

export default Index;
```

- [ ] **Step 2: Verify dev server still works**

```bash
npm run dev
```

Visit http://localhost:8080 — all sections should render correctly.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Index.tsx
git commit -m "perf(seo): add React.lazy code splitting for below-fold sections"
```

---

## Task 8: Add sitemap.xml and Update robots.txt

**Files:**
- Create: `public/sitemap.xml`
- Modify: `public/robots.txt`

- [ ] **Step 1: Create public/sitemap.xml**

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.aaapak.com/</loc>
    <lastmod>2026-04-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

- [ ] **Step 2: Update public/robots.txt**

Replace `public/robots.txt` with:

```
User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

Sitemap: https://www.aaapak.com/sitemap.xml
```

- [ ] **Step 3: Commit**

```bash
git add public/sitemap.xml public/robots.txt
git commit -m "feat(seo): add sitemap.xml and sitemap directive to robots.txt"
```

---

## Task 9: Pre-render with react-snap (Build Verification)

**Files:**
- No source changes — this verifies the build produces pre-rendered HTML.

- [ ] **Step 1: Run production build with pre-rendering**

```bash
npm run build
```

Expected output ends with react-snap running:
```
Prerendering /
✅ Done
```

If you see `Error: Could not find browser` install chromium separately:
```bash
node node_modules/puppeteer/install.js
```

- [ ] **Step 2: Verify pre-rendered HTML contains content**

```bash
grep -c "Create Custom Boxes" dist/index.html
```

Expected: `1` (content is present in static HTML, not just an empty div)

- [ ] **Step 3: Verify JSON-LD is in the pre-rendered output**

```bash
grep -c "application/ld+json" dist/index.html
```

Expected: `2` (Organization + WebSite schemas)

- [ ] **Step 4: Preview the build locally**

```bash
npm run preview
```

Visit http://localhost:4173 — do View Source (`Cmd+U`) — you should see actual page content in the HTML source, not just `<div id="root"></div>`.

- [ ] **Step 5: Commit**

No source changes. This task is purely verification.

---

## Self-Review Checklist

### Spec Coverage

| Spec Step | Task |
|-----------|------|
| STEP 1: Pre-rendering | Task 9 (react-snap) |
| STEP 2: Dynamic meta tags per page | Task 3 (SEO component) + Task 4 (Index) |
| STEP 3: Sitemap + robots.txt | Task 8 |
| STEP 4: Fix heading structure | Task 5 (HeroSection H2→p) |
| STEP 5: Image lazy loading + code splitting | Task 6 + Task 7 |
| STEP 6: Crawlable links | Already satisfied — all nav links use `<a href>` |
| STEP 7: Structured data (JSON-LD) | Task 2 (Organization + WebSite schemas) |
| STEP 8: Verify output | Task 9 (build + grep verification) |

### Notes on Spec Gaps

- **Spec mentions `/about`, `/contact`, `/products/*`, `/industries/*`, `/blog/*`** — these routes do not exist in the app. The app is a single-page landing page at `/`. react-snap is configured to only pre-render `/`. If these routes are added later, update `"include"` in the `reactSnap` package.json config.
- **WebP/AVIF conversion** — The spec mentions image format optimization. This plan adds `loading="lazy"` for LCP/FCP improvement. Full WebP conversion requires `vite-imagetools` and refactoring every `import` — that is a separate task worth doing if Lighthouse LCP score is still poor after this plan.
- **OG image** — `og:image` is set to `https://www.aaapak.com/og-image.jpg`. This file must exist at that URL on the live site. Add the actual OG image to `public/og-image.jpg` if not already present.
