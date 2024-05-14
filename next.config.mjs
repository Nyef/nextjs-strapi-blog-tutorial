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
};

export default nextConfig;
