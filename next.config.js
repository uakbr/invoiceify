/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["puppeteer-core"],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.map$/,
            use: "ignore-loader",
        });
        return config;
    },
    // Add optimized font loading
    optimizeFonts: true,
    images: {
        domains: ['fonts.gstatic.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fonts.gstatic.com',
                pathname: '**',
            },
        ],
    },
    // Increase network timeout for external resources
    httpAgentOptions: {
        keepAlive: true,
        timeout: 60000, // Increase timeout to 60 seconds
    }
};

// Bundle analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
