import type { NextConfig } from "next";

// GitHub Pages deploys static HTML only — no Node runtime, no proxy/
// middleware, no image optimisation. We toggle the export-only build
// path via the GITHUB_PAGES env var so local `bun dev` and Vercel
// deploys still get the full Next 16 feature set.

const isPages = process.env.GITHUB_PAGES === "true";

// Project Pages serve under /<repo-name>/. Custom domains serve at
// root — workflow sets NEXT_PUBLIC_BASE_PATH="" to drop the prefix.
// Next requires basePath to start with "/" or be undefined; treat ""
// as "no prefix" by leaving both basePath and assetPrefix unset.
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/vcom-product-page";
const repoBasePath = rawBasePath === "" ? undefined : rawBasePath;

const nextConfig: NextConfig = {
  output: isPages ? "export" : undefined,
  basePath: isPages ? repoBasePath : undefined,
  assetPrefix: isPages && repoBasePath ? `${repoBasePath}/` : undefined,
  // Trailing slash ensures /en/ resolves to /en/index.html on Pages.
  trailingSlash: isPages ? true : undefined,
  // next/image needs a server. Disable optimisation for static export.
  images: { unoptimized: isPages },
};

export default nextConfig;
