/** @type {import('next').NextConfig} */
// FIXME: only allow correct image sources in prod
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["geist"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "dummyimage.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "assets.aceternity.com",
                port: "",
                pathname: "/**",
            },

        ],
    },
};

export default nextConfig;
