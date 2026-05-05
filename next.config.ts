import type { NextConfig } from "next";

// GitHub Pages deploys static HTML only — no Node runtime, no proxy/
// middleware, no image optimisation. We toggle the export-only build
// path via the GITHUB_PAGES env var so local `bun dev` and Vercel
// deploys still get the full Next 16 feature set.

const isPages = process.env.GITHUB_PAGES === "true";

// Project Pages serve under /<repo-name>/. Custom domains can drop
// these prefixes by setting NEXT_PUBLIC_BASE_PATH="" in the workflow.
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/vcom-product-page";

const nextConfig: NextConfig = {
  output: isPages ? "export" : undefined,
  basePath: isPages ? repoBasePath : undefined,
  assetPrefix: isPages ? `${repoBasePath}/` : undefined,
  // Trailing slash ensures /en/ resolves to /en/index.html on Pages.
  trailingSlash: isPages ? true : undefined,
  // next/image needs a server. Disable optimisation for static export.
  images: { unoptimized: isPages },
};

export default nextConfig;
