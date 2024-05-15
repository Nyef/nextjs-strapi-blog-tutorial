/** @type {import("next").NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/blog",
                destination: "/",
                permanent: false,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                // Local Strapi instance:
                hostname: "localhost",
                // port: "1337",
                // protocol: "http",
            }
        ],
    }
};

export default nextConfig;
