/** @type {import('next').NextConfig} */
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
        ],
    },
};

export default nextConfig;
