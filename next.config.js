/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Hide the dev-mode "outdated" version indicator and build-activity spinner.
  // We're intentionally on Next 14.2.x LTS for stability — Next 15/16 are
  // major-version upgrades with breaking changes, deferred for now.
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
}

module.exports = nextConfig
